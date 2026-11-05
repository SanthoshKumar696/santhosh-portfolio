import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  Send,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from 'lucide-react';
import {
  siBootstrap,
  siCss,
  siDocker,
  siDotnet,
  siExpo,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPostman,
  siPrisma,
  siPm2,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';
import './App.css';

const CONTACT_EMAIL = 'santhoshkumar290902@gmail.com';
const PHONE_NUMBER = '+919025530104';
const LINKEDIN_URL = 'https://www.linkedin.com/in/santhosh-kumar-p-7595a2237/';
const GITHUB_URL = 'https://github.com/SanthoshKumar696';

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

const skillGroups = [
  {
    name: 'Frontend Development',
    description: 'Developing modern, responsive, component-based interfaces with reusable architecture, optimized rendering, accessible layouts, and excellent user experiences.',
    icon: Code2,
    technologies: [
      ['HTML5', siHtml5], ['CSS3', siCss], ['JavaScript', siJavascript], ['TypeScript', siTypescript],
      ['React.js', siReact], ['Next.js', siNextdotjs], ['Tailwind CSS', siTailwindcss],
      ['Bootstrap', siBootstrap], ['Responsive Design', null],
    ],
  },
  {
    name: 'Backend Development',
    description: 'Building backend services, business logic, API integrations, authentication workflows, request validation, and application services.',
    icon: Server,
    technologies: [
      ['Node.js', siNodedotjs], ['Express.js', siExpress], ['Python', siPython], ['PHP', siPhp],
      ['REST APIs', null], ['Authentication', null], ['JWT', null],
      ['API Integration', null], ['Backend Architecture', null],
    ],
  },
  {
    name: 'Database Technologies',
    description: 'Designing structured schemas, relational data models, CRUD operations, database integrations, and efficient data-access workflows.',
    icon: Database,
    technologies: [
      ['PostgreSQL', siPostgresql], ['MySQL', siMysql], ['MongoDB', siMongodb],
      ['Prisma ORM', siPrisma], ['Database Design', null], ['Data Relationships', null],
      ['Query Optimization', null], ['Data Management', null],
    ],
  },
  {
    name: 'Tools & Deployment',
    description: 'Managing source code, API testing, server configuration, application deployment, production debugging, and development workflows.',
    icon: Terminal,
    technologies: [
      ['Git', siGit], ['GitHub', siGithub], ['VS Code', null], ['Postman', siPostman],
      ['Linux VPS', siLinux], ['Nginx', siNginx], ['PM2', siPm2],
      ['Docker', siDocker], ['Azure', null],
    ],
  },
];

const extraExpertise = [
  'Full Stack Application Architecture', 'SaaS Development', 'ERP Development',
  'POS Systems', 'E-commerce Development', 'Mobile Application Integration',
  'AI API Integration', 'Debugging & Performance Optimization',
];

const projectIcons = {
  '.NET': siDotnet,
  Expo: siExpo,
  'React.js': siReact,
  'React Native': siReact,
  'Next.js': siNextdotjs,
  'Node.js': siNodedotjs,
  'TypeScript': siTypescript,
  'PostgreSQL': siPostgresql,
  'Prisma ORM': siPrisma,
};

function LinkedInIcon({ decorative = false }) {
  return <svg className="brand-icon" viewBox="0 0 24 24" role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : 'LinkedIn'} aria-hidden={decorative}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.314 20.452H2.562V9h3.752v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}

const projects = [
  {
    number: '01',
    name: 'FoodZOAI',
    category: 'RESTAURANT POS & MANAGEMENT SYSTEM',
    description: 'A restaurant POS and management platform designed to simplify restaurant operations, billing, menu management, inventory, and order processing.',
    contribution: 'Contributed to frontend development, POS workflows, API integration, application state management, billing operations, menu management, and troubleshooting backend integration issues.',
    technologies: ['React.js', 'TypeScript', '.NET', 'PostgreSQL', 'REST APIs'],
    features: ['POS Billing', 'Menu Management', 'Product Categories', 'Variants & Add-ons', 'Table Management', 'Inventory Management', 'Order Processing', 'Customer Management', 'Reports & Dashboard', 'Role-Based Permissions'],
    visual: 'foodzo',
    symbol: 'F',
  },
  {
    number: '02',
    name: 'Restaurant Delivery System',
    category: 'FOOD ORDERING & DELIVERY PLATFORM',
    description: 'A delivery platform connecting customers, restaurant administrators, kitchen operations, and delivery captains through a structured order workflow.',
    contribution: 'Worked on customer ordering workflows, backend API integration, order processing, admin order management, delivery assignment workflows, and application development.',
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'REST APIs'],
    features: ['Customer Authentication', 'OTP Verification', 'Restaurant Menu', 'Variants & Add-ons', 'Cart Management', 'Order Placement', 'Admin Order Management', 'Kitchen Processing', 'Delivery Captain Assignment', 'Order Tracking', 'Coupons & Customer Management'],
    visual: 'delivery',
    symbol: 'R',
  },
  {
    number: '03',
    name: 'Beemji BuildMart',
    category: 'BUILDING MATERIALS E-COMMERCE',
    description: 'An e-commerce platform for the building materials industry, helping customers explore products and connect with suppliers through a digital storefront.',
    contribution: 'Contributed to website development, responsive UI implementation, product presentation, frontend improvements, and enhancing the digital customer experience.',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'CSS', 'Web Technologies'],
    features: ['Product Presentation', 'Product Categories', 'Responsive Storefront', 'Business Information', 'Customer-Focused UI', 'Digital Product Discovery'],
    visual: 'buildmart',
    symbol: 'B',
    liveUrl: 'https://beemjibuildmart.com/',
  },
  {
    number: '04',
    name: 'BuildZentra',
    category: 'CONSTRUCTION MANAGEMENT ERP',
    description: 'A construction management ERP concept to centralize project operations, workforce, procurement, finance, inventory, and field activities.',
    contribution: 'Contributed to product architecture planning, module design, database relationships, application workflows, and technical implementation planning for an integrated construction management ecosystem.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'React Native', 'Expo'],
    features: ['Project Management', 'Employee Management', 'GPS-Based Attendance', 'Procurement Management', 'Inventory & Stock', 'Finance & RA Billing', 'Equipment Management', 'Quality & Safety', 'Mobile Field Operations'],
    visual: 'buildzentra',
    symbol: 'Z',
    planned: true,
  },
];

const processSteps = [
  ['01', 'Understand Requirements', 'Understand the business problem, users, and project objectives.'],
  ['02', 'Plan Architecture', 'Define frontend structure, backend architecture, API workflows, and database relationships.'],
  ['03', 'Design & Develop', 'Build responsive interfaces, reusable components, backend services, and integrations.'],
  ['04', 'Test & Debug', 'Validate functionality, resolve bugs, and improve application reliability.'],
  ['05', 'Deploy & Maintain', 'Deploy applications, monitor issues, and continuously improve the product.'],
];

const strengths = [
  ['Business-oriented thinking', 'Start with the problem and the people behind it.'],
  ['Full stack capability', 'Work across interfaces, services, and data.'],
  ['Problem-solving mindset', 'Break complex workflows into practical solutions.'],
  ['Continuous learning', 'Explore modern tools and AI-powered application development.'],
  ['Ownership & accountability', 'Follow the details through testing and delivery.'],
  ['Product development focus', 'Build software around useful, real-world outcomes.'],
];

function BrandMark({ icon, name }) {
  if (!icon) return <span className="brand-mark brand-mark-text" aria-hidden="true">{name === 'Responsive Design' ? 'RWD' : name.split(/[\s.]/)[0].slice(0, 3).toUpperCase()}</span>;
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation"><path d={icon.path} /></svg>
    </span>
  );
}

function BrandIcon({ icon, label, decorative = false }) {
  return <svg className="brand-icon" viewBox="0 0 24 24" role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : label} aria-hidden={decorative}><path d={icon.path} /></svg>;
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.visual}`} aria-hidden="true">
      <div className="preview-toolbar"><span /><span /><span /><b>{project.name}</b><i><ArrowUpRight size={13} /></i></div>
      <div className="preview-content">
        <div className="preview-sidebar"><span className="preview-logo">{project.symbol}</span><i /><i /><i /><i /></div>
        <div className="preview-dashboard">
          <div className="preview-greeting"><small>PRODUCT OVERVIEW</small><b>{project.name}</b><span>{project.category}</span></div>
          <div className="preview-stats"><span /><span /><span /></div>
          <div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="preview-rows"><i /><i /><i /></div>
        </div>
      </div>
      <div className="preview-stamp">{project.planned ? 'IN PLANNING' : 'PRODUCT INTERFACE'}</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSkill, setActiveSkill] = useState(0);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-22% 0px -65% 0px' });
    navigation.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subjectLine = formData.get('subject');
    const message = formData.get('message');
    const subject = encodeURIComponent(subjectLine);
    const body = encodeURIComponent(`Hi Santhosh,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setFormStatus('Your email app should open with the message ready to send. This site does not send or store form submissions.');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Santhosh Kumar, home" onClick={closeMenu}>SK<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'site-nav nav-open' : 'site-nav'} aria-label="Main navigation">
          {navigation.map(([label, id]) => <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="hero-overline">FULL STACK DEVELOPER <span>/</span> AI APPLICATION DEVELOPER</p>
            <h1 className="hero-name">Santhosh<span className="mobile-name-break"><br /></span> Kumar</h1>
            <div className="availability"><span /> OPEN TO OPPORTUNITIES <b>·</b> INDIA</div>
            <h2 className="hero-tagline">Building digital products that solve <span>real-world problems.</span></h2>
            <p className="hero-description">I’m a Full Stack Developer passionate about building scalable web applications, business management platforms, SaaS products, and intelligent digital solutions.</p>
            <div className="hero-technology"><span><Code2 size={15} /> React.js & Next.js</span><i /><span><Server size={15} /> Node.js & Backend</span><i /><span><Database size={15} /> Database Design</span><i /><span><Sparkles size={15} /> AI Applications</span></div>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View My Projects <ArrowDownRight size={17} /></a><a className="button button-outline" href="#contact">Contact Me <ArrowRight size={16} /></a></div>
            <div className="hero-contact-strip">
              <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={15} /><span>{CONTACT_EMAIL}</span><ArrowUpRight size={12} /></a>
              <a href={`tel:${PHONE_NUMBER}`}><Phone size={15} /><span>+91 90255 30104</span><ArrowUpRight size={12} /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><LinkedInIcon /><span>LinkedIn</span><ArrowUpRight size={12} /></a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><BrandIcon icon={siGithub} label="GitHub" /><span>GitHub</span><ArrowUpRight size={12} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract code editor illustration">
            <div className="visual-glow" />
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="terminal-card">
              <div className="terminal-top"><span /><span /><span /><b>santhosh / portfolio</b><i>···</i></div>
              <div className="terminal-body">
                <div className="terminal-gutter">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08</div>
                <div className="terminal-code"><p><em>const</em> developer <u>=</u> {'{'}</p><p>&nbsp;&nbsp;name: <strong>'Santhosh Kumar'</strong>,</p><p>&nbsp;&nbsp;focus: <strong>'full stack'</strong>,</p><p>&nbsp;&nbsp;build: [</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>'web apps'</b>, <b>'SaaS'</b>,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>'AI solutions'</b></p><p>&nbsp;&nbsp;],</p><p>{'}'};</p></div>
              </div>
              <div className="terminal-bottom"><span><i /> Available for opportunities</span><span>UTF-8&nbsp;&nbsp; React</span></div>
            </div>
            <div className="float-chip chip-react"><span className="chip-orbit">◉</span> React.js</div>
            <div className="float-chip chip-api"><Workflow size={15} /> REST APIs</div>
            <div className="float-chip chip-db"><Database size={15} /> PostgreSQL</div>
            <div className="visual-caption"><span>01 — 04</span> BUILD WITH PURPOSE</div>
          </div>
        </section>

        <section className="about section-wrap section-pad reveal" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-layout">
            <div className="about-heading"><h2>Curiosity meets<br /><span>useful technology.</span></h2><p className="about-location"><MapPin size={15} /> Sholinghur, Ranipet District, Tamil Nadu, India</p></div>
            <div className="about-content"><p>I’m a Full Stack Developer with practical experience in developing web applications, business management systems, ERP solutions, e-commerce platforms, and SaaS products.</p><p>I work across frontend and backend development, transforming business requirements into functional, scalable, and user-friendly applications.</p><p>My development experience includes building responsive user interfaces, developing REST APIs, database architecture, authentication systems, third-party API integrations, debugging, application optimization, and deployment.</p><p>I enjoy understanding real-world business challenges and developing technology solutions that improve business operations, automate workflows, and create better user experiences. I continuously explore modern technologies and AI-powered application development.</p></div>
          </div>
          <div className="highlight-grid">
            <div><Layers3 /><span>01</span><b>Full Stack<br />Development</b></div>
            <div><BriefcaseBusiness /><span>02</span><b>Business Application<br />Development</b></div>
            <div><Workflow /><span>03</span><b>API & Database<br />Engineering</b></div>
            <div><Sparkles /><span>04</span><b>SaaS & AI<br />Integration</b></div>
          </div>
        </section>

        <section className="skills section-pad reveal" id="skills">
          <div className="section-wrap">
            <SectionLabel number="02">TECHNICAL TOOLKIT</SectionLabel>
            <div className="skills-intro"><h2>Built on a <span>versatile stack.</span></h2><p>From the first component to the production database, I work across the layers that bring digital products to life.</p></div>
            <div className="skills-layout">
              <div className="skill-tabs" role="tablist" aria-label="Technology categories">{skillGroups.map((group, index) => {
                const Icon = group.icon;
                return <button className={activeSkill === index ? 'skill-tab selected' : 'skill-tab'} key={group.name} type="button" role="tab" id={`skill-tab-${index}`} aria-selected={activeSkill === index} aria-controls={`skill-panel-${index}`} onClick={() => setActiveSkill(index)}><Icon size={18} /><span>{group.name}</span><ArrowUpRight size={15} /></button>;
              })}</div>
              {skillGroups.map((group, index) => <div className="skill-panel" role="tabpanel" id={`skill-panel-${index}`} aria-labelledby={`skill-tab-${index}`} hidden={activeSkill !== index} key={group.name}><p>{group.description}</p><div className="technology-grid">{group.technologies.map(([name, icon]) => <div className="technology-card" key={name}><BrandMark icon={icon} name={name} /><span>{name}</span><ArrowUpRight className="tech-arrow" size={13} /></div>)}</div></div>)}
            </div>
            <div className="extra-expertise"><span>ALSO EXPLORING</span><div>{extraExpertise.map((item) => <span key={item}>{item}</span>)}</div></div>
          </div>
        </section>

        <section className="projects section-wrap section-pad reveal" id="projects">
          <SectionLabel number="03">SELECTED PROJECTS</SectionLabel>
          <div className="projects-heading"><h2>Real products.<br /><span>Thoughtful contributions.</span></h2><p>Product work spanning restaurant operations, delivery, e-commerce, and construction technology.</p></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card project-${project.visual}`} key={project.number}>
            <div className="project-art"><ProjectPreview project={project} /><span className="project-number">{project.number} / 04</span></div>
            <div className="project-details">
              <div className="project-category">{project.category}{project.planned && <span className="status-planned">PLANNING / DESIGN</span>}</div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">{project.technologies.map((technology) => <span key={technology}>{projectIcons[technology] && <BrandMark icon={projectIcons[technology]} name={technology} />}{technology}</span>)}</div>
              <div className="project-contribution"><b><Check size={14} /> MY CONTRIBUTION</b><p>{project.contribution}</p></div>
              <div className="project-features"><b>{project.planned ? 'PLANNED MODULES — NOT REPRESENTED AS LIVE' : 'KEY FEATURES'}</b><div>{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div></div>
              {project.liveUrl && <a className="project-live" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={15} /></a>}
            </div>
          </article>)}</div>
        </section>

        <section className="experience section-pad reveal" id="experience">
          <div className="section-wrap">
            <SectionLabel number="04">PRACTICAL EXPERIENCE</SectionLabel>
            <div className="experience-layout">
              <div className="experience-intro"><h2>Software built<br /><span>for real workflows.</span></h2><p>My experience comes from practical contributions to real-world software products. No invented titles, dates, or company details — just the work and the disciplines involved.</p><div className="experience-badge"><BriefcaseBusiness size={19} /><span>FULL STACK DEVELOPMENT<br /><b>Practical product contributions</b></span></div></div>
              <div className="experience-list">{['Frontend Development', 'Backend Development', 'API Development & Integration', 'Database Management', 'Application Architecture', 'Debugging & Testing', 'Deployment & Server Management', 'Team Collaboration'].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><ArrowUpRight size={15} /></div>)}</div>
            </div>
          </div>
        </section>

        <section className="education section-wrap section-pad reveal" id="education">
          <SectionLabel number="05">EDUCATION</SectionLabel>
          <div className="education-card"><span className="education-icon"><GraduationCap size={24} /></span><div><span className="education-overline">CURRENT STUDIES</span><h2>Master of Science<br /><span>Computer Science</span></h2><p>M.Sc. Computer Science <i>·</i> Currently pursuing</p><small>Institution details to be added</small></div><span className="education-mark">M.Sc.</span></div>
        </section>

        <section className="process section-pad reveal">
          <div className="section-wrap">
            <SectionLabel number="06">HOW I WORK</SectionLabel>
            <div className="process-heading"><h2>A thoughtful path<br /><span>from idea to impact.</span></h2><p>Good products start with clear understanding and keep improving after launch.</p></div>
            <div className="process-grid">{processSteps.map(([number, title, description]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="why section-wrap section-pad reveal">
          <SectionLabel number="07">WHY WORK WITH ME</SectionLabel>
          <div className="why-layout"><div><h2>More than just<br /><span>writing code.</span></h2><p>I focus on the complete product lifecycle — from understanding business requirements and technical architecture to implementation and deployment. I believe successful software takes problem-solving, ownership, collaboration, and continuous improvement.</p><p>My goal is to build technology that solves actual problems, improves business efficiency, and creates long-term value.</p></div><div className="strength-grid">{strengths.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><div><b>{title}</b><p>{detail}</p></div><ArrowUpRight size={15} /></article>)}</div></div>
        </section>

        <section className="contact section-pad reveal" id="contact">
          <div className="section-wrap">
            <SectionLabel number="08">LET’S CONNECT</SectionLabel>
            <div className="contact-heading"><div><span>HAVE A PROJECT OR OPPORTUNITY IN MIND?</span><h2>Let’s build<br /><i>something useful.</i></h2></div><p>I’m always interested in connecting with developers, founders, recruiters, and businesses working on innovative technology products.</p></div>
            <div className="contact-layout">
              <div className="contact-details">
                <a className="contact-method" href={`mailto:${CONTACT_EMAIL}`}><span className="contact-method-icon"><Mail size={19} /></span><span><small>EMAIL</small><b>{CONTACT_EMAIL}</b></span><ArrowUpRight size={16} /></a>
                <a className="contact-method" href={`tel:${PHONE_NUMBER}`}><span className="contact-method-icon"><Phone size={19} /></span><span><small>PHONE / WHATSAPP</small><b>+91 90255 30104</b></span><ArrowUpRight size={16} /></a>
                <a className="contact-method" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><span className="contact-method-icon"><LinkedInIcon decorative /></span><span><small>LINKEDIN</small><b>Connect with me</b></span><ArrowUpRight size={16} /></a>
                <a className="contact-method" href={GITHUB_URL} target="_blank" rel="noreferrer"><span className="contact-method-icon"><BrandIcon icon={siGithub} decorative /></span><span><small>GITHUB</small><b>Explore my code</b></span><ArrowUpRight size={16} /></a>
                <div className="contact-config-note">Update the LinkedIn and GitHub profile URLs in <code>src/App.jsx</code> before publishing.</div>
                <a className="resume-link" href="/Santhosh-Kumar-Resume.txt" download><ArrowDown size={16} /> Download Resume <span>TXT</span></a>
              </div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-top"><MessageSquareText size={17} /><span>Send a message</span></div>
                <div className="form-row"><label htmlFor="contact-name">YOUR NAME<input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" required /></label><label htmlFor="contact-email">EMAIL ADDRESS<input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label></div>
                <label htmlFor="contact-subject">SUBJECT<input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
                <label htmlFor="contact-message">MESSAGE<textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about it..." required /></label>
                <button className="button button-primary" type="submit">Draft email <Send size={15} /></button>
                <p className="form-disclaimer">No backend is configured. Submitting opens your email app with a pre-filled draft; your details are not stored here.</p>
                {formStatus && <p className="form-status" role="status">{formStatus}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark" href="#home">SK<span>.</span></a><span>DESIGNED & BUILT WITH PURPOSE</span><span>© {new Date().getFullYear()} SANTHOSH KUMAR</span><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a></div></footer>
    </>
  );
}

export default App;
