"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n";

const navItems = ["about", "skills", "projects", "experience", "contact"] as const;

// Fake notification counts for the FB feel
const badges: Partial<Record<string, number>> = {
  projects: 4,
};

export default function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map((id) => document.getElementById(id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 150) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <div className="fb-header">
        <div className="fb-header-inner">
          {/* Logo */}
          <button
            className="fb-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Portfolio
          </button>

          {/* Search Bar */}
          <div className="fb-search">
            <input
              type="text"
              className="fb-search-input"
              placeholder={t.search.placeholder}
              readOnly
            />
          </div>

          {/* Desktop Nav */}
          <div className="fb-nav-links desktop">
            {navItems.map((item) => (
              <button
                key={item}
                className={`fb-nav-link${activeSection === item ? " active" : ""}`}
                onClick={() => scrollTo(item)}
              >
                {t.nav[item]}
                {badges[item] && <span className="fb-badge">{badges[item]}</span>}
              </button>
            ))}
            <button className="fb-lang-toggle" onClick={toggleLocale}>
              {locale === "en" ? "TH" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button className="fb-lang-toggle fb-mobile-menu-btn" onClick={toggleLocale}
              style={{ display: "none", fontSize: 12, padding: "4px 10px" }}
            >
              {locale === "en" ? "TH" : "EN"}
            </button>
            <button
              className="fb-mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="fb-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item}
              className={`fb-nav-link${activeSection === item ? " active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {t.nav[item]}
              {badges[item] && <span className="fb-badge">{badges[item]}</span>}
            </button>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .fb-header-inner .fb-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
