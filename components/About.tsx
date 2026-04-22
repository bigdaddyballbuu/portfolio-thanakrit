"use client";

import { useLanguage } from "@/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <div id="about" className="fb-box">
      <div className="fb-box-header">
        <h2>ℹ️ {t.about.title}</h2>
      </div>
      <div className="fb-box-body">
        <p style={{ marginBottom: 10 }}>{t.about.description}</p>

        <div className="fb-info-row">
          <span className="fb-info-label">🎓 {t.about.education}:</span>
          <span className="fb-info-value">{t.about.educationDetail}</span>
        </div>
        <div className="fb-info-row">
          <span className="fb-info-label">💼 {t.about.coop}:</span>
          <span className="fb-info-value">{t.about.coopDetail}</span>
        </div>
      </div>
    </div>
  );
}
