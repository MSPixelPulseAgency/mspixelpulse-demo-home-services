import { useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Wrench, Zap, Wind, Sparkles, Paintbrush, Hammer, MapPin, Phone, Star, ShieldCheck, Clock, CheckCircle2, Menu, X } from 'lucide-react'

const contact = {
  brand: 'NorthStar Home Services',
  phone: '+1 (000) 000-0000',
  phoneHref: 'tel:+10000000000',
  email: 'hello@mspixelpulse.com',
  location: 'Toronto, Ontario, Canada',
}

const services = [
  { id: 1, title: 'Plumbing Repair', category: 'Plumbing', icon: Wrench, price: 'From $79', response: 'Same-day demo', desc: 'Leak repair, faucets, toilets, drain cleaning, and water-line checks.', tasks: ['Leak repair', 'Drain cleaning', 'Faucet replacement'] },
  { id: 2, title: 'Electrical Repair', category: 'Electrical', icon: Zap, price: 'From $99', response: 'Fast quote', desc: 'Outlet repairs, light fixtures, switches, breaker checks, and safety inspections.', tasks: ['Outlet repair', 'Light fixtures', 'Safety checks'] },
  { id: 3, title: 'HVAC Service', category: 'HVAC', icon: Wind, price: 'From $129', response: 'Seasonal support', desc: 'Furnace service, AC tune-ups, thermostat setup, and heating/cooling checks.', tasks: ['Furnace service', 'AC tune-up', 'Filter replacement'] },
  { id: 4, title: 'House Cleaning', category: 'Cleaning', icon: Sparkles, price: 'From $149', response: 'Weekly or one-time', desc: 'Regular cleaning, deep cleaning, move-out cleaning, and post-renovation cleaning.', tasks: ['Deep cleaning', 'Move-out cleaning', 'Office cleaning'] },
  { id: 5, title: 'Interior Painting', category: 'Painting', icon: Paintbrush, price: 'From $249', response: 'Room refresh', desc: 'Interior painting, touch-ups, trim painting, wall repair, and home refreshes.', tasks: ['Interior painting', 'Wall repair', 'Trim painting'] },
  { id: 6, title: 'Handyman Repairs', category: 'Handyman', icon: Hammer, price: 'From $89', response: 'Small jobs', desc: 'Furniture assembly, door repairs, drywall patches, fixture installs, and small repairs.', tasks: ['Assembly', 'Door repair', 'Drywall patching'] },
  { id: 7, title: 'Roof Repair', category: 'Roofing', icon: ShieldCheck, price: 'From $199', response: 'Inspection ready', desc: 'Shingle repair, leak inspection, gutter cleaning, and minor roof maintenance.', tasks: ['Leak inspection', 'Shingle repair', 'Gutter cleaning'] },
  { id: 8, title: 'Lawn Care', category: 'Landscaping', icon: CheckCircle2, price: 'From $69', response: 'Seasonal work', desc: 'Lawn care, yard cleanup, garden maintenance, seasonal cleanup, and snow removal placeholder.', tasks: ['Lawn care', 'Yard cleanup', 'Garden work'] },
]

const areas = ['Toronto', 'Brampton', 'Mississauga', 'Vaughan', 'Oakville', 'Milton', 'Hamilton', 'Markham', 'Richmond Hill', 'Scarborough', 'North York', 'Etobicoke', 'Burlington', 'Ajax', 'Pickering', 'Whitby']
const pricing = [
  ['Basic Service Visit', 'From $79', 'Small repair checks, inspections, quick fixes'],
  ['Standard Home Service', 'From $149', 'Common repairs and small jobs'],
  ['Deep Cleaning / Larger Job', 'From $249', 'Larger service requests and longer time blocks'],
  ['Same-Day Request', 'From $199', 'Urgent service request placeholder'],
]
const reviews = [
  ['Demo Homeowner', 'Plumbing', 'The mobile layout makes it easy to call and request service quickly.'],
  ['Demo Landlord', 'Cleaning', 'The service cards are clear and simple for homeowners and tenants.'],
  ['Demo Property Manager', 'Electrical', 'The quote flow feels practical and easy to understand.'],
  ['Demo Family Customer', 'Painting', 'The pages are clean, fast, and easy to scan on a phone.'],
]
const faqs = [
  ['Is NorthStar Home Services a real company?', 'No. This is a fictional demo website created by MSPixelPulseAgency.'],
  ['Can this website be customized for a real home service business?', 'Yes. Branding, services, pricing, cities, reviews, photos, and forms can be customized.'],
  ['Can this work for plumbers, electricians, cleaning, and HVAC?', 'Yes. The structure is flexible for many local service businesses.'],
  ['Does the quote form work?', 'The demo includes frontend forms. In production they can connect to EmailJS, Formspree, CRM, Google Sheets, or a backend API.'],
  ['Is this mobile-friendly?', 'Yes. The layout is mobile-first with large call buttons, quote buttons, and simple navigation.'],
  ['Are prices real?', 'No. Prices are demo placeholders only.'],
  ['Can this include online booking?', 'Yes. It can connect to Calendly, booking software, or a custom scheduling system.'],
  ['Can this help with local SEO?', 'Yes. It includes service pages, service-area content, FAQ content, and clear CTAs.'],
]

function Header(){
  const [open,setOpen]=useState(false)
  const links=[['/','Home'],['/about','About'],['/services','Services'],['/areas','Areas'],['/pricing','Pricing'],['/reviews','Reviews'],['/faq','FAQ'],['/contact','Contact']]
  return <header className="header">
    <a className="skip" href="#main">Skip to content</a>
    <div className="topbar"><span>Same-day home service demo</span><a href={contact.phoneHref}>Call {contact.phone}</a><Link to="/quote">Request Quote</Link></div>
    <nav className="nav container" aria-label="Main navigation">
      <Link className="logo" to="/"><span>N</span><b>NorthStar<small>Home Services</small></b></Link>
      <div className="desktop-nav">{links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}<Link className="btn primary" to="/quote">Get Quote</Link></div>
      <button className="menu" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu size={26}/></button>
    </nav>
    {open && <div className="mobile-menu"><button onClick={()=>setOpen(false)} className="close"><X/> Close</button>{links.map(([to,label])=><NavLink onClick={()=>setOpen(false)} key={to} to={to}>{label}</NavLink>)}<Link onClick={()=>setOpen(false)} className="btn primary" to="/quote">Get Quote</Link></div>}
  </header>
}

function SectionTitle({eyebrow,title,text}){return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
function ServiceCard({service}){const Icon=service.icon;return <article className="card service-card"><Icon className="service-icon"/><p className="tag">{service.category}</p><h3>{service.title}</h3><p>{service.desc}</p><ul>{service.tasks.map(t=><li key={t}>{t}</li>)}</ul><div className="meta"><b>{service.price}</b><span>{service.response}</span></div><Link className="btn soft" to="/quote">Get Quote</Link></article>}
function ServiceFinder(){
  const [query,setQuery]=useState(''); const [cat,setCat]=useState('All')
  const cats=['All','Plumbing','Electrical','HVAC','Cleaning','Painting','Roofing','Landscaping','Handyman']
  const filtered=useMemo(()=>services.filter(s=>(cat==='All'||s.category===cat) && [s.title,s.category,s.desc,...s.tasks].join(' ').toLowerCase().includes(query.toLowerCase())),[query,cat])
  return <section className="section finder"><div className="container"><SectionTitle eyebrow="Quick service finder" title="What service do you need?" text="Search by service or tap a category. This demo filter works on the frontend."/><div className="search-box"><label htmlFor="service-search">Search services</label><input id="service-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search plumbing, electrical, cleaning, HVAC..."/></div><div className="chips">{cats.map(c=><button className={cat===c?'active':''} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div><p className="result-count">{filtered.length} service result{filtered.length!==1?'s':''}</p><div className="grid cards-grid">{filtered.map(s=><ServiceCard key={s.id} service={s}/>)}</div>{(query||cat!=='All')&&<button className="btn soft" onClick={()=>{setQuery('');setCat('All')}}>Clear Filters</button>}</div></section>
}
function QuoteForm(){return <form className="form" onSubmit={e=>e.preventDefault()}><div className="two"><label>Name<input required placeholder="Your name"/></label><label>Email<input type="email" required placeholder="you@example.com"/></label></div><div className="two"><label>Phone<input placeholder="+1 (000) 000-0000"/></label><label>City<input placeholder="Toronto"/></label></div><div className="two"><label>Service Category<select><option>Plumbing</option><option>Electrical</option><option>HVAC</option><option>Cleaning</option><option>Painting</option><option>Roofing</option><option>Landscaping</option><option>Handyman</option><option>Other</option></select></label><label>Urgency<select><option>Today</option><option>This week</option><option>This month</option><option>Just researching</option></select></label></div><label>Message<textarea rows="5" placeholder="Tell us what you need help with..."></textarea></label><button className="btn primary" type="submit">Submit Quote Request</button><p className="fine">Demo form only. Connect to email, CRM, Google Sheets, booking software, or backend API in production.</p></form>}
function Home(){return <><section className="hero"><div className="container hero-grid"><div><span className="eyebrow">Mobile-first local service demo</span><h1>Reliable home services made simple.</h1><p>Clean, accessible, and built for calls and quote requests. Perfect for plumbers, electricians, cleaners, HVAC companies, roofers, painters, landscapers, and local service businesses.</p><div className="actions"><Link className="btn primary" to="/quote">Get Free Quote</Link><Link className="btn secondary" to="/services">View Services</Link><a className="call" href={contact.phoneHref}>Call {contact.phone}</a></div></div><div className="hero-card"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80" alt="Home service professional cleaning a bright room"/><div className="trust"><span><Clock/> Same-Day Demo</span><span><ShieldCheck/> Licensed Placeholder</span><span><Star/> 4.9 Demo Rating</span></div></div></div></section><ServiceFinder/><section className="section"><div className="container"><SectionTitle eyebrow="Why this works" title="Built for calls, quotes, trust, and local SEO"/><div className="grid six">{['Fast quote requests','Mobile-first booking','Clear service details','Local service area pages','Review-ready layout','Easy phone actions'].map(x=><div className="mini" key={x}>✓ {x}</div>)}</div></div></section><section className="section alt"><div className="container"><SectionTitle eyebrow="How it works" title="A simple path from service need to quote"/><div className="steps">{['Choose your service','Tell us the issue','Get a quote','Book a time','Service gets completed'].map((s,i)=><div className="step" key={s}><b>{i+1}</b><h3>{s}</h3><p>Clear, mobile-friendly step for local service customers.</p></div>)}</div></div></section><section className="section"><div className="container"><SectionTitle eyebrow="Service areas" title="Home services across GTA communities"/><div className="grid area-grid">{areas.slice(0,8).map(city=><Link className="area" key={city} to="/areas"><h3>{city}</h3><p>Request plumbing, electrical, cleaning, HVAC, handyman, and repair service in {city}.</p></Link>)}</div></div></section><CTA/></>}
function About(){return <Page title="About NorthStar Home Services" eyebrow="About"><p>NorthStar Home Services is a fictional MSPixelPulseAgency demo showing how a local service business can present services, service areas, pricing, reviews, and quote forms online.</p><div className="grid cards-grid">{['Plumbers','Electricians','HVAC technicians','Cleaners','Painters','Roofers','Landscapers','Handymen','Contractors'].map(x=><div className="mini" key={x}>{x}</div>)}</div></Page>}
function Services(){return <><Page title="Plumbing, electrical, HVAC, cleaning, repairs, and more" eyebrow="Services" text="A flexible services structure for many local home-service categories."/><ServiceFinder/></>}
function Areas(){const [q,setQ]=useState(''); const filtered=areas.filter(a=>a.toLowerCase().includes(q.toLowerCase()));return <Page title="Home services across the GTA and nearby communities" eyebrow="Service Areas" text="Search city cards and request service by area."><div className="search-box full"><label htmlFor="city-search">Search your city</label><input id="city-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search your city"/></div><div className="grid area-grid">{filtered.map(city=><article className="area" key={city}><h3>{city}</h3><p>Common demo services: plumbing, electrical, HVAC, cleaning, painting, roofing, landscaping, and handyman.</p><Link className="btn soft" to="/quote">Request Service in {city}</Link></article>)}</div></Page>}
function Pricing(){return <Page title="Simple demo pricing packages" eyebrow="Pricing" text="Real prices depend on the actual business, service, property, parts, labour, and availability."><div className="grid pricing">{pricing.map(([t,p,b])=><article className="card" key={t}><h3>{t}</h3><p className="price">{p}</p><p>{b}</p><ul><li>Service request review</li><li>Quote before work</li><li>Clean service summary</li></ul></article>)}</div><p className="notice">All prices are demo placeholders only.</p></Page>}
function Reviews(){return <Page title="Demo reviews for trust-building pages" eyebrow="Reviews"><div className="grid cards-grid">{reviews.map(([name,service,text])=><article className="card" key={name}><strong>5.0 ★</strong><h3>{name}</h3><p className="tag">{service}</p><p>“{text}”</p></article>)}</div></Page>}
function FAQ(){return <Page title="Common questions about this home services demo" eyebrow="FAQ"><div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></Page>}
function Contact(){return <Page title="Get in touch with NorthStar Home Services" eyebrow="Contact"><div className="contact-grid"><div className="grid"><div className="mini"><Phone/> {contact.phone}</div><div className="mini">✉️ {contact.email}</div><div className="mini"><MapPin/> {contact.location}</div><div className="mini">🕘 Demo business hours</div></div><QuoteForm/></div></Page>}
function Quote(){return <Page title="Tell us what home service you need" eyebrow="Request Quote" text="A mobile-friendly quote form structure for plumbers, electricians, HVAC, cleaning, painting, roofing, landscaping, and handyman services."><div className="contact-grid"><div><div className="notice">This demo form can be connected to email, CRM, Google Sheets, booking software, or a backend API.</div><img className="side-img" src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=900&q=80" alt="Clean home interior after home service"/></div><QuoteForm/></div></Page>}
function Page({eyebrow,title,text,children}){return <section className="section page"><div className="container"><SectionTitle eyebrow={eyebrow} title={title} text={text}/>{children}</div></section>}
function CTA(){return <section className="cta"><div className="container cta-inner"><h2>Need a home service website that gets calls and quote requests?</h2><div><Link className="btn primary" to="/quote">Get Quote</Link><a className="btn secondary" href={contact.phoneHref}>Call Now</a></div></div></section>}
function Footer(){return <footer className="footer"><div className="container footer-grid"><div><h3>NorthStar Home Services</h3><p>A fictional MSPixelPulseAgency home services demo for local Canadian service businesses.</p><p className="fine">Services, prices, reviews, and business details are demo placeholders only.</p></div><div><h4>Quick Links</h4><Link to="/services">Services</Link><Link to="/areas">Service Areas</Link><Link to="/quote">Request Quote</Link></div><div><h4>Contact</h4><p>{contact.location}</p><p>{contact.phone}</p><p>{contact.email}</p></div></div></footer>}
function BottomBar(){return <div className="bottom-bar"><a href={contact.phoneHref}>Call</a><Link to="/quote">Quote</Link><Link to="/services">Services</Link><Link to="/areas">Areas</Link></div>}
export default function App(){return <><Header/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/areas" element={<Areas/>}/><Route path="/pricing" element={<Pricing/>}/><Route path="/reviews" element={<Reviews/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/contact" element={<Contact/>}/><Route path="/quote" element={<Quote/>}/></Routes></main><Footer/><BottomBar/></>}
