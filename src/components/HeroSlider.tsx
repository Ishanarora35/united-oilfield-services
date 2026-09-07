import { useEffect, useState } from "react";
import { heroSlides } from "../data/site";

type HeroSliderProps = {
  onNavigate: (href: string) => void;
};

export function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tick = () => {
      if (!media.matches) {
        setActive((current) => (current + 1) % heroSlides.length);
      }
    };
    const interval = window.setInterval(tick, 6500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="United Oilfield Services highlights"
    >
      <div className="hero-slider__images" aria-live="polite">
        {heroSlides.map((slide, index) => (
          <img
            className={index === active ? "is-active" : ""}
            key={slide.title}
            src={slide.image}
            alt={index === active ? slide.alt : ""}
            aria-hidden={index !== active}
            style={{ objectPosition: slide.position }}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>
      <div className="hero-slider__shade" />
      <div className="hero-slider__content shell">
        <div className="hero-copy" key={heroSlides[active].title}>
          <p className="eyebrow eyebrow--light">United Oilfield Services</p>
          <h1>{heroSlides[active].title}</h1>
          <p className="hero-support">Field-proven service delivery, built around safety, reliability, and the demands of the energy sector.</p>
          <div className="button-row">
            <button className="button button--orange" type="button" onClick={() => onNavigate("/services")}>Explore our services <span aria-hidden="true">↗</span></button>
            <button className="text-link text-link--light" type="button" onClick={() => onNavigate("/contact")}>Contact UOS <span aria-hidden="true">→</span></button>
          </div>
        </div>

      </div>
    </section>
  );
}
