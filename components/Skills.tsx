"use client";

import { useLanguage } from "@/i18n";

const skillCategories = [
  {
    key: "frontend" as const,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Framer Motion", "Flutter", "Dart"],
  },
  {
    key: "backend" as const,
    skills: ["Node.js", "Python", "Vite", "REST API", "Google Apps Script", "Google Gemini API"],
  },
  {
    key: "database" as const,
    skills: ["Supabase", "PostgreSQL", "Firebase", "Google Sheets API", "MySQL"],
  },
  {
    key: "tools" as const,
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Vercel", "Postman", "npm", "Bun"],
  },
  {
    key: "itsupport" as const,
    skills: ["Windows", "macOS", "Linux", "Active Directory", "Networking", "TCP/IP", "VPN", "Hardware Troubleshooting", "Printer Setup", "Remote Desktop"],
  },
  {
    key: "automation" as const,
    skills: ["Make.com", "n8n", "Google Apps Script"],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <div id="skills" className="fb-box">
      <div className="fb-box-header">
        <h2>💻 {t.skills.title}</h2>
      </div>
      <div className="fb-box-body">
        {skillCategories.map((category) => (
          <div className="fb-skill-category" key={category.key}>
            <div className="fb-skill-category-title">{t.skills[category.key]}</div>
            <div className="fb-skill-list">
              {category.skills.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
