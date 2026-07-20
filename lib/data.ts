export const profile = {
  name: "Prosperity Adedayo",
  role: "Full-Stack Developer",
  location: "Nigeria",
  status: "AVAILABLE" as const,
  tagline: "I build web systems that industries actually run on.",
  summary:
    "I design and build clean, scalable, user-focused web applications — from customer-facing sites to the booking, inventory, and accounting systems behind them. Computer Science student and full-stack developer working across Python, Django, Flask, and modern JavaScript.",
  longBio: [
    "I'm Prosperity Adedayo — a web developer and Computer Science student who likes turning messy, manual processes into software that works. My stack centers on HTML, CSS, JavaScript, Python, and Django, with growing depth in Flask, React, and Node.js.",
    "Most of what I build starts as a real problem for a real business: a hotel that needed to stop tracking bookings on paper, a shop that needed to sell online, a firm that needed a professional presence. I like that constraint — it keeps the code honest.",
    "Longer term, I'm working toward being a full-stack developer who can be trusted with production systems end to end: data model, backend, interface, and the deployment pipeline that ships it.",
  ],
  email: "adedayoprosperity@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/prosperityadedayo",
    linkedin: "https://www.linkedin.com/in/prosperity-adedayo-a26970363/",
    facebook: "https://www.facebook.com/profile.php?id=100088313618683",
  },
};

export const stack = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Django", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "MySQL", category: "Data" },
  { name: "PostgreSQL", category: "Data" },
  { name: "SQLite", category: "Data" },
  { name: "WordPress", category: "CMS" },
  { name: "Figma", category: "Design" },
];

export const skillLevels = [
  { label: "Frontend Development", value: 90 },
  { label: "Backend Development", value: 90 },
  { label: "Database Management", value: 85 },
  { label: "UI / UX Design", value: 80 },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  downloadUrl?: string;
  downloadName?: string;
  featured: boolean;
  category: "client" | "personal";
};

export const projects: Project[] = [
  {
    slug: "edmack-website",
    title: "EDMACK Group Website",
    description:
      "A modern web presence for EDMACK Group, built via Gain Infinity to streamline how the company displays its services and engages clients online.",
    problem: "EDMACK Group had no consistent digital presence for client-facing services.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/edmack.png",
    liveUrl: "https://edmackgroup.com",
    featured: true,
    category: "client",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A storefront built for small businesses to sell online, with a product catalog, shopping cart, and order tracking.",
    problem: "Small businesses needed a way to reach customers digitally without an enterprise budget.",
    tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/images/projects/ecommerce.png",
    codeUrl: "https://github.com/prosperityadedayo/E-commerce_App",
    featured: true,
    category: "client",
  },
  {
    slug: "elegance-interiors",
    title: "Elegance Interiors",
    description:
      "A showcase site for an interior decoration studio to present furniture and design services online.",
    problem: "The studio needed a professional digital portfolio to attract new clients.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/elegance.png",
    liveUrl: "https://prosperityadedayo.github.io/EleganceInteriors/",
    featured: false,
    category: "client",
  },
  {
    slug: "sable-suites",
    title: "Sable Suites Hotel Management",
    description:
      "An internal system for managing bookings, check-ins, and staff operations, replacing manual, paper-based tracking.",
    problem: "Manual booking records caused errors and slowed down front-desk operations.",
    tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/images/projects/sable-suites.png",
    codeUrl: "https://github.com/prosperityadedayo/sable-suites",
    featured: true,
    category: "client",
  },
  {
    slug: "prosperity-auto",
    title: "Car Sales Platform",
    description:
      "A responsive listing platform that helps an automotive business showcase inventory and simplify sales inquiries.",
    problem: "The business needed online visibility to reach buyers beyond foot traffic.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/prosperity-auto.png",
    liveUrl: "https://prosperityadedayo.github.io/prosperity_auto/contact.html",
    featured: false,
    category: "client",
  },
  {
    slug: "perfect-eagle-cbs",
    title: "Perfect Eagle CBS",
    description:
      "A company site for an accounting and business-solutions firm, giving clients easy access to services and information.",
    problem: "The firm's services and credibility weren't easy to find or verify online.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/perfect-eagle.png",
    liveUrl: "https://prosperityadedayo.github.io/perfect-eagle-complete-business-solution/",
    featured: false,
    category: "client",
  },
  {
    slug: "youtube-downloader",
    title: "Python YouTube Downloader",
    description:
      "A desktop tool for downloading MP4 videos for offline access to educational and entertainment content.",
    problem: "Solves offline access to video content without relying on unreliable browser extensions.",
    tech: ["Python"],
    image: "/images/projects/yt-downloader.png",
    codeUrl: "https://github.com/prosperityadedayo/YT-downloader-Python",
    downloadUrl: "/downloads/YTDownloader.zip",
    downloadName: "YT-downloader-Python",
    featured: true,
    category: "personal",
  },
  {
    slug: "tic-tac-toe-java",
    title: "Tic Tac Toe (Java Desktop)",
    description:
      "A classic Tic Tac Toe game with speech feedback, built with a teammate to explore Java Swing and interactivity.",
    problem: "A hands-on way to learn desktop GUI programming and pair collaboration.",
    tech: ["Java", "Swing"],
    image: "/images/projects/tic-tac-toe.png",
    codeUrl: "https://github.com/prosperityadedayo/TictactoeDesktopApp",
    featured: false,
    category: "personal",
  },
  {
    slug: "music-player",
    title: "Music Player (Desktop)",
    description:
      "A desktop audio player built to practice Python GUI development and multimedia file handling.",
    problem: "A practical project to learn desktop media handling beyond web audio APIs.",
    tech: ["Python"],
    image: "/images/projects/music-player.png",
    codeUrl: "https://github.com/prosperityadedayo/python_music_player",
    downloadUrl: "/downloads/music_player.zip",
    downloadName: "music_player",
    featured: false,
    category: "personal",
  },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Freelance Full-Stack Developer",
    org: "Self-employed / Gain Infinity",
    description:
      "Building production websites and internal tools for small businesses, spanning frontend interfaces, Flask/Django backends, and MySQL data models.",
  },
  {
    period: "2022 — Present",
    org: "Computer Science Program",
    role: "Computer Science Student",
    description:
      "Studying core CS fundamentals while shipping independent projects in Python, Java, and JavaScript to reinforce coursework with real software.",
  },
  {
    period: "2022",
    role: "WordPress Design Training",
    org: "RCCG CSR",
    description: "Completed hands-on training designing and deploying WordPress sites for community organizations.",
  },
];

export const certifications = [
  "I4G & Cisco Cybersecurity Certification",
  "Cisco Hardware Basics Certification",
  "RCCG CSR WordPress Website Design Training",
  "Cisco Data Analysis Essentials",
  "Cisco Python Certification (Level 1 & 2)",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
