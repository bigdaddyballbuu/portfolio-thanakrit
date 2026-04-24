"use client";

import { useLanguage } from "@/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="fb-profile-header">
      {/* Profile Picture */}
      <div className="fb-profile-pic">
        <img
          src="/resu.png"
          alt="ballbuu"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.innerHTML = "👨‍💻";
          }}
        />
      </div>

      {/* Profile Info */}
      <div className="fb-profile-info">
        <h1 className="fb-profile-name">
          {t.hero.name}
          <span className="fb-online-dot" title="Online Now" />
        </h1>
        <p className="fb-profile-role">{t.hero.role}</p>
        <p className="fb-profile-subtitle">{t.hero.subtitle}</p>

        <div className="fb-profile-actions">
          <a
            href="https://www.facebook.com/bigdaddyballbuu2002"
            target="_blank"
            rel="noopener noreferrer"
            className="fb-btn fb-btn-primary"
            style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}
          >
            {t.hero.addFriend}
          </a>
          <button className="fb-btn" onClick={() => alert(t.hero.pokeAlert)}>
            {t.hero.poke}
          </button>
          <a
            href="https://thanakritportfolio.carrd.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="fb-btn fb-btn-blue"
            style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}
          >
            {t.hero.viewProjects}
          </a>
          <a href="/Thanakrit-RESUME.pdf" download className="fb-btn">
            {t.hero.downloadResume}
          </a>
        </div>
      </div>
    </div>
  );
}
