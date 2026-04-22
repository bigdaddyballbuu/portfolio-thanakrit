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
          <button className="fb-btn fb-btn-primary">
            {t.hero.addFriend}
          </button>
          <button className="fb-btn" onClick={() => alert(t.hero.pokeAlert)}>
            {t.hero.poke}
          </button>
          <button
            className="fb-btn fb-btn-blue"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.viewProjects}
          </button>
          <a href="/Thanakrit-RESUME.pdf" download className="fb-btn">
            {t.hero.downloadResume}
          </a>
        </div>
      </div>
    </div>
  );
}
