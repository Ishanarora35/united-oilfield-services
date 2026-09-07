import { useState, type FormEvent } from "react";
import { CapabilityList, PageHero, SectionHeading, ServiceCard } from "../components/SectionPrimitives";
import { contact, services, specialistDisciplines, type Service } from "../data/site";

export function AboutPage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <>
      <PageHero eyebrow="About United Oilfield Services" title="The work is personal. The standard is shared." copy="Experience, trust, and safety are the foundation UOS brings to every client relationship and every field operation." image="/images/home/pumpjack-tanks.webp" alt="Pumpjack and storage tanks at a UOS-style field operation" />
      <section className="editorial-section shell">
        <div className="editorial-section__aside"><p className="eyebrow">Built on trust</p><span>01 / 03</span></div>
        <div>
          <h2>Safe, effective solutions across the specialized divisions that support your operation.</h2>
          <div className="two-copy"><p>United Oilfield Services takes immense pride in the work we do and the clients we serve. We focus on building long-term, trusted partnerships so everyday client successes, at every scale, drive our shared pride.</p><p>Across every phase of your operations, our structured team provides a comprehensive suite of services tailored to your oilfield needs. No matter your size, needs, or location, UOS delivers quality service you can depend on.</p></div>
        </div>
      </section>
      <section className="statement-strip"><div className="shell"><p>“Our clients’ success is our own. We keep that mindset at the forefront of every job, every day.”</p></div></section>
      <section className="values-section shell">
        <SectionHeading eyebrow="How we work" title="A dependable standard, applied in the field." />
        <div className="values-grid">
          <article><span>01</span><h3>Experience</h3><p>Field familiarity that meets the distinct technical and logistical demands of the energy sector.</p></article>
          <article><span>02</span><h3>Trust</h3><p>Long-term client relationships grounded in dependable quality and clear accountability.</p></article>
          <article><span>03</span><h3>Safety</h3><p>Every project is delivered to high safety and quality standards, without compromise.</p></article>
        </div>
      </section>
      <section className="callout shell"><div><p className="eyebrow">Work with UOS</p><h2>Bring an experienced team into the field.</h2></div><button className="button button--orange" type="button" onClick={() => onNavigate("/contact")}>Get in touch <span aria-hidden="true">↗</span></button></section>
    </>
  );
}

export function ServicesPage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <>
      <PageHero eyebrow="Services" title="Practical capability across the field." copy="A comprehensive range of services built to support upstream, midstream, and decommissioning work." image="/images/services/pumping-well-operations.webp" alt="Operator working on field pipeline equipment" />
      <section className="service-index shell">
        <SectionHeading eyebrow="Our service divisions" title="Specialized when you need it. Integrated when it matters." copy="Explore service support tailored to production, maintenance, logistics, field construction, and closure." />
        <div className="service-grid service-grid--index">{services.map((service) => <ServiceCard key={service.slug} service={service} onNavigate={onNavigate} featured={service.slug === "plug-abandonment"} />)}</div>
      </section>
      <section className="specialist-banner shell"><div><p className="eyebrow">08 / Specialist disciplines</p><h2>Cementing. Wireline support. Casing & capping.</h2><p>Supporting disciplines delivered in-house to keep decommissioning projects on schedule.</p></div><button className="button button--dark" type="button" onClick={() => onNavigate("/services/specialist-disciplines")}>Explore disciplines <span aria-hidden="true">↗</span></button></section>
    </>
  );
}

export function ServiceDetailPage({ service, onNavigate }: { service: Service; onNavigate: (href: string) => void }) {
  return (
    <>
      <PageHero eyebrow={`${service.number} / Service division`} title={service.title} copy={service.tagline} image={service.image} alt={service.alt} position={service.imagePosition} />
      <section className="service-detail shell">
        <div className="service-detail__lead"><p className="eyebrow">The UOS approach</p><h2>{service.description}</h2></div>
        <div className="service-detail__body"><p>{service.detail}</p><button className="button button--orange" type="button" onClick={() => onNavigate("/contact")}>Talk to our team <span aria-hidden="true">↗</span></button></div>
      </section>
      <section className="capabilities-section section-dark"><div className="shell capabilities-layout"><div><p className="eyebrow eyebrow--light">Field capabilities</p><h2>Support where the work happens.</h2></div><CapabilityList items={service.capabilities} /></div></section>
      {service.advantages ? <section className="advantages-section shell"><SectionHeading eyebrow="Why operators choose our turnkey model" title="Built for clear execution." /><div className="advantages-grid">{service.advantages.map((advantage, index) => <article key={advantage.title}><span>0{index + 1}</span><h3>{advantage.title}</h3><p>{advantage.copy}</p></article>)}</div></section> : null}
      <section className="service-next shell"><p>Need another field capability?</p><button className="text-link" type="button" onClick={() => onNavigate("/services")}>Explore all services <span aria-hidden="true">→</span></button></section>
    </>
  );
}

export function SpecialistPage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <>
      <PageHero eyebrow="Supporting specialist disciplines" title="The in-house support that holds a project together." copy="Cementing, wireline support, and casing & capping services that support well closure work and keep projects on schedule." image="/images/services/cementing.webp" alt="Specialized cementing operation in progress" />
      <section className="discipline-section shell">
        {specialistDisciplines.map((discipline, index) => <article className="discipline discipline--image" key={discipline.title}><img src={discipline.image} alt={discipline.alt} loading="lazy" /><div><span>0{index + 1}</span><h2>{discipline.title}</h2><p>{discipline.copy}</p></div></article>)}
      </section>
      <section className="callout shell"><div><p className="eyebrow">Project support</p><h2>Coordinate the next phase with UOS.</h2></div><button className="button button--orange" type="button" onClick={() => onNavigate("/contact")}>Contact UOS <span aria-hidden="true">↗</span></button></section>
    </>
  );
}

export function SafetyPage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <>
      <PageHero eyebrow="Safety & environment" title="Safety & Environmental Excellence" copy="Our top priorities, built into the start and delivery of every project." image="/images/safety/safety-environment.webp" alt="Personal protective equipment at an industrial energy site" />
      <section className="safety-intro shell"><div><p className="eyebrow">A foundational commitment</p><h2>Every project begins with rigorous HSE guidelines.</h2></div><p>Safety and environmental stewardship protect our team, our clients, and the communities where we operate. It is the baseline for work at every scale.</p></section>
      <section className="compliance-band"><div className="shell"><span>40+</span><div><p className="eyebrow eyebrow--light">Combined oilfield experience</p><h2>Dedicated compliance personnel bring more than 40 years of combined oilfield experience.</h2></div></div></section>
      <section className="training-section shell"><SectionHeading eyebrow="Training that evolves" title="A standard that stays active." /><div className="training-grid"><article><span>01</span><h3>Extensive onboarding</h3><p>New hires complete onboarding built around our internal protocols.</p></article><article><span>02</span><h3>Customer-specific protocols</h3><p>Training is tailored to the requirements of the customers we support.</p></article><article><span>03</span><h3>Continuous training</h3><p>Teams stay current as industry policies evolve.</p></article></div></section>
      <section className="callout shell"><div><p className="eyebrow">Work safely with UOS</p><h2>Bring a safety-first partner into the field.</h2></div><button className="button button--orange" type="button" onClick={() => onNavigate("/contact")}>Get in touch <span aria-hidden="true">↗</span></button></section>
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build your future with UOS." copy="Rewarding opportunities for dedicated, safety-minded professionals ready to support a growing field services team." image="/images/services/roustabout.webp" alt="Field crew working together on site" position="center 42%" />
      <section className="careers-intro shell"><div><p className="eyebrow">Join our team</p><h2>Bring your professionalism to work that matters.</h2></div><p>United Oilfield Services is always looking for dedicated, safety-minded professionals to join our growing team. If you are interested in current open positions, we want to hear from you.</p></section>
      <section className="resume-panel shell"><div><span>UOS</span><p className="eyebrow">Current opportunities</p><h2>Send us your resume or drop us a line today to get started.</h2></div><a className="button button--orange" href="mailto:office@unitedoilfields.com?subject=UOS%20Career%20Inquiry">Send your resume <span aria-hidden="true">↗</span></a></section>
    </>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Name: ${fields.get("name") ?? ""}`,
      `Company: ${fields.get("company") ?? ""}`,
      `Email: ${fields.get("email") ?? ""}`,
      `Phone: ${fields.get("phone") ?? ""}`,
      "",
      "Project needs:",
      String(fields.get("message") ?? ""),
    ].join("\n");
    setSubmitted(true);
    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent("UOS Project Inquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageHero eyebrow="Contact UOS" title="Start the conversation." copy="Tell us about the field support you need. Our team is ready to hear from you." image="/images/home/pipelines-sunset.webp" alt="Pipelines at sunset" />
      <section className="contact-section shell">
        <div className="contact-details"><p className="eyebrow">United Oilfield Services LLC</p><h2>Get in touch with our team.</h2><div className="contact-detail"><span>Phone</span><a href={contact.phoneHref}>{contact.phone}</a></div><div className="contact-detail"><span>Email</span><a href={contact.emailHref}>{contact.email}</a></div><div className="contact-detail"><span>Address</span><p>{contact.address}</p></div><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=2472+Millview+Zeeland+Michigan+USA" target="_blank" rel="noreferrer">View location <span aria-hidden="true">↗</span></a></div>
        <form className="contact-form" onSubmit={onSubmit}><p className="eyebrow">Project inquiry</p><h2>How can we support your operation?</h2><div className="form-grid"><label>Name<input name="name" autoComplete="name" required /></label><label>Company<input name="company" autoComplete="organization" /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" /></label><label className="form-full">Tell us about your needs<textarea name="message" rows={5} required /></label></div><button className="button button--orange" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>{submitted ? <p className="form-note" role="status">Your email application should open with the inquiry details addressed to <a href={contact.emailHref}>{contact.email}</a>.</p> : null}</form>
      </section>
    </>
  );
}

export function NotFoundPage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return <section className="not-found shell"><p className="eyebrow">404</p><h1>That page is out of range.</h1><p>Return to United Oilfield Services and explore our field capabilities.</p><button className="button button--orange" type="button" onClick={() => onNavigate("/")}>Back to home <span aria-hidden="true">↗</span></button></section>;
}
