import { HeroSlider } from "../components/HeroSlider";
import { SectionHeading, ServiceCard } from "../components/SectionPrimitives";
import { services } from "../data/site";

export function HomePage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <>
      <HeroSlider onNavigate={onNavigate} />

      <section className="intro-section shell">
        <div className="intro-section__rail"><span>01</span><i /></div>
        <div className="intro-section__main">
          <p className="eyebrow">About UOS</p>
          <h2>Made for the conditions that keep energy moving.</h2>
          <div className="intro-section__copy">
            <p>United Oilfield Services is a premier multi-service provider with the experience and commitment to safety to reliably provide for your oilfield needs.</p>
            <p>We specialize in upstream and midstream operations, bringing deep familiarity with the technical and logistical demands of remote and challenging environments.</p>
          </div>
          <button className="text-link" type="button" onClick={() => onNavigate("/about")}>Learn more about UOS <span aria-hidden="true">→</span></button>
        </div>
        <aside className="intro-facts" aria-label="UOS operational focus">
          <div><b>Upstream</b><span>Production support built for the field.</span></div>
          <div><b>Midstream</b><span>Reliable service across critical infrastructure.</span></div>
          <div><b>Safety</b><span>Embedded in every stage of the work.</span></div>
        </aside>
      </section>

      <section className="services-preview section-dark">
        <div className="shell">
          <div className="split-heading">
            <SectionHeading inverse eyebrow="Integrated field services" title="One team. A deeper operating range." copy="Specialized divisions designed to meet the day-to-day needs of oilfield operations." />
            <button className="text-link text-link--light" type="button" onClick={() => onNavigate("/services")}>View all services <span aria-hidden="true">→</span></button>
          </div>
          <div className="service-grid service-grid--home">
            {services.slice(0, 4).map((service) => <ServiceCard key={service.slug} service={service} onNavigate={onNavigate} />)}
          </div>
        </div>
      </section>

      <section className="safety-preview">
        <div className="safety-preview__image"><img src="/images/safety/safety-environment.webp" alt="Personal protective equipment staged at an industrial energy site" loading="lazy" /></div>
        <div className="safety-preview__content">
          <p className="eyebrow">Safety & environment</p>
          <h2>Good work starts with responsible work.</h2>
          <p>Our work begins with rigorous HSE guidelines, protecting our people, our clients, and the communities where we operate.</p>
          <button className="button button--dark" type="button" onClick={() => onNavigate("/safety")}>Our safety commitment <span aria-hidden="true">↗</span></button>
        </div>
      </section>

      <section className="callout shell">
        <div><p className="eyebrow">Let's get to work</p><h2>Practical support for the work ahead.</h2></div>
        <button className="button button--orange" type="button" onClick={() => onNavigate("/contact")}>Contact UOS <span aria-hidden="true">↗</span></button>
      </section>
    </>
  );
}
