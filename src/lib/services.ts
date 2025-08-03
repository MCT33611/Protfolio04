
import { ServerIcon, SheetIcon } from 'lucide-react';
import { AngularIcon, CSSIcon, DotNetIcon, HTMLIcon, JSIcon, ReactIcon } from './icons';

export const services = [
  {
    slug: "full-stack-development",
    title: "Full Stack Web Development",
    shortDescription: "Build powerful, scalable web applications using modern stacks like Angular or React with ASP.NET (Web API or MVC).",
    icons: [AngularIcon, DotNetIcon, ReactIcon],
    images: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&h=600&auto=format&fit=crop",
    ],
    imageHints: ["full stack concept"],
    detailedDescription: "I offer complete end-to-end web development using modern full-stack technologies, primarily Angular for frontend and ASP.NET Core Web API for backend. Whether you're launching a new platform, redesigning your current site, or need advanced functionality like real-time chat, payment integrations, or admin dashboards — I deliver scalable and maintainable solutions. I implement clean architecture, CQRS, Mediator, and Unit of Work patterns to ensure code quality and project longevity.",
    techStack: "Angular, .NET Core Web API, Tailwind, Angular Material, SQL Server, SignalR, Razorpay/Stripe, NGRX",
    includes: "Admin dashboard, secure authentication, charts, real-time features, role management, responsive design.",
    pricing: {
      fixed: "₹25,000 – ₹75,000+ per project",
      monthly: "₹3,000 – ₹6,000"
    }
  },
  {
    slug: "dotnet-application-development",
    title: ".NET Application Development",
    shortDescription: "Design and develop robust and secure applications with .NET MVC and Web API, following clean architecture principles.",
    icons: [DotNetIcon],
     images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&h=600&auto=format&fit=crop",
    ],
    imageHints: ["dotnet app visual"],
    detailedDescription: "I create robust web applications using .NET MVC and Web API, focusing on business logic, performance, and secure data handling. Ideal for enterprise tools, CRM systems, admin panels, and business automation. Code architecture follows the Repository pattern, Clean Architecture, and service-based logic for better testing and maintainability.",
    techStack: ".NET 6/7, MVC, Web API, EF Core, SQL Server, Clean Architecture",
    includes: "Admin/user dashboards, authentication, REST APIs, data visualization, deployment to cloud or VPS.",
    pricing: {
      fixed: "₹15,000 – ₹60,000+",
      monthly: "₹2,500 – ₹5,000"
    }
  },
  {
    slug: "react-app-development",
    title: "React App Development",
    shortDescription: "Create fast and interactive user interfaces with React, ideal for modern SaaS platforms or single-page applications.",
    icons: [ReactIcon],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=600&auto=format&fit=crop",
    ],
    imageHints: ["react concept"],
    detailedDescription: "Build responsive, modern single-page applications with React and Tailwind CSS. Great for startups and businesses that want dynamic web apps or client-facing portals. I ensure clean component structure, state management using Context or Redux, and API integrations.",
    techStack: "ReactJS, Tailwind, REST APIs, Axios, Firebase/AWS/Vercel",
    includes: "Dynamic content, responsive layout, clean code, reusable components.",
    pricing: {
      fixed: "₹10,000 – ₹40,000+",
      monthly: "₹2,000 – ₹4,000"
    }
  },
  {
    slug: "angular-app-development",
    title: "Angular App Development",
    shortDescription: "Develop dynamic SPAs with Angular, Material UI, and NgRx. Perfect for dashboards, admin panels, and B2C platforms.",
    icons: [AngularIcon],
    images: [
      "https://unsplash.com/photos/Wpnoqo2plFA/download?force=true&w=1200&h=600",
    ],
    imageHints: ["angular developer"],
    detailedDescription: "Develop powerful Angular SPAs tailored for enterprise use, dashboards, admin panels, or service platforms. I focus on modular folder structure, lazy loading, NgRx state management, Angular Material UI, and API-based content handling with SignalR for real-time updates.",
    techStack: "Angular 17+, Angular Material, Tailwind, NgRx, SignalR",
    includes: "Auth, dashboards, forms, charts, role-wise routing, mobile responsiveness.",
    pricing: {
      fixed: "₹15,000 – ₹55,000+",
      monthly: "₹3,000 – ₹5,000"
    }
  },
  {
    slug: "static-web-design",
    title: "Static Web Design",
    shortDescription: "Craft simple, lightweight, and blazing-fast websites with HTML, CSS, and modern frameworks like Tailwind.",
    icons: [HTMLIcon, CSSIcon, JSIcon],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&h=600&auto=format&fit=crop",
    ],
    imageHints: ["minimalist web design"],
    detailedDescription: "Need a simple yet beautiful website? I build blazing-fast static websites with HTML, CSS, Bootstrap, or Tailwind CSS. Ideal for personal portfolios, local businesses, NGOs, or event pages. These sites are SEO-friendly, lightweight, and mobile-responsive, ensuring great user experience.",
    techStack: "HTML5, CSS3, Bootstrap 5 / Tailwind CSS, JS",
    includes: "Homepage, about, contact, services pages, mobile responsive, basic SEO.",
    pricing: {
      fixed: "₹3,000 – ₹10,000",
      monthly: "₹500 – ₹1,000 (content changes, updates)"
    }
  },
  {
    slug: "ftp-deployment-management",
    title: "FTP & Deployment Management",
    shortDescription: "Manage seamless file transfers and deployments via FTP or cloud platforms for production-ready delivery.",
    icons: [ServerIcon],
    images: [
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1200&h=600&auto=format&fit=crop",
    ],
    imageHints: ["deployment dashboard"],
    detailedDescription: "Effortlessly move your project from development to production. I handle secure FTP setup, file deployment, and connection to domains or subdomains. I also configure DNS records, SSL (HTTPS), and CI/CD pipelines if needed. Ideal for small business sites, blogs, and company dashboards.",
    tools: "FileZilla, cPanel, GitHub Actions, DuckDNS, Vercel, AWS, Render, Firebase Hosting",
    includes: "Server setup, DNS config, live deployment, cron jobs (if needed)",
    pricing: {
      fixed: "₹1,000 – ₹3,000",
      monthly: "₹500 – ₹1,000 (for periodic updates)"
    }
  },
  {
    slug: "excel-data-management",
    title: "Excel Data Management",
    shortDescription: "Automate and optimize spreadsheet workflows with custom tools, dashboards, and data formatting services.",
    icons: [SheetIcon],
    images: [
      "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    imageHints: ["excel dashboard"],
    detailedDescription: "Streamline your business data with smart Excel solutions. I help automate spreadsheets, create dynamic dashboards, apply formulas, build filters, and organize data. Perfect for billing, reports, or inventory. I also help with imports/exports to/from web apps.",
    tools: "Microsoft Excel, Google Sheets",
    includes: "Data formatting, custom formulas, charts, conditional logic, Excel to JSON/CSV",
    pricing: {
      fixed: "₹500 – ₹3,000 per sheet/task",
      monthly: "₹500 – ₹1,500 (if continuous updates)"
    }
  }
];
