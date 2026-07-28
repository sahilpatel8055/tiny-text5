import amityHero from "@/assets/lpu-hero.jpg";
import courseBusiness from "@/assets/course-business.jpg";
import courseTech from "@/assets/course-tech.jpg";
import courseArts from "@/assets/course-arts.jpg";
import courseCommerce from "@/assets/course-commerce.jpg";

export type CareerRole = { role: string; salary: string };
export type CurriculumYear = { year: string; subjects: string[] };
export type FeesBreakdown = { fullFees: string; perSemester: string; emi: string };

export type Course = {
  slug: string;
  name: string;
  level: "ug" | "pg";
  duration: string;
  fee: string;
  specializations?: string[];
  image: string;
  rating: number;
  reviews: number;
  tagline: string;
  feesBreakdown: FeesBreakdown;
  curriculum: CurriculumYear[];
  careers: CareerRole[];
};

const ugYears = (subjectsBySem: string[][]): CurriculumYear[] =>
  subjectsBySem.map((subjects, i) => ({ year: `Year ${i + 1}`, subjects }));
const pgYears = ugYears;

const defaultCareers: CareerRole[] = [
  { role: "Business Analyst", salary: "₹5 - 12 LPA" },
  { role: "Product Manager", salary: "₹8 - 18 LPA" },
  { role: "Marketing Manager", salary: "₹6 - 15 LPA" },
  { role: "Operations Manager", salary: "₹5 - 13 LPA" },
  { role: "Financial Analyst", salary: "₹5 - 10 LPA" },
  { role: "HR Manager", salary: "₹5 - 12 LPA" },
];

const techCareers: CareerRole[] = [
  { role: "Software Engineer", salary: "₹6 - 16 LPA" },
  { role: "Data Analyst", salary: "₹5 - 12 LPA" },
  { role: "Cloud Engineer", salary: "₹7 - 18 LPA" },
  { role: "Full Stack Developer", salary: "₹6 - 16 LPA" },
  { role: "Cyber Security Analyst", salary: "₹6 - 14 LPA" },
  { role: "AI/ML Engineer", salary: "₹8 - 22 LPA" },
];

const commerceCareers: CareerRole[] = [
  { role: "Accountant", salary: "₹3 - 7 LPA" },
  { role: "Financial Analyst", salary: "₹4 - 10 LPA" },
  { role: "Tax Consultant", salary: "₹4 - 10 LPA" },
  { role: "Auditor", salary: "₹4 - 9 LPA" },
  { role: "Investment Analyst", salary: "₹5 - 12 LPA" },
  { role: "Banking Officer", salary: "₹4 - 9 LPA" },
];

const artsCareers: CareerRole[] = [
  { role: "Content Writer", salary: "₹3 - 8 LPA" },
  { role: "Public Relations Officer", salary: "₹4 - 9 LPA" },
  { role: "Journalist", salary: "₹4 - 9 LPA" },
  { role: "Social Media Manager", salary: "₹4 - 10 LPA" },
  { role: "Teacher / Educator", salary: "₹3 - 8 LPA" },
  { role: "Civil Services Aspirant", salary: "₹7 - 15 LPA" },
];

export const amity = {
  slug: "amity-online",
  name: "Amity Online",
  shortName: "Amity",
  tagline: "India's No. #1 Online University — UGC-entitled online degrees from Amity University Online",
  image: amityHero,
  established: "2005",
  accreditations: ["UGC-DEB Entitled", "NAAC A+", "WES Recognized", "AICTE Approved"],
  ranking:
    "Recognised as one of India's leading private universities for online learning, with a globally connected alumni network.",
  overview:
    "Amity University Online offers UGC-DEB entitled online degree programs designed for working professionals, homemakers and students who need the flexibility of learning from anywhere in India or abroad.",
  highlights: [
    { label: "Mode", value: "100% Online" },
    { label: "EMI", value: "No-Cost EMI" },
    { label: "Placement", value: "Career Support" },
    { label: "Recognition", value: "UGC Entitled" },
  ],
  approvals: [
    { name: "UGC-DEB Entitled", note: "Online programs entitled by UGC Distance Education Bureau." },
    { name: "NAAC A+", note: "Institutional accreditation grade awarded to Amity University." },
    { name: "WES Recognized", note: "Degrees recognized internationally by World Education Services." },
    { name: "AICTE Approved", note: "Technical programs comply with AICTE norms." },
  ],
  rankings: [
    { title: "NAAC A+", subtitle: "Accredited University", badge: "A+" },
    { title: "QS World University Rankings", subtitle: "Ranked among Asia's leading universities", badge: "QS" },
    { title: "UGC Entitled", subtitle: "Online Degrees = Campus Degree", badge: "UGC" },
    { title: "AICTE Approved", subtitle: "Approved Technical Programs", badge: "AICTE" },
    { title: "Times Higher Education", subtitle: "Featured in THE World University Rankings", badge: "THE" },
    { title: "WES Recognized", subtitle: "For study & work in Canada & USA", badge: "WES" },
    { title: "Ranked #1", subtitle: "India's No. #1 Online University", badge: "#1" },
    { title: "Global Alumni", subtitle: "Alumni across 100+ countries", badge: "100+" },
  ],
  courses: {
    ug: [
      {
        slug: "online-bba",
        name: "Online BBA",
        level: "ug",
        duration: "3 Years",
        fee: "₹1,75,120 total",
        specializations: ["Data Analytics (HCL Tech)", "Travel and Tourism Management", "Business Analytics (KPMG)"],
        image: courseBusiness,
        rating: 4.7,
        reviews: 1420,
        tagline: "Bachelor of Business Administration — build a globally-relevant business foundation.",
        feesBreakdown: { fullFees: "₹1,75,120", perSemester: "₹33,200", emi: "₹7,877/mo" },
        curriculum: ugYears([
          ["Principles of Management", "Business Communication", "Financial Accounting", "Microeconomics", "Business Mathematics"],
          ["Marketing Management", "Human Resource Management", "Business Law", "Cost Accounting", "Organizational Behavior"],
          ["Strategic Management", "Entrepreneurship Development", "Specialization Electives", "Capstone Project"],
        ]),
        careers: defaultCareers,
      },
      {
        slug: "online-bca",
        name: "Online BCA",
        level: "ug",
        duration: "3 Years",
        fee: "₹1,54,000 total",
        specializations: ["Data Science", "Applied Data Engineering (KPMG)", "Financial Technology and AI (Paytm)", "Cloud Security (TCS ION)", "Software Engineering (HCL Tech)", "Data Analytics (TCS ION)", "Data Engineering (HCL Tech)"],
        image: courseTech,
        rating: 4.8,
        reviews: 1680,
        tagline: "Bachelor of Computer Applications — launch a career in modern tech.",
        feesBreakdown: { fullFees: "₹1,54,000", perSemester: "₹29,200", emi: "₹6,927/mo" },
        curriculum: ugYears([
          ["Programming in C", "Digital Electronics", "Mathematics for Computing", "PC Software", "Communication Skills"],
          ["Data Structures", "Operating Systems", "DBMS", "Web Technologies", "Java Programming"],
          ["Software Engineering", "Cloud Computing", "Specialization Electives", "Major Project"],
        ]),
        careers: techCareers,
      },
      {
        slug: "online-bcom",
        name: "Online B.Com",
        level: "ug",
        duration: "3 Years",
        fee: "₹1,01,200 total",
        specializations: ["Honours", "International Finance & Accounting (ACCA UK)"],
        image: courseCommerce,
        rating: 4.6,
        reviews: 1080,
        tagline: "Bachelor of Commerce — master accounting, finance and taxation.",
        feesBreakdown: { fullFees: "₹1,01,200", perSemester: "₹19,200", emi: "₹4,552/mo" },
        curriculum: ugYears([
          ["Financial Accounting", "Business Economics", "Business Law", "Business Statistics"],
          ["Corporate Accounting", "Cost Accounting", "Income Tax", "Auditing"],
          ["Financial Management", "GST & Indirect Tax", "Specialization Electives", "Project Work"],
        ]),
        careers: commerceCareers,
      },
      {
        slug: "online-ba",
        name: "Online BA",
        level: "ug",
        duration: "3 Years",
        fee: "₹1,01,200 total",
        specializations: ["Journalism and Mass Communication (BAJMC)", "Malayalam", "Tamil", "Kannada", "Telugu", "Hindi Medium"],
        image: courseArts,
        rating: 4.5,
        reviews: 820,
        tagline: "Bachelor of Arts — a flexible, career-ready humanities degree.",
        feesBreakdown: { fullFees: "₹1,01,200", perSemester: "₹19,200", emi: "₹4,552/mo" },
        curriculum: ugYears([
          ["English", "Political Science", "History", "Sociology"],
          ["Public Administration", "Economics", "Psychology", "Communication"],
          ["Research Methods", "Electives", "Internship / Project"],
        ]),
        careers: artsCareers,
      },
    ] as Course[],
    pg: [
      {
        slug: "online-mba",
        name: "Online MBA",
        level: "pg",
        duration: "2 Years",
        fee: "₹2,07,000 total",
        specializations: [
          "Dual Specialization",
          "General Management",
          "Data Science",
          "Business Analytics",
          "Digital Marketing Management",
          "International Finance (ACCA UK)",
          "Construction Project Management",
          "Hospital and Healthcare Management (Medarsity)",
        ],
        image: courseBusiness,
        rating: 4.8,
        reviews: 2380,
        tagline: "Master of Business Administration — accelerate into leadership roles.",
        feesBreakdown: { fullFees: "₹2,07,000", perSemester: "₹56,300", emi: "₹8,906/mo" },
        curriculum: pgYears([
          ["Managerial Economics", "Financial Accounting", "Marketing Management", "Organizational Behaviour", "Business Statistics"],
          ["Strategic Management", "Operations Management", "Business Research", "Specialization Electives", "Capstone Project"],
        ]),
        careers: defaultCareers,
      },
      {
        slug: "online-mca",
        name: "Online MCA",
        level: "pg",
        duration: "2 Years",
        fee: "₹1,83,080 total",
        specializations: ["AI & ML", "Blockchain Technology and Management", "AI ML (TCS ION)", "Cyber Security (HCL Tech)", "Software Engineering (HCL Tech)", "Financial Technology and AI (Paytm)"],
        image: courseTech,
        rating: 4.8,
        reviews: 1460,
        tagline: "Master of Computer Applications — go deep on modern software engineering.",
        feesBreakdown: { fullFees: "₹1,83,080", perSemester: "₹49,800", emi: "₹7,877/mo" },
        curriculum: pgYears([
          ["Advanced DBMS", "Object-Oriented Programming", "Data Structures & Algorithms", "Software Engineering"],
          ["AI & Machine Learning", "Cloud Computing", "Specialization Electives", "Major Project"],
        ]),
        careers: techCareers,
      },
      {
        slug: "online-mcom",
        name: "Online M.Com",
        level: "pg",
        duration: "2 Years",
        fee: "₹1,20,000 total",
        image: courseCommerce,
        rating: 4.6,
        reviews: 720,
        tagline: "Master of Commerce — specialize in finance, taxation and analytics.",
        feesBreakdown: { fullFees: "₹1,20,000", perSemester: "₹30,000", emi: "₹3,299/mo" },
        curriculum: pgYears([
          ["Advanced Financial Accounting", "Managerial Economics", "Corporate Law", "Business Research"],
          ["Strategic Financial Management", "Taxation", "Electives", "Dissertation"],
        ]),
        careers: commerceCareers,
      },
      {
        slug: "online-ma",
        name: "Online MA",
        level: "pg",
        duration: "2 Years",
        fee: "₹1,00,000 total",
        specializations: ["English", "Public Policy & Governance", "Psychology", "Journalism & Mass Communication"],
        image: courseArts,
        rating: 4.5,
        reviews: 480,
        tagline: "Master of Arts — an advanced humanities degree, delivered 100% online.",
        feesBreakdown: { fullFees: "₹1,00,000", perSemester: "₹25,000", emi: "₹2,799/mo" },
        curriculum: pgYears([
          ["Core Discipline I", "Core Discipline II", "Research Methods", "Communication"],
          ["Advanced Electives", "Contemporary Studies", "Dissertation"],
        ]),
        careers: artsCareers,
      },
    ] as Course[],
  },
  eligibility: [
    { level: "UG Programs", criteria: "10+2 from a recognized board with minimum 50% marks (45% for reserved categories)." },
    { level: "PG Programs", criteria: "Bachelor's degree in a relevant discipline with minimum 50% marks (45% for reserved categories)." },
  ],
  process: [
    "Free counseling with an avedu advisor",
    "Program & specialization selection",
    "Online application form & document upload",
    "Fee payment (full / no-cost EMI)",
    "LMS access, orientation & classes begin",
  ],
  placements: {
    partners: ["Accenture", "Cognizant", "Wipro", "HDFC Bank", "Amazon", "TCS", "Infosys", "Deloitte"],
    highlight:
      "Dedicated online career services with resume building, mock interviews, industry connect webinars and job promotion to a network of recruiters.",
  },
  scholarships: [
    "Merit scholarship for high scorers",
    "Defence personnel & wards scholarship",
    "Divyaang (differently-abled) scholarship",
    "Government employee scholarship",
    "Girl child & single parent scholarship",
  ],
  faqs: [
    { q: "Is Amity Online degree valid?", a: "Yes. Amity University's online programs are entitled by UGC-DEB and treated at par with regular on-campus degrees for higher studies, government jobs and private employment." },
    { q: "Is Amity Online recognised internationally?", a: "Yes. Online degrees from Amity University are recognised by World Education Services (WES), which supports higher studies and skilled-worker pathways in Canada, USA and other countries." },
    { q: "Can I pay Amity Online fees in EMI?", a: "Yes. No-cost EMI options are available across programs. Talk to an avedu counselor for the plans you qualify for." },
    { q: "How are Amity Online exams conducted?", a: "Semester-end exams are conducted online via a remote proctored system, from the comfort of your home, on a scheduled date and time." },
    { q: "Does Amity Online provide placement support?", a: "Yes. Learners get access to a dedicated career services team offering resume reviews, mock interviews and job openings from a network of hiring partners." },
  ],
};

export const allCourses: Course[] = [...amity.courses.pg, ...amity.courses.ug];

// Short-form aliases so /courses/mba, /courses/mca etc. also work for SEO.
const slugAliases: Record<string, string> = {
  mba: "online-mba",
  mca: "online-mca",
  bca: "online-bca",
  bba: "online-bba",
  ba: "online-ba",
  bcom: "online-bcom",
  mcom: "online-mcom",
  ma: "online-ma",
};

export const findCourse = (slug: string): Course | undefined => {
  const normalized = slugAliases[slug] ?? slug;
  return allCourses.find((c) => c.slug === normalized);
};

// Programmatic SEO: curated city + course combos (~24 pages).
// Keep this list intentionally short and high-intent — quality over quantity.
export const seoCityCourseCombos: { program: string; city: { slug: string; name: string } }[] = (
  [
    { slug: "mumbai", name: "Mumbai" },
    { slug: "delhi", name: "Delhi" },
    { slug: "bangalore", name: "Bangalore" },
    { slug: "hyderabad", name: "Hyderabad" },
    { slug: "pune", name: "Pune" },
    { slug: "chennai", name: "Chennai" },
  ] as const
).flatMap((city) => ["mba", "mca", "bba", "bcom"].map((program) => ({ program, city })));

// Back-compat helpers used by the city+course route/loader.
export const seoCities = Array.from(
  new Map(seoCityCourseCombos.map((c) => [c.city.slug, c.city])).values(),
);
export const seoProgramSlugs: string[] = Array.from(
  new Set(seoCityCourseCombos.map((c) => c.program)),
);
export const isValidCityCourseCombo = (program: string, citySlug: string) =>
  seoCityCourseCombos.some(
    (c) => c.program === program.toLowerCase() && c.city.slug === citySlug.toLowerCase(),
  );

// Programmatic SEO: "vs" comparison pages
export type Competitor = {
  slug: string;
  name: string;
  naac: string;
  ugc: string;
  established: string;
  feeMba: string;
  feeBba: string;
  highlight: string;
  weakness: string;
};

export const competitors: Competitor[] = [
  {
    slug: "manipal",
    name: "Manipal University Online",
    naac: "A+",
    ugc: "UGC-DEB Entitled",
    established: "1953",
    feeMba: "₹1,66,000",
    feeBba: "₹1,20,000",
    highlight: "Strong brand recognition and industry partnerships in South India.",
    weakness: "Fewer specializations compared to Amity Online.",
  },
  {
    slug: "lpu",
    name: "LPU Online",
    naac: "A++",
    ugc: "UGC-DEB Entitled",
    established: "2005",
    feeMba: "₹1,45,000",
    feeBba: "₹1,05,000",
    highlight: "NAAC A++ with wide alumni network across India.",
    weakness: "Career services less mature than Amity Online.",
  },
  {
    slug: "jain",
    name: "Jain Online",
    naac: "A++",
    ugc: "UGC-DEB Entitled",
    established: "1990",
    feeMba: "₹1,60,000",
    feeBba: "₹1,10,000",
    highlight: "Affordable fees and dedicated online cohort.",
    weakness: "Smaller international recognition footprint.",
  },
  {
    slug: "nmims",
    name: "NMIMS Online",
    naac: "A+",
    ugc: "UGC-DEB Entitled",
    established: "1981",
    feeMba: "₹2,10,000",
    feeBba: "₹1,50,000",
    highlight: "Premium brand for MBA in western India.",
    weakness: "Higher fees and stricter eligibility.",
  },
  {
    slug: "ignou",
    name: "IGNOU",
    naac: "A++",
    ugc: "Central Open University",
    established: "1985",
    feeMba: "₹31,500",
    feeBba: "₹18,000",
    highlight: "Lowest fees, government-run.",
    weakness: "Limited placement support and slower digital experience.",
  },
];

export const findCompetitor = (slug: string): Competitor | undefined =>
  competitors.find((c) => c.slug === slug);

// Programmatic SEO: fees-in-year pages
export const seoFeeYears: string[] = ["2025", "2026", "2027"];

