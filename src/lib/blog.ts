export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "is-amity-online-degree-valid",
    title: "Is an Amity Online Degree Valid in India and Abroad?",
    description: "Amity Online degrees are UGC-DEB entitled and WES recognized. Here's what that means for jobs, higher studies, and government roles.",
    category: "Degree Validity",
    date: "2026-06-12",
    readTime: "6 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "UGC-DEB Entitlement", body: "Amity University's online degrees are entitled by UGC-DEB, making them equivalent to on-campus degrees for jobs, PSU exams, and further studies across India." },
      { heading: "International Recognition", body: "WES (World Education Services) evaluates Amity Online degrees for use in the US and Canada, and the university is also recognized by AIU, enabling global academic and professional mobility." },
      { heading: "Where it counts", body: "The degree is accepted for UPSC, SSC, banking, corporate hiring, and PG admissions in India and abroad." },
    ],
  },
  {
    slug: "top-online-mba-alumni-success-stories",
    title: "Top Online MBA Alumni Success Stories from Amity",
    description: "How Amity Online MBA graduates transitioned into leadership roles, switched industries, and grew their salaries by up to 3x.",
    category: "Alumni Stories",
    date: "2026-05-28",
    readTime: "8 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "From Engineer to Product Lead", body: "Rahul, a mechanical engineer, moved into product management at a fintech unicorn after completing Amity Online MBA in Marketing." },
      { heading: "Restart After a Career Break", body: "Priya returned to work as an HR business partner after a 4-year break using Amity Online MBA in HR." },
      { heading: "Entrepreneurial Turnaround", body: "Karan scaled his family business by 3x using operations and finance frameworks from the program." },
    ],
  },
  {
    slug: "bba-salary-in-india",
    title: "BBA Salary in India 2026 — Roles, Range and Growth",
    description: "Complete guide to BBA salaries in India in 2026 — average pay, top hiring companies, and how an online BBA impacts your package.",
    category: "Career Guides",
    date: "2026-05-14",
    readTime: "7 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Average BBA Salary", body: "Freshers earn ₹3–6 LPA; mid-career professionals with 5+ years earn ₹8–15 LPA in India." },
      { heading: "Top Roles", body: "Business Analyst, Marketing Executive, Sales Manager, HR Associate, and Operations Analyst." },
      { heading: "Online vs Regular BBA", body: "Salary parity is now standard for UGC-entitled online BBA graduates from top universities like Amity." },
    ],
  },
  {
    slug: "online-mba-degrees-in-india",
    title: "Best Online MBA Degrees in India for 2026",
    description: "Compare the top online MBA programs in India by fees, specializations, accreditation, and placement outcomes.",
    category: "Course Guides",
    date: "2026-05-02",
    readTime: "10 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "How to Choose", body: "Look for UGC-DEB entitlement, NAAC A+/A++ ratings, WES recognition, and real placement support." },
      { heading: "Top Programs", body: "Amity Online, Manipal Online, NMIMS, and Jain Online are among the most trusted." },
      { heading: "Amity Advantage", body: "Amity Online offers 12+ MBA specializations with dedicated career services and no-cost EMI." },
    ],
  },
  {
    slug: "online-bcom-cfa-cpa-guide",
    title: "Online BCom + CFA/CPA: Your Path to a Global Finance Career",
    description: "Combining an online BCom with CFA or CPA is a proven route into investment banking, audit, and corporate finance. Here's how.",
    category: "Course Guides",
    date: "2026-04-18",
    readTime: "9 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Why BCom + Certifications", body: "A BCom provides accounting fundamentals; CFA/CPA adds global specialization." },
      { heading: "Timeline", body: "Complete BCom in 3 years while clearing CFA Level 1 or CPA foundation exams alongside." },
      { heading: "Career Impact", body: "Starting salaries rise from ₹4 LPA to ₹8–12 LPA with a global certification." },
    ],
  },
  {
    slug: "top-job-roles-after-bcom-finance",
    title: "Top Job Roles After BCom in Finance (2026 Update)",
    description: "The highest-paying and most in-demand job roles for BCom Finance graduates in India, with salary benchmarks.",
    category: "Career Guides",
    date: "2026-04-05",
    readTime: "6 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Financial Analyst", body: "₹4–10 LPA. Analyze company financials and build models for decision-making." },
      { heading: "Investment Banking Analyst", body: "₹6–14 LPA. Support M&A, IPO, and capital raising deals." },
      { heading: "Tax & Audit Consultant", body: "₹4–10 LPA. Big-4 firms actively hire BCom Finance grads." },
    ],
  },
  {
    slug: "why-choose-an-online-bcom-degree",
    title: "Why Choose an Online BCom Degree in 2026?",
    description: "Online BCom degrees from UGC-entitled universities offer flexibility, affordability, and career growth. Here's a detailed guide.",
    category: "Course Guides",
    date: "2026-03-22",
    readTime: "6 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Flexibility for Working Professionals", body: "Attend live weekend classes and access recorded lectures anytime." },
      { heading: "Lower Cost", body: "Fees start under ₹1 lakh — 40–60% less than on-campus programs." },
      { heading: "Same Recognition", body: "UGC-entitled online BCom is treated at par with regular BCom for jobs and PG admissions." },
    ],
  },
  {
    slug: "mba-vs-mca-salary",
    title: "MBA vs MCA: Which Pays More in India?",
    description: "Salary comparison of MBA vs MCA graduates in India — starting packages, growth curves, and long-term earning potential.",
    category: "Career Guides",
    date: "2026-03-10",
    readTime: "7 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Starting Salary", body: "MBA freshers earn ₹6–12 LPA; MCA freshers earn ₹5–10 LPA on average." },
      { heading: "Long-term Growth", body: "MCA can outpace MBA in product/tech firms with 10+ years experience." },
      { heading: "Choose Based on Interest", body: "Pick MBA for business roles, MCA for pure tech and engineering roles." },
    ],
  },
  {
    slug: "how-to-apply-amity-online-mba",
    title: "How to Apply for Amity Online MBA — Step-by-Step 2026 Guide",
    description: "Complete step-by-step guide to applying for the Amity Online MBA — eligibility, documents, fees, and admission timeline.",
    category: "Admission Guides",
    date: "2026-02-25",
    readTime: "5 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Eligibility", body: "Bachelor's degree with 50% marks (45% for reserved categories) from a recognized university." },
      { heading: "Documents", body: "Marksheets, degree certificate, ID proof, and passport-size photo." },
      { heading: "Admission Process", body: "Fill the application, upload documents, pay fees, and receive login within 48 hours." },
    ],
  },
  {
    slug: "online-mca-scope-career",
    title: "Online MCA: Scope, Career, and Salary in 2026",
    description: "Is Online MCA worth it in 2026? Explore career scope, top job roles, and expected salary for MCA graduates.",
    category: "Course Guides",
    date: "2026-02-11",
    readTime: "8 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Scope", body: "Rising demand in cloud, AI/ML, cybersecurity, and full-stack development." },
      { heading: "Salary", body: "Freshers ₹5–10 LPA; senior engineers ₹15–30 LPA." },
      { heading: "Best For", body: "Working IT professionals who want a UGC-entitled PG in computer applications." },
    ],
  },
  {
    slug: "online-bca-vs-btech",
    title: "Online BCA vs B.Tech: Which is Better for a Tech Career?",
    description: "BCA vs B.Tech comparison — course structure, fees, career outcomes, and which one suits online learners better.",
    category: "Course Guides",
    date: "2026-01-30",
    readTime: "6 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Course Focus", body: "BCA focuses on software; B.Tech is broader engineering." },
      { heading: "Online Availability", body: "BCA is available online through UGC-DEB; B.Tech typically requires on-campus attendance." },
      { heading: "Career Outcomes", body: "Both lead to software engineer roles; BCA + MCA is a strong online-only path." },
    ],
  },
  {
    slug: "amity-online-scholarship-guide",
    title: "Amity Online Scholarships 2026 — Complete Guide",
    description: "Details of all Amity Online scholarships in 2026 — merit, defence, divyaang, and early-bird waivers up to 50%.",
    category: "Fees & Scholarships",
    date: "2026-01-18",
    readTime: "5 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Merit Scholarship", body: "Up to 50% waiver based on 12th/UG marks." },
      { heading: "Defence Scholarship", body: "20% waiver for defence personnel and their dependents." },
      { heading: "Early-bird Discount", body: "10–15% off on registering before the batch cut-off." },
    ],
  },
  {
    slug: "online-degree-vs-distance-degree",
    title: "Online Degree vs Distance Degree — What's the Difference?",
    description: "Understand the key differences between online and distance learning degrees, their recognition, and which suits you best.",
    category: "Degree Validity",
    date: "2026-01-05",
    readTime: "5 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Delivery Mode", body: "Online is fully digital with live classes; distance is largely self-study with printed material." },
      { heading: "Recognition", body: "Both are UGC-DEB entitled if offered by approved universities." },
      { heading: "Best For You", body: "Choose online for interactivity; distance for lower cost and self-paced learning." },
    ],
  },
  {
    slug: "best-mba-specializations-2026",
    title: "Best MBA Specializations in 2026 (Salary + Demand)",
    description: "Top MBA specializations for 2026 ranked by hiring demand and salary — from Data Analytics to Marketing and HR.",
    category: "Career Guides",
    date: "2025-12-20",
    readTime: "9 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Data Analytics", body: "Highest growth; ₹8–20 LPA freshers to mid-career." },
      { heading: "Marketing", body: "Digital marketing roles pay ₹6–15 LPA at mid-level." },
      { heading: "Finance", body: "Investment banking and FP&A pay ₹8–18 LPA." },
    ],
  },
  {
    slug: "amity-online-vs-manipal-online",
    title: "Amity Online vs Manipal Online — Which is Better in 2026?",
    description: "Detailed comparison of Amity Online and Manipal Online on fees, courses, placement, and student experience.",
    category: "Comparisons",
    date: "2025-12-08",
    readTime: "8 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Accreditation", body: "Both are NAAC A+ and UGC-DEB entitled." },
      { heading: "Fees", body: "Manipal is 20–30% cheaper; Amity has more specializations and career services." },
      { heading: "Career Support", body: "Amity offers dedicated placement cell with industry hiring partners." },
    ],
  },
  {
    slug: "how-to-choose-online-university",
    title: "How to Choose the Right Online University in India",
    description: "A practical checklist to shortlist the right online university — accreditation, fees, faculty, tech, and placement.",
    category: "Admission Guides",
    date: "2025-11-24",
    readTime: "7 min",
    author: "Amity Online Editorial",
    content: [
      { heading: "Accreditation First", body: "Only choose UGC-DEB entitled universities with NAAC A/A+/A++." },
      { heading: "Learning Platform", body: "Check for live classes, recordings, mobile app, and mentorship." },
      { heading: "Placement Track Record", body: "Ask for hiring partner list, avg salary, and alumni references." },
    ],
  },
];

export const findBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export type StudentReview = {
  name: string;
  city: string;
  course: string;
  rating: number;
  date: string;
  review: string;
};

export const studentReviews: StudentReview[] = [
  { name: "Rahul Verma", city: "Mumbai", course: "Online MBA", rating: 5, date: "2026-05-15", review: "The flexibility helped me manage my full-time job while completing my MBA. Career services helped me switch to a product role." },
  { name: "Priya Sharma", city: "Delhi", course: "Online MCA", rating: 5, date: "2026-04-22", review: "Loved the live coding sessions and hands-on projects. Landed a Cloud Engineer role at a top MNC." },
  { name: "Karan Singh", city: "Bangalore", course: "Online BBA", rating: 4, date: "2026-04-02", review: "Great content and mentor support. Some quiz UX could improve, but overall a strong program." },
  { name: "Sneha Iyer", city: "Chennai", course: "Online BCom", rating: 5, date: "2026-03-11", review: "Affordable, structured, and recognized. Prof. AMI 3.0 was a game-changer for doubts." },
  { name: "Aditya Rao", city: "Hyderabad", course: "Online MBA", rating: 5, date: "2026-02-27", review: "Industry projects and networking events made this feel like a campus MBA. Fully worth it." },
  { name: "Meera Kapoor", city: "Pune", course: "Online BCA", rating: 4, date: "2026-02-05", review: "Solid faculty and good tech infrastructure. Recording quality is excellent." },
  { name: "Vikram Nair", city: "Kolkata", course: "Online MCom", rating: 5, date: "2026-01-18", review: "Perfect for working professionals — I completed it alongside my CA articleship." },
  { name: "Ananya Das", city: "Ahmedabad", course: "Online MA", rating: 5, date: "2025-12-30", review: "Rich curriculum and empathetic mentors. Would recommend for humanities learners." },
];

export const reviewAggregate = {
  ratingValue: (
    studentReviews.reduce((s, r) => s + r.rating, 0) / studentReviews.length
  ).toFixed(1),
  reviewCount: studentReviews.length,
  totalStudents: 12450,
};
