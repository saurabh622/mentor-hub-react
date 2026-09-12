import React, { useState } from "react";
import {
  ArrowUpRight, Check, ChevronDown, Code2, Cpu, Database,
  Github, Linkedin, Mail, Menu, Network, X
} from "lucide-react";
import { profile } from "./data/profile";

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Expertise", "#mentoring"], ["Experience", "#experience"], ["Skills", "#stack"], ["Spirituality", "#spirituality"]];
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a className="brand" href="#top">{profile.name.toUpperCase()}<b>.</b></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <div className={`nav-links ${open ? "show" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#book" onClick={() => setOpen(false)}>Book a free 1:1 <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="availability"><i /> {profile.availability}</div>
        <p className="kicker">{profile.role}</p>
        <h1>{profile.name}<span>.</span></h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button primary" href="#book">Book a free 1:1 <ArrowUpRight size={17}/></a>
          <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
        </div>
      </div>
      <div className="hero-card">
        <div className="portrait-placeholder">
          <span>{profile.name.split(" ").map(x => x[0]).join("").slice(0,2).toUpperCase()}</span>
        </div>
        <div className="hero-card-caption">
          <div><b>Currently at JPMC</b><span>Building resilient financial infrastructure</span></div>
          <div><b>Mentoring</b><span>Free 1:1 conversations</span></div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats shell">
      {profile.stats.map(([value, label]) => (
        <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
      ))}
    </section>
  );
}

const icons = [Code2, Network, Cpu];

function Mentoring() {
  return (
    <section className="section shell" id="mentoring">
      <SectionLabel>What I mentor</SectionLabel>
      <div className="section-heading">
        <h2>Three pillars, one goal:<br/><em>engineer-grade clarity.</em></h2>
      </div>
      <div className="pillar-grid">
        {profile.pillars.map((item, i) => {
          const Icon = icons[i];
          return (
            <article className="pillar" key={item.title}>
              <div className="pillar-top"><span>{item.number}</span><Icon size={22}/></div>
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-dark" id="experience">
      <div className="shell">
        <SectionLabel>Where I've shipped</SectionLabel>
        <div className="section-heading split">
          <h2>A track record measured<br/><em>in outcomes.</em></h2>
          <p>Real engineering experience, translated into practical mentoring rather than textbook advice.</p>
        </div>
        <div className="timeline">
          {profile.experience.map((x, i) => (
            <article className="timeline-row" key={x.company}>
              <div className="timeline-index">0{i+1}</div>
              <div className="timeline-period">{x.period}</div>
              <div className="timeline-content">
                <h3>{x.company}</h3>
                <p className="role">{x.role}</p>
                <ul>{x.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section shell" id="stack">
      <SectionLabel>The toolkit</SectionLabel>
      <div className="section-heading">
        <h2>Depth, not a<br/><em>keyword salad.</em></h2>
      </div>
      <div className="stack-grid">
        {Object.entries(profile.stack).map(([group, items]) => (
          <div className="stack-group" key={group}>
            <h3>{group}</h3>
            <div className="stack-list">{items.map(x => <span key={x}>{x}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Wellbeing() {
  return (
    <section className="wellbeing" id="spirituality">
      <div className="shell wellbeing-grid">
        <div>
          <SectionLabel>Beyond code</SectionLabel>
          <h2>{profile.wellbeing.title}</h2>
          <p>{profile.wellbeing.text}</p>
          <ul>{profile.wellbeing.bullets.map(x => <li key={x}><Check size={17}/>{x}</li>)}</ul>
        </div>
        <div className="years-card">
          <strong>{profile.wellbeing.years}</strong>
          <span>Years of mentoring<br/>and personal growth</span>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [sent, setSent] = useState(false);
  const submit = e => { e.preventDefault(); setSent(true); };
  return (
    <section className="section shell booking" id="book">
      <SectionLabel>Free 1:1 mentoring</SectionLabel>
      <div className="booking-grid">
        <div>
          <h2>Book a free 1:1.<br/><em>No pitch, just a real conversation.</em></h2>
          <p>A focused 30-minute session on one topic you care about — a problem, a design, a career question, or your peace of mind. You leave with a clear next step.</p>
          <div className="promise-list">
            {[
              "A real senior engineer, not a script.",
              "Concrete feedback you can apply immediately.",
              "Completely free. If we're not a fit, I'll say so honestly."
            ].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span></div>)}
          </div>
        </div>
        <form className="booking-form" onSubmit={submit}>
          {sent ? (
            <div className="success"><Check size={28}/><h3>Request received.</h3><p>Thanks. Replace this form handler with your email/calendar integration.</p></div>
          ) : (
            <>
              <label>Name<input required placeholder="Your name"/></label>
              <label>Email<input required type="email" placeholder="you@example.com"/></label>
              <label>What do you want help with?
                <select defaultValue=""><option value="" disabled>Select a topic</option><option>Data Structures & Algorithms</option><option>System Design</option><option>Embedded Technologies</option><option>Career & interview prep</option><option>Spirituality & mental well-being</option></select>
              </label>
              <label>Short context<textarea rows="4" placeholder="Tell me what you're working through..."/></label>
              <button className="button primary full" type="submit">Send request <ArrowUpRight size={17}/></button>
              <small>Usually replies within 24–48 hours.</small>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <div><a className="brand" href="#top">{profile.name.toUpperCase()}<b>.</b></a><p>{profile.role}</p></div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}

export function App() {
  return <><Navbar/><main><Hero/><Stats/><Mentoring/><Experience/><Stack/><Wellbeing/><Booking/></main><Footer/></>;
}