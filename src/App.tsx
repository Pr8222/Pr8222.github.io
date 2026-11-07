import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Layers3, Server, Terminal, Globe2, ExternalLink,
  Download, Sparkles, Cpu, Workflow
} from 'lucide-react'

type Lang = 'en' | 'fa'

const copy = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'],
    eyebrow: 'FULL-STACK DEVELOPER',
    headlineA: 'I build digital',
    headlineB: 'experiences that',
    headlineC: 'work beautifully.',
    intro: 'I’m Parsa — a computer engineering graduate interested in building useful web products, reliable backends, and well-structured software.',
    cta: 'Explore my work',
    contact: 'Let’s talk',
    available: 'Open to meaningful opportunities',
    aboutTag: 'A LITTLE ABOUT ME',
    aboutTitle: 'Curious by nature. Practical by design.',
    about: 'I enjoy understanding how products work from the interface down to the database. My current focus is full-stack development with React and .NET, while continuing to explore infrastructure, Windows Server, and networking.',
    skillsTag: 'THE TOOLKIT',
    skillsTitle: 'Technologies I work with',
    skillsSub: 'A practical toolkit that keeps evolving as I build and learn.',
    projectsTag: 'SELECTED WORK',
    projectsTitle: 'Things I’ve built',
    projectsSub: 'A selection of projects, experiments, and ongoing work.',
    experienceTag: 'THE JOURNEY',
    experienceTitle: 'Experience',
    experienceRole: 'Full-Stack Developer',
    experienceCompany: 'Radin Tlm',
    experienceText: 'Worked on web application development and maintenance, with attention to usability, performance, and clean implementation.',
    educationTag: 'BACKGROUND',
    educationTitle: 'Education',
    degree: 'B.Sc. in Computer Engineering',
    university: 'Islamic Azad University, Science and Research Branch',
    certificate: 'C# Programmer Certificate',
    certificateIssuer: 'SoloLearn',
    contactTag: 'HAVE A PROJECT IN MIND?',
    contactTitle: 'Let’s build something useful.',
    contactText: 'Have an opportunity, an idea, or just want to connect? My inbox is open.',
    email: 'Send me an email',
    footer: 'Designed & built by Parsa Rohani.',
    language: 'فارسی',
    viewProject: 'View project',
    inProgress: 'In progress',
    featured: 'FEATURED',
    based: 'Computer Engineering · Full-Stack Development',
  },
  fa: {
    nav: ['درباره من', 'مهارت‌ها', 'پروژه‌ها', 'تجربه', 'تحصیلات', 'ارتباط'],
    eyebrow: 'توسعه‌دهنده فول‌استک',
    headlineA: 'تجربه‌های دیجیتال',
    headlineB: 'می‌سازم؛ با تمرکز بر',
    headlineC: 'کیفیت و کاربردپذیری.',
    intro: 'من پارسا هستم؛ فارغ‌التحصیل مهندسی کامپیوتر و علاقه‌مند به ساخت محصولات تحت وب، بک‌اندهای قابل‌اعتماد و نرم‌افزارهای ساختاریافته.',
    cta: 'مشاهده پروژه‌ها',
    contact: 'ارتباط با من',
    available: 'آماده همکاری در فرصت‌های مناسب',
    aboutTag: 'کمی درباره من',
    aboutTitle: 'کنجکاو در یادگیری؛ دقیق در اجرا.',
    about: 'از درک تجربه کاربری تا طراحی بک‌اند و پایگاه داده، به تمام لایه‌های ساخت یک محصول نرم‌افزاری علاقه دارم. در حال حاضر تمرکز من توسعه فول‌استک با React و .NET است و هم‌زمان زیرساخت، Windows Server و شبکه را نیز دنبال می‌کنم.',
    skillsTag: 'جعبه ابزار من',
    skillsTitle: 'تکنولوژی‌هایی که با آن‌ها کار می‌کنم',
    skillsSub: 'مجموعه‌ای کاربردی که هم‌زمان با ساخت پروژه و یادگیری، توسعه پیدا می‌کند.',
    projectsTag: 'منتخب پروژه‌ها',
    projectsTitle: 'چیزهایی که ساخته‌ام',
    projectsSub: 'ترکیبی از پروژه‌های پیاده‌سازی‌شده، نمونه‌کارها و کارهای در حال توسعه.',
    experienceTag: 'مسیر حرفه‌ای',
    experienceTitle: 'تجربه کاری',
    experienceRole: 'توسعه‌دهنده فول‌استک',
    experienceCompany: 'Radin Tlm',
    experienceText: 'مشارکت در توسعه و نگهداری اپلیکیشن‌های تحت وب با تمرکز بر تجربه کاربری، عملکرد و پیاده‌سازی تمیز.',
    educationTag: 'پیشینه تحصیلی',
    educationTitle: 'تحصیلات',
    degree: 'کارشناسی مهندسی کامپیوتر',
    university: 'دانشگاه آزاد اسلامی، واحد علوم و تحقیقات',
    certificate: 'گواهی برنامه‌نویسی C#',
    certificateIssuer: 'SoloLearn',
    contactTag: 'ایده‌ای برای همکاری داری؟',
    contactTitle: 'بیایید چیزی کاربردی بسازیم.',
    contactText: 'اگر فرصت همکاری، ایده‌ای برای ساخت محصول یا صرفاً تمایل به ارتباط داری، خوشحال می‌شوم پیام بدهی.',
    email: 'ارسال ایمیل',
    footer: 'طراحی و توسعه توسط پارسا روحانی.',
    language: 'English',
    viewProject: 'مشاهده پروژه',
    inProgress: 'در حال توسعه',
    featured: 'پروژه منتخب',
    based: 'مهندسی کامپیوتر · توسعه فول‌استک',
  },
}

const projects = [
  {
    number: '01',
    name: 'Crypto App',
    description: {
      en: 'A cryptocurrency dashboard with market data, search, currency switching, pagination, and historical charts.',
      fa: 'داشبورد رمزارز با نمایش داده‌های بازار، جست‌وجو، تغییر واحد پول، صفحه‌بندی و نمودارهای تاریخی.',
    },
    stack: ['React', 'Vite', 'JavaScript', 'REST API'],
    href: 'https://github.com/Pr8222/crypto-app',
    icon: 'chart',
  },
  {
    number: '02',
    name: 'Nimfaseleh Menu',
    description: {
      en: 'A digital menu experience created for Nimfaseleh, a café inside a bookstore.',
      fa: 'منوی دیجیتال طراحی‌شده برای کافه نیم‌فاصله، واقع در یک کتاب‌فروشی.',
    },
    stack: ['React', 'JavaScript', 'CSS'],
    href: 'https://github.com/Pr8222/nimfaseleh-menu',
    icon: 'menu',
  },
  {
    number: '03',
    name: 'Login System',
    description: {
      en: 'An authentication-focused project exploring login flows and user interface structure.',
      fa: 'پروژه‌ای با تمرکز بر جریان ورود کاربران و ساختار رابط کاربری احراز هویت.',
    },
    stack: ['Web Development', 'Authentication'],
    href: 'https://github.com/Pr8222/My-websites/tree/main/Login',
    icon: 'lock',
  },
  {
    number: '04',
    name: 'KavirAccounting',
    description: {
      en: 'A lightweight Windows desktop accounting application built with WinForms, .NET Framework 4.8, and SQLite. Currently in development.',
      fa: 'نرم‌افزار حسابداری دسکتاپ ویندوز با WinForms، دات‌نت فریم‌ورک ۴.۸ و SQLite؛ در حال توسعه.',
    },
    stack: ['C#', 'WinForms', '.NET Framework', 'SQLite'],
    href: 'https://github.com/Pr8222',
    icon: 'desktop',
    ongoing: true,
  },
]

const skillGroups = [
  { icon: Code2, title: 'Frontend', items: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Responsive Design'] },
  { icon: Server, title: 'Backend', items: ['C#', 'ASP.NET Core', 'REST APIs', '.NET'] },
  { icon: Database, title: 'Database', items: ['SQL Server', 'SQLite', 'MySQL'] },
  { icon: Workflow, title: 'Tools & Infrastructure', items: ['Git', 'Postman', 'Windows Server', 'Active Directory', 'Networking'] },
]

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const isFa = lang === 'fa'

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className={isFa ? 'app fa' : 'app'} dir={isFa ? 'rtl' : 'ltr'}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <img src="profile.jpg" alt="profile" />
          <span>PARSA ROHANI</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {t.nav.map((label, i) => (
            <button key={label} onClick={() => scrollTo(['about', 'skills', 'projects', 'experience', 'education', 'contact'][i])}>{label}</button>
          ))}
          <button className="mobile-language" onClick={() => setLang(isFa ? 'en' : 'fa')}>{t.language}</button>
        </nav>
        <div className="nav-actions">
          <button className="language-switch" onClick={() => setLang(isFa ? 'en' : 'fa')}><Globe2 size={15} /> {t.language}</button>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="status-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
              <span className="status-dot" /> {t.available}
            </motion.div>
            <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }}>{t.eyebrow}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }}>
              {t.headlineA}<br />{t.headlineB}<br /><span>{t.headlineC}</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>{t.intro}</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
              <button className="button button-primary" onClick={() => scrollTo('projects')}>{t.cta} <ArrowUpRight size={17} /></button>
              <button className="button button-ghost" onClick={() => scrollTo('contact')}>{t.contact} <ArrowUpRight size={17} /></button>
            </motion.div>
            <div className="hero-meta"><span><span className="meta-line" /> {t.based}</span><span className="mono">01 / 06</span></div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .8 }}>
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="core-card">
              <div className="core-top"><span className="mono">PR / 2026</span><Sparkles size={17} /></div>
              <div className="core-symbol"><Code2 size={64} strokeWidth={1.15} /></div>
              <div className="core-name">PARSA<span>.</span></div>
              <div className="core-caption">BUILD · LEARN · IMPROVE</div>
              <div className="core-bottom"><span>FULL-STACK</span><span className="core-bars"><i /><i /><i /><i /><i /></span></div>
            </div>
            <div className="floating-chip chip-top"><Terminal size={15} /> <span>Clean code</span></div>
            <div className="floating-chip chip-bottom"><Cpu size={15} /> <span>Thoughtful systems</span></div>
            <div className="visual-index mono">FIG. 001 — DEVELOPER PROFILE</div>
          </motion.div>
          <button className="scroll-cue" onClick={() => scrollTo('about')}><ArrowDown size={16} /> SCROLL TO EXPLORE</button>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-heading"><p className="eyebrow">{t.aboutTag}</p><span className="section-index mono">01 — 06</span></div>
          <div className="about-grid">
            <h2>{t.aboutTitle}</h2>
            <div className="about-body"><p>{t.about}</p><div className="about-note"><span className="note-symbol">✳</span><span>{isFa ? 'همیشه در حال یادگیری و ساختن.' : 'Always learning. Always building.'}</span></div></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <div className="section-heading"><p className="eyebrow">{t.skillsTag}</p><span className="section-index mono">02 — 06</span></div>
          <div className="section-title-row"><h2>{t.skillsTitle}</h2><p>{t.skillsSub}</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon
              return <motion.div className="skill-card" key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
                <div className="skill-card-top"><Icon size={21} /><span className="mono">0{i + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.div>
            })}
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <div className="section-heading"><p className="eyebrow">{t.projectsTag}</p><span className="section-index mono">03 — 06</span></div>
          <div className="section-title-row"><h2>{t.projectsTitle}</h2><p>{t.projectsSub}</p></div>
          <div className="projects-list">
            {projects.map((project, i) => <motion.article className="project-row" key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="project-number mono">{project.number}</div>
              <div className="project-main">
                <div className="project-title-line"><h3>{project.name}</h3>{project.ongoing && <span className="project-state">{t.inProgress}</span>}</div>
                <p>{project.description[lang]}</p>
                <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${t.viewProject}: ${project.name}`}><ArrowUpRight size={20} /></a>
            </motion.article>)}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <div className="section-heading"><p className="eyebrow">{t.experienceTag}</p><span className="section-index mono">04 — 06</span></div>
          <h2>{t.experienceTitle}</h2>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content"><span className="mono timeline-date">PROFESSIONAL EXPERIENCE</span><h3>{t.experienceRole}</h3><h4>{t.experienceCompany}</h4><p>{t.experienceText}</p></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="education">
          <div className="section-heading"><p className="eyebrow">{t.educationTag}</p><span className="section-index mono">05 — 06</span></div>
          <h2>{t.educationTitle}</h2>
          <div className="education-grid">
            <div className="education-card"><span className="education-icon"><Layers3 size={20} /></span><div><h3>{t.degree}</h3><p>{t.university}</p><span className="mono education-date">2021 — 2025</span></div></div>
            <div className="education-card"><span className="education-icon"><Code2 size={20} /></span><div><h3>{t.certificate}</h3><p>{t.certificateIssuer}</p></div></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-orb" />
          <div className="section-heading"><p className="eyebrow">{t.contactTag}</p><span className="section-index mono">06 — 06</span></div>
          <h2>{t.contactTitle}</h2>
          <p className="contact-copy">{t.contactText}</p>
          <a className="button button-primary contact-button" href="mailto:parsa.rohani82@gmail.com">{t.email} <ArrowUpRight size={17} /></a>
          <div className="social-links">
            <a href="https://github.com/Pr8222" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
            <a href="mailto:parsa.rohani82@gmail.com"><Mail size={17} /> Email <ExternalLink size={13} /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">P<span>.</span></span><span>PARSA ROHANI</span></a><p>{t.footer}</p><span className="mono">© 2026</span></footer>
    </div>
  )
}

export default App
