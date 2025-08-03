import { ServerIcon, SheetIcon } from 'lucide-react';
import { AngularIcon, CSSIcon, DotNetIcon, HTMLIcon, JSIcon, ReactIcon } from './icons';

export const services = [
  {
    slug: "full-stack-development",
    title: "Full Stack Web Development",
    shortDescription: "Build powerful, scalable web applications using modern stacks like Angular or React with ASP.NET (Web API or MVC).",
    icons: [AngularIcon, DotNetIcon, ReactIcon],
    images: [
      "https://unsplash.com/photos/hpjSkU2UYSU/download?force=true&w=1200&h=600",
      "https://pexels.com/photo/coding-on-laptop-closeup-546819/download?auto=compress&h=400&w=600",
      "https://pexels.com/photo/code-on-screen-in-dark-room-574071/download?auto=compress&h=400&w=600",
    ],
    imageHints: ["full stack concept", "html code", "developer desk"],
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
      "https://www.spec-india.com/wp-content/uploads/2022/06/Net-Developer.png",
      "https://pexels.com/photo/csharp-code-on-monitor-1093947/download?auto=compress&h=400&w=600",
      "https://pixabay.com/photos/programmer-computer-code-working-924920/download?image_type=photo&orientation=horizontal&min_width=600&min_height=400",
    ],
    imageHints: ["dotnet app visual", "c sharp code", "software architecture"],
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
      "https://unsplash.com/photos/l90zRbWvCoE/download?force=true&w=1200&h=600",
      "https://pexels.com/photo/developer-coding-on-laptop-1181679/download?auto=compress&h=400&w=600",
      "https://pixabay.com/photos/code-screen-programming-working-1873851/download?image_type=photo&orientation=horizontal&min_width=600&min_height=400",
    ],
    imageHints: ["react concept", "react code", "code editor"],
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
      "https://pexels.com/photo/code-editor-on-monitor-623167/download?auto=compress&h=400&w=600",
      "https://pixabay.com/photos/web-development-code-html-javascript-2057001/download?image_type=photo&orientation=horizontal&min_width=600&min_height=400",
    ],
    imageHints: ["angular developer", "angular code", "dashboard sample"],
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
      "https://unsplash.com/photos/p-xSl33Wxyc/download?force=true&w=1200&h=600",
      "https://pexels.com/photo/design-wireframe-on-paper-631146/download?auto=compress&h=400&w=600",
      "https://pixabay.com/photos/design-responsive-plan-wireframe-2732178/download?image_type=photo&orientation=horizontal&min_width=600&min_height=400",
    ],
    imageHints: ["minimalist web design", "imac macbook", "design wireframe"],
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
      "https://unsplash.com/photos/0wRXAXqIp58/download?force=true&w=1200&h=600",
      "https://pexels.com/photo/terminal-code-on-monitor-574068/download?auto=compress&h=400&w=600",
      "https://pixabay.com/photos/server-room-technology-networking-1233870/download?image_type=photo&orientation=horizontal&min_width=600&min_height=400",
    ],
    imageHints: ["deployment dashboard", "server room", "cloud infrastructure"],
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
      "https://unsplash.com/photos/9e9PD9blAto/download?force=true&w=1200&h=600",
      "https://pexels.com/photo/spreadsheet-on-laptop-screen-6696156/download?auto=compress&h=400&w=600",
      "https://pixabay.com/photos/excel-spreadsheet-analytics-statistics-5991651/download?image_type=photo&orientation=horizontal&min_width=600&min_height=400",
    ],
    imageHints: ["excel dashboard", "data analytics", "spreadsheet grid"],
    detailedDescription: "Streamline your business data with smart Excel solutions. I help automate spreadsheets, create dynamic dashboards, apply formulas, build filters, and organize data. Perfect for billing, reports, or inventory. I also help with imports/exports to/from web apps.",
    tools: "Microsoft Excel, Google Sheets",
    includes: "Data formatting, custom formulas, charts, conditional logic, Excel to JSON/CSV",
    pricing: {
      fixed: "₹500 – ₹3,000 per sheet/task",
      monthly: "₹500 – ₹1,500 (if continuous updates)"
    }
  }
];
