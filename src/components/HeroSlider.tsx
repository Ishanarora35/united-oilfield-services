import { useEffect, useState } from "react";
import { heroSlides } from "../data/site";

type HeroSliderProps = {
  onNavigate: (href: string) => void;
};

export function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tick = () => {
      if (!media.matches && !isPaused) {
        setActive((current) => (current + 1) % heroSlides.length);
      }
    };
    const interval = window.setInterval(tick, 6500);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const changeSlide = (index: number) => setActive(index);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="United Oilfield Services highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
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

        <div className="hero-slider__controls">
          <div className="slide-count"><span>{String(active + 1).padStart(2, "0")}</span><i /> <small>{String(heroSlides.length).padStart(2, "0")}</small></div>
          <div className="slide-dots" role="tablist" aria-label="Select hero slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === active ? "is-active" : ""}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                onClick={() => changeSlide(index)}
              />
            ))}
          </div>
          <button className="pause-button" type="button" aria-pressed={isPaused} onClick={() => setIsPaused((paused) => !paused)}>
            {isPaused ? "Play slideshow" : "Pause slideshow"}
          </button>
        </div>
      </div>
    </section>
  );
}
