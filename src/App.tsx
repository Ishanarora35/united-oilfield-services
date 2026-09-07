import { useEffect, useState } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { services } from "./data/site";
import { HomePage } from "./pages/HomePage";
import {
  AboutPage,
  CareersPage,
  ContactPage,
  NotFoundPage,
  SafetyPage,
  ServiceDetailPage,
  ServicesPage,
  SpecialistPage,
} from "./pages/ContentPages";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": { title: "United Oilfield Services | Built on Safety, Governed by Trust", description: "United Oilfield Services provides experienced, safety-focused support for upstream and midstream oilfield operations." },
  "/about": { title: "About UOS | United Oilfield Services", description: "Learn about the experience, trust, and safety that guide United Oilfield Services." },
  "/services": { title: "Oilfield Services | United Oilfield Services", description: "Explore UOS service divisions for fluid management, maintenance, well operations, flowback, P&A, and more." },
  "/safety": { title: "Safety & Environment | United Oilfield Services", description: "UOS puts safety and environmental stewardship at the start of every project." },
  "/careers": { title: "Careers | United Oilfield Services", description: "Build your future with United Oilfield Services." },
  "/contact": { title: "Contact UOS | United Oilfield Services", description: "Contact United Oilfield Services for dependable oilfield support." },
};

function normalizePath(pathname: string) {
  const clean = pathname.replace(/\/+$/, "");
  return clean || "/";
}

function getMeta(pathname: string) {
  const service = services.find((item) => `/services/${item.slug}` === pathname);
  if (service) return { title: `${service.title} | United Oilfield Services`, description: service.description };
  if (pathname === "/services/specialist-disciplines") return { title: "Supporting Specialist Disciplines | United Oilfield Services", description: "Cementing, wireline support, and casing & capping support from United Oilfield Services." };
  return routeMeta[pathname] ?? { title: "United Oilfield Services", description: "United Oilfield Services." };
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const meta = getMeta(currentPath);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${window.location.origin}${currentPath}`);
  }, [currentPath]);

  const navigate = (href: string) => {
    const nextPath = normalizePath(href);
    if (nextPath !== currentPath) {
      window.history.pushState({}, "", nextPath);
      setCurrentPath(nextPath);
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  const service = services.find((item) => `/services/${item.slug}` === currentPath);
  let page = <NotFoundPage onNavigate={navigate} />;
  if (currentPath === "/") page = <HomePage onNavigate={navigate} />;
  else if (currentPath === "/about") page = <AboutPage onNavigate={navigate} />;
  else if (currentPath === "/services") page = <ServicesPage onNavigate={navigate} />;
  else if (service) page = <ServiceDetailPage service={service} onNavigate={navigate} />;
  else if (currentPath === "/services/specialist-disciplines") page = <SpecialistPage onNavigate={navigate} />;
  else if (currentPath === "/safety") page = <SafetyPage onNavigate={navigate} />;
  else if (currentPath === "/careers") page = <CareersPage />;
  else if (currentPath === "/contact") page = <ContactPage />;

  return <div className="app"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader currentPath={currentPath} onNavigate={navigate} /><main id="main-content">{page}</main><SiteFooter onNavigate={navigate} /></div>;
}
