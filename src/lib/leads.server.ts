// Server-only helpers for lead capture: Google Sheets append + DB insert.

const SPREADSHEET_ID = "1_kdzz44E2w4AV5Sr2i00XTpRtQ9jDlzdml8Bg5hOvnM";
const SHEET_TAB = "Amity_ADS";
const GATEWAY = "https://connector-gateway.lovable.dev";

export type LeadInput = {
  fullName: string;
  email: string;
  phone: string;
  course?: string | null;
  leadSource?: string | null;
  pagePath?: string | null;
};

function istTimestamp(): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export async function appendLeadToSheet(lead: LeadInput): Promise<void> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !sheetsKey) {
    throw new Error("Google Sheets connector credentials are not configured");
  }

  const range = `${SHEET_TAB}!A:F`;
  const url =
    `${GATEWAY}/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append` +
    `?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": sheetsKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [
        [
          lead.fullName,
          lead.email,
          lead.phone,
          lead.course ?? "",
          istTimestamp(),
          lead.leadSource ?? "Website",
        ],
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sheets append failed (${res.status}): ${text.slice(0, 300)}`);
  }

  const payload = (await res.json()) as { updates?: { updatedRows?: number } };
  if (!payload.updates?.updatedRows) {
    throw new Error("Sheets append returned without adding a row");
  }
}

export async function saveLead(lead: LeadInput): Promise<{ ok: true }> {
  let sheetError: string | null = null;
  try {
    await appendLeadToSheet(lead);
  } catch (error) {
    sheetError = error instanceof Error ? error.message : String(error);
    console.error("[leads] sheet append failed:", sheetError);
  }

  // The database write must never break lead capture: if the admin client or
  // its env vars are unavailable in the deployed environment, we still accept
  // the lead as long as it reached the sheet.
  let dbError: string | null = null;
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      full_name: lead.fullName,
      email: lead.email,
      phone: lead.phone,
      course: lead.course ?? null,
      lead_source: lead.leadSource ?? "Website",
      page_path: lead.pagePath ?? null,
      synced_to_sheet: sheetError === null,
      sheet_error: sheetError,
    });
    // Duplicate (same phone + course) is not a user-facing failure.
    if (error && error.code !== "23505") dbError = error.message;
  } catch (error) {
    dbError = error instanceof Error ? error.message : String(error);
  }

  if (dbError) console.error("[leads] db insert failed:", dbError);

  if (dbError && sheetError) {
    throw new Error("Could not save your details. Please try again.");
  }

  return { ok: true };
}

