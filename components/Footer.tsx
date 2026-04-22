"use client";

import { useLanguage } from "@/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="fb-footer">
      <div className="fb-footer-links">
        <a href="#">About</a>
        <a href="#">Developers</a>
        <a href="#">Careers</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Help</a>
      </div>
      <p>
        {t.footer.builtWith} ❤️ & Next.js · © {year} Thanakrit Chaiyasim. {t.footer.rights}
      </p>
    </footer>
  );
}
