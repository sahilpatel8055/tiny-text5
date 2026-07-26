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
        fee: "₹1,80,000 total",
        specializations: ["Marketing", "HR", "Finance", "International Business", "Entrepreneurship"],
        image: courseBusiness,
        rating: 4.7,
        reviews: 1420,
        tagline: "Bachelor of Business Administration — build a globally-relevant business foundation.",
        feesBreakdown: { fullFees: "₹1,80,000", perSemester: "₹30,000", emi: "₹4,999/mo" },
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
        fee: "₹1,80,000 total",
        specializations: ["Cloud & DevOps", "Data Analytics", "Full Stack Development", "Cyber Security"],
        image: courseTech,
        rating: 4.8,
        reviews: 1680,
        tagline: "Bachelor of Computer Applications — launch a career in modern tech.",
        feesBreakdown: { fullFees: "₹1,80,000", perSemester: "₹30,000", emi: "₹4,999/mo" },
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
        fee: "₹1,50,000 total",
        specializations: ["Financial Analytics", "Accounts & Finance", "Taxation"],
        image: courseCommerce,
        rating: 4.6,
        reviews: 1080,
        tagline: "Bachelor of Commerce — master accounting, finance and taxation.",
        feesBreakdown: { fullFees: "₹1,50,000", perSemester: "₹25,000", emi: "₹4,199/mo" },
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
        fee: "₹1,20,000 total",
        image: courseArts,
        rating: 4.5,
        reviews: 820,
        tagline: "Bachelor of Arts — a flexible, career-ready humanities degree.",
        feesBreakdown: { fullFees: "₹1,20,000", perSemester: "₹20,000", emi: "₹3,299/mo" },
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
        fee: "₹2,50,000 total",
        specializations: [
          "Marketing",
          "Finance",
          "HR",
          "Business Analytics",
          "IT",
          "Operations",
          "International Business",
          "Healthcare & Hospital Management",
        ],
        image: courseBusiness,
        rating: 4.8,
        reviews: 2380,
        tagline: "Master of Business Administration — accelerate into leadership roles.",
        feesBreakdown: { fullFees: "₹2,50,000", perSemester: "₹62,500", emi: "₹6,999/mo" },
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
        fee: "₹2,25,000 total",
        specializations: ["AI & Machine Learning", "Data Science", "Cloud Computing", "Cyber Security"],
        image: courseTech,
        rating: 4.8,
        reviews: 1460,
        tagline: "Master of Computer Applications — go deep on modern software engineering.",
        feesBreakdown: { fullFees: "₹2,25,000", perSemester: "₹56,250", emi: "₹6,299/mo" },
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
