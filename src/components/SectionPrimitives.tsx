import type { ReactNode } from "react";
import type { Service } from "../data/site";

export function SectionHeading({ eyebrow, title, copy, inverse = false }: { eyebrow: string; title: string; copy?: string; inverse?: boolean }) {
  return (
    <div className={`section-heading ${inverse ? "section-heading--inverse" : ""}`}>
      <p className={`eyebrow ${inverse ? "eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, image, alt, position = "center" }: { eyebrow: string; title: string; copy: string; image: string; alt: string; position?: string }) {
  return (
    <section className="page-hero">
      <img src={image} alt={alt} style={{ objectPosition: position }} />
      <div className="page-hero__shade" />
      <div className="shell page-hero__content">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function ServiceCard({ service, onNavigate, featured = false }: { service: Service; onNavigate: (href: string) => void; featured?: boolean }) {
  return (
    <article className={`service-card ${featured ? "service-card--featured" : ""}`}>
      <div className="service-card__image">
        <img src={service.image} alt={service.alt} loading="lazy" style={{ objectPosition: service.imagePosition ?? "center" }} />
      </div>
      <div className="service-card__body">
        <span className="service-number">{service.number}</span>
        <h3>{service.shortTitle}</h3>
        <p>{service.tagline}</p>
        <button className="card-link" type="button" onClick={() => onNavigate(`/services/${service.slug}`)}>
          Discover service <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="capability-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function ButtonLink({ children, onClick, variant = "orange" }: { children: ReactNode; onClick: () => void; variant?: "orange" | "dark" | "line" }) {
  return <button className={`button button--${variant}`} type="button" onClick={onClick}>{children}</button>;
}
