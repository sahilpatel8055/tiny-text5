import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) =>
    z
      .object({
        fullName: z.string().trim().min(2).max(120),
        email: z.string().trim().email().max(160),
        phone: z
          .string()
          .trim()
          .transform((value) => value.replace(/[^\d]/g, ""))
          .refine((value) => value.length >= 10 && value.length <= 12, "Enter a valid mobile number"),
        course: z.string().trim().max(160).optional().nullable(),
        leadSource: z.string().trim().max(120).optional().nullable(),
        pagePath: z.string().trim().max(300).optional().nullable(),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { saveLead } = await import("./leads.server");
    return await saveLead(data);
  });
