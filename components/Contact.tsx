"use client";

import { useLanguage } from "@/i18n";

const socials = [
  {
    key: "email",
    icon: "✉️",
    href: "https://mail.google.com/mail/?view=cm&to=thanakritcys2002@gmail.com",
    label: "thanakritcys2002@gmail.com",
  },
  {
    key: "github",
    icon: "🐱",
    href: "https://github.com/bigdaddyballbuu",
    label: "github.com/bigdaddyballbuu",
  },
  {
    key: "linkedin",
    icon: "🔗",
    href: "https://www.linkedin.com/in/thanakrit-chaiyasim-1a3900379/",
    label: "linkedin.com/in/thanakrit-chaiyasim/",
  },
  {
    key: "portfolio",
    icon: "🌐",
    href: "https://thanakritportfolio.carrd.co/",
    label: "thanakritportfolio.carrd.co",
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div id="contact" className="fb-box">
      <div className="fb-box-header">
        <h2>📧 {t.contact.title}</h2>
      </div>
      <div className="fb-box-body">
        <p style={{ marginBottom: 10 }}>{t.contact.description}</p>
        <div className="fb-contact-links">
          {socials.map((social) => (
            <div className="fb-contact-item" key={social.key}>
              <span className="fb-contact-icon">{social.icon}</span>
              <div>
                <div style={{ fontWeight: "bold", marginBottom: 1 }}>
                  {t.contact[social.key as keyof typeof t.contact]}
                </div>
                {social.key === "email" ? (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <a href={`mailto:${social.label}`}>
                      {social.label}
                    </a>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 12, color: "#999" }}
                    >
                      (Gmail)
                    </a>
                  </div>
                ) : (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
