"use client";

import { useLanguage } from "@/i18n";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: "3+", label: t.stats.projectsBuilt },
    { value: "10+", label: t.stats.technologies },
    { value: "1+", label: t.stats.yearsExperience },
  ];

  return (
    <div className="fb-box">
      <div className="fb-box-header">
        <h2>📊 {t.stats.title}</h2>
      </div>
      <div className="fb-stats-row">
        {stats.map((stat, idx) => (
          <div className="fb-stat" key={idx}>
            <div className="fb-stat-value">{stat.value}</div>
            <div className="fb-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
