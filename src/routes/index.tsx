import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, Search, ShoppingBag, MousePointer2, Megaphone, GraduationCap, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import workspace from '@/assets/marketing-workspace.jpg';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Faisal — Digital Marketer & Growth Strategist' },
      { name: 'description', content: 'Meet Faisal, a digital marketer managing SEO, ecommerce, paid ads, and social media at Houston Systems. Explore his experience at IMARC Group and professional background.' },
      { property: 'og:title', content: 'Faisal — Digital Marketer & Growth Strategist' },
      { property: 'og:description', content: 'Connecting strategy with execution across SEO, ecommerce, paid advertising, and social media.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '/' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: '/' }],
  }),
  component: Index,
});

const expertise = [
  { icon: Search, title: 'Search engine optimization', description: 'Connecting search intent with the right content to improve visibility, attract relevant traffic, and generate organic leads.', label: 'Visibility that matters' },
  { icon: ShoppingBag, title: 'Ecommerce marketing', description: 'Managing the digital journey from product discovery to purchase, with a focus on growth across the ecommerce experience.', label: 'Discovery to conversion' },
  { icon: MousePointer2, title: 'Paid advertising', description: 'Bringing strategy and execution together to reach the right audience through focused paid advertising campaigns.', label: 'Purposeful performance' },
  { icon: Megaphone, title: 'Social media', description: 'Building a consistent brand presence through social media planning, content, and coordinated campaign management.', label: 'Meaningful connections' },
];

function downloadResume() {
  const text = `FAISAL\nDigital Marketer\n\nEXPERIENCE\nHouston Systems | Digital Marketer | July 2025 – Present\nManage overall digital marketing projects across SEO, ecommerce, paid ads, and social media.\n\nIMARC Group | Digital Marketing Specialist | January 2021 – January 2025\nManaged more than 300 website pages to improve rankings and traffic and generate organic leads for a market research company.\n\nEDUCATION\nB.Tech in Electronics and Communication\nDr. A.P.J. Abdul Kalam Technical University (AKTU)\n\nEXPERTISE\nSEO • Ecommerce • Paid Advertising • Social Media • Project Management\n`;
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = 'Faisal-Resume.txt'; anchor.click();
  URL.revokeObjectURL(url);
}

function Index() {
  return (
    <main>
      <header className="site-header">
        <div className="container-wide flex items-center justify-between gap-6">
          <a href="#" className="brand" aria-label="Faisal home">faisal<span className="brand-dot">.</span></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            <a href="#about" className="nav-link">About me</a>
            <a href="#expertise" className="nav-link">Expertise</a>
            <a href="#experience" className="nav-link">Experience</a>
          </nav>
          <Button asChild variant="outline" className="h-10 gap-3 text-xs"><a href="#experience">My background <ArrowUpRight /></a></Button>
        </div>
      </header>

      <section className="hero">
        <img src={workspace} width={1920} height={1024} alt="A digital marketing workspace with analytics displayed on a laptop and monitor" className="hero-image" fetchPriority="high" />
        <div className="container-wide hero-content text-hero-foreground">
          <p className="eyebrow text-lime">DIGITAL MARKETER · PROJECT LEAD</p>
          <h1>Hi, I’m Faisal.<br />I turn digital strategy<br />into <span>meaningful growth.</span></h1>
          <p className="hero-description">From search visibility to the next sale, I bring SEO, ecommerce, paid ads, and social media together to move brands forward.</p>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <Button asChild variant="hero"><a href="#experience">Explore my experience <ArrowUpRight /></a></Button>
            <Button asChild variant="heroLink"><a href="#about">A little about me <ChevronDown /></a></Button>
          </div>
          <p className="hero-note"><span />Currently driving digital marketing at Houston Systems</p>
        </div>
      </section>

      <div className="container-wide stats">
        <div className="stat"><strong>300+</strong><p>Website pages managed at IMARC</p></div>
        <div className="stat"><strong>4</strong><p>Core digital marketing disciplines</p></div>
        <div className="stat"><strong>2021</strong><p>The start of my marketing journey</p></div>
      </div>

      <section id="expertise" className="section container-wide">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow text-primary">WHAT I BRING TO THE TABLE</p><h2 className="section-heading">One strategy. Every digital touchpoint.</h2></div>
          <p className="section-description max-w-72">A connected approach to building visibility,<br className="hidden lg:block" /> reaching people, and growing a business.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map(({ icon: Icon, title, description, label }) => <article className="expertise-item" key={title}><div className="expertise-icon"><Icon size={21} strokeWidth={1.6} /></div><h3>{title}</h3><p>{description}</p><div className="expertise-label">{label}<ArrowUpRight size={13} /></div></article>)}
        </div>
      </section>

      <section id="about" className="section about-band">
        <div className="container-wide about-grid">
          <div><p className="eyebrow text-primary">THE PERSON BEHIND THE STRATEGY</p><h2 className="section-heading">An engineering foundation.<br />A marketer’s mindset.</h2><p className="section-description mt-6 max-w-sm">Analytical thinking meets a practical understanding of how people discover, engage with, and choose a brand.</p></div>
          <div className="about-copy section-description">
            <p>I’m Faisal, a digital marketer who connects the bigger picture with everyday execution. My work spans search, ecommerce, paid advertising, and social media — bringing each channel together as part of one overall project.</p>
            <p>My journey began at IMARC Group, where I managed more than 300 website pages with a focus on search rankings, traffic, and organic lead generation. Today, I manage digital marketing projects at Houston Systems.</p>
            <div className="education"><GraduationCap size={25} className="shrink-0 text-primary" /><div><p className="font-semibold text-foreground !mb-1">B.Tech · Electronics & Communication</p><span className="text-xs">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</span></div></div>
          </div>
        </div>
      </section>

      <section id="experience" className="section container-wide experience-grid">
        <div><p className="eyebrow text-primary">MY PROFESSIONAL JOURNEY</p><h2 className="section-heading">Experience built<br />through execution.</h2><p className="section-description mt-5 max-w-xs">From managing search at scale to leading connected digital marketing projects.</p><Button variant="link" onClick={downloadResume} className="mt-6 px-0 gap-3">Download résumé <Download /></Button></div>
        <div>
          <article className="job"><div className="job-top flex items-center justify-between"><h3>Houston Systems</h3><span className="job-date">Jul 2025 — Present</span></div><p className="job-role">Digital Marketer <span className="ml-3 tag">Current role</span></p><p className="section-description">Managing overall digital marketing projects, aligning SEO, ecommerce, paid ads, and social media to create a coordinated approach to growth.</p><div className="mt-5 flex flex-wrap gap-2">{['Project management', 'SEO', 'Ecommerce', 'Paid ads', 'Social media'].map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>
          <article className="job"><div className="job-top flex items-center justify-between"><h3>IMARC Group</h3><span className="job-date">Jan 2021 — Jan 2025</span></div><p className="job-role">Digital Marketing Specialist</p><p className="section-description">Managed more than 300 website pages for a market research company, working to improve search rankings, increase relevant traffic, and generate organic leads.</p><div className="mt-5 flex flex-wrap gap-2">{['SEO', 'Website management', 'Organic lead generation', 'Market research'].map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>
        </div>
      </section>

      <section className="resume-band"><div className="container-wide flex flex-wrap items-center justify-between gap-6"><div><p className="eyebrow text-primary">THE BIG PICTURE, IN ONE PLACE</p><h2 className="mt-3 text-2xl font-semibold">Get to know my professional background.</h2></div><Button onClick={downloadResume} size="lg" className="h-12 gap-4">Download résumé <ArrowRight /></Button></div></section>
      <footer className="footer"><div className="container-wide flex items-center justify-between gap-4"><a href="#" className="brand text-foreground">faisal<span className="brand-dot">.</span></a><p>Faisal · Digital marketing, with purpose.</p><Button asChild variant="ghost" size="icon"><a href="#" aria-label="Back to top" title="Back to top"><ArrowUpRight /></a></Button></div></footer>
    </main>
  );
}
