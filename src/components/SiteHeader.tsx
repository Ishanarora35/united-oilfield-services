import { useEffect, useState } from "react";
import { navigation } from "../data/site";

type SiteHeaderProps = {
  currentPath: string;
  onNavigate: (href: string) => void;
};

export function SiteHeader({ currentPath, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const navigate = (href: string) => {
    setMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className={`site-header ${isCompact ? "site-header--compact" : ""}`}>
      <div className="site-header__inner">
        <button className="brand" type="button" onClick={() => navigate("/")} aria-label="United Oilfield Services home">
          <img src="/images/brand/uos-logo.png" alt="United Oilfield Services - Built on Safety, Governed by Trust" />
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              type="button"
              key={item.href}
              className={currentPath === item.href || (item.href === "/services" && currentPath.startsWith("/services")) ? "is-active" : ""}
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

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <p className="eyebrow">Navigation</p>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
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
