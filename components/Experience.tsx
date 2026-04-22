"use client";

import { useLanguage } from "@/i18n";

export default function Experience() {
  const { t } = useLanguage();

  const items = [
    { ...t.experience.item1, icon: "🎓" },
    { ...t.experience.item2, icon: "💼" },
  ];

  return (
    <div id="experience" className="fb-box">
      <div className="fb-box-header">
        <h2>💼 {t.experience.title}</h2>
      </div>
      <div className="fb-box-body">
        {items.map((item, idx) => (
          <div className="fb-timeline-item" key={idx}>
            <div className="fb-timeline-period">{item.icon} {item.period}</div>
            <div className="fb-timeline-title">{item.title}</div>
            <div className="fb-timeline-org">{item.org}</div>
            <div className="fb-timeline-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
