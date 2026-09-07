import { contact, navigation, services } from "../data/site";

type SiteFooterProps = {
  onNavigate: (href: string) => void;
};

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <button className="footer-logo" type="button" onClick={() => onNavigate("/")} aria-label="United Oilfield Services home">
            <img src="/images/brand/uos-logo.png" alt="United Oilfield Services" />
          </button>
          <p>Safe, capable field support for upstream and midstream operations.</p>
          <a className="footer-phone" href={contact.phoneHref}>{contact.phone}</a>
        </div>

        <div className="footer-links">
          <div>
            <p className="eyebrow">Explore</p>
            {navigation.slice(1).map((item) => (
              <button key={item.href} type="button" onClick={() => onNavigate(item.href)}>{item.label}</button>
            ))}
          </div>
          <div>
            <p className="eyebrow">Services</p>
            {services.slice(0, 4).map((service) => (
              <button key={service.slug} type="button" onClick={() => onNavigate(`/services/${service.slug}`)}>{service.shortTitle}</button>
            ))}
            <button type="button" onClick={() => onNavigate("/services")}>View all services</button>
          </div>
        </div>
      </div>
      <div className="footer-lower shell">
        <span>© {new Date().getFullYear()} {contact.company}</span>
        <a href={contact.emailHref}>{contact.email}</a>
        <span>{contact.address}</span>
      </div>
    </footer>
  );
}
