import { useEffect, useState } from "react";
import { navigation, serviceNavigation } from "../data/site";

type SiteHeaderProps = {
  currentPath: string;
  onNavigate: (href: string) => void;
};

export function SiteHeader({ currentPath, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [currentPath]);

  const navigate = (href: string) => {
    setMenuOpen(false);
    setServicesOpen(false);
    onNavigate(href);
  };

  const toggleServices = () => {
    setMenuOpen(false);
    setServicesOpen((open) => !open);
  };

  return (
    <header className={`site-header ${isCompact ? "site-header--compact" : ""}`}>
      <div className="site-header__inner">
        <button className="brand" type="button" onClick={() => navigate("/")} aria-label="United Oilfield Services home">
          <img src="/images/brand/uos-logo.png" alt="United Oilfield Services - Built on Safety, Governed by Trust" />
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => item.href === "/services" ? (
            <button
              type="button"
              key={item.href}
              className={currentPath.startsWith("/services") || servicesOpen ? "is-active" : ""}
              aria-expanded={servicesOpen}
              aria-controls="service-navigation"
              onClick={toggleServices}
            >
              {item.label}
            </button>
          ) : (
            <button
              type="button"
              key={item.href}
              className={currentPath === item.href ? "is-active" : ""}
              onClick={() => navigate(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="button button--orange header-cta" type="button" onClick={() => navigate("/contact")}>
          Get in touch <span aria-hidden="true">↗</span>
        </button>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
          <i />
          <i />
        </button>
      </div>

      <div id="service-navigation" className={`service-popover ${servicesOpen ? "is-open" : ""}`} aria-hidden={!servicesOpen}>
        <div className="service-popover__inner shell">
          <div className="service-popover__heading"><p className="eyebrow">UOS capabilities</p><p>Choose a service to learn more.</p></div>
          <nav aria-label="Service navigation">
            {serviceNavigation.map((service) => (
              <button type="button" key={service.href} onClick={() => navigate(service.href)}>
                <span>{service.number}</span>
                <b>{service.label}</b>
                <i aria-hidden="true">↗</i>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <p className="eyebrow">Navigation</p>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => item.href === "/services" ? (
            <div className={`mobile-service-group ${servicesOpen ? "is-open" : ""}`} key={item.href}>
              <button type="button" onClick={() => setServicesOpen((open) => !open)} style={{ transitionDelay: `${index * 35}ms` }} aria-expanded={servicesOpen}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
                <b aria-hidden="true">{servicesOpen ? "−" : "+"}</b>
              </button>
              <div className="mobile-service-list">
                {serviceNavigation.map((service) => <button type="button" key={service.href} onClick={() => navigate(service.href)}><span>{service.number}</span>{service.label}</button>)}
              </div>
            </div>
          ) : (
            <button type="button" key={item.href} onClick={() => navigate(item.href)} style={{ transitionDelay: `${index * 35}ms` }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <b aria-hidden="true">↗</b>
            </button>
          ))}
        </nav>
        <a href="tel:+16162109891">616-210-9891</a>
      </div>
    </header>
  );
}
