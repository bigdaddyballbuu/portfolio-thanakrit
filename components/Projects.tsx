"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n";

interface ProjectData {
  title: string;
  description: string;
  tech: readonly string[];
  github: string;
  website?: string;
  images: string[];
  emoji: string;
}

export default function Projects() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const projects: ProjectData[] = [
    {
      ...t.projects.project4,
      github: "https://github.com/bigdaddyballbuu/SENd-Website",
      website: "https://www.sendgooddelivery.com/",
      images: [
        "/projects/project4_1.png",
        "/projects/project4_2.png",
        "/projects/project4_3.png",
        "/projects/project4_4.png",
      ],
      emoji: "🛵",
    },
    {
      ...t.projects.project1,
      github: "https://github.com/portgesus/send-stock-tracker",
      images: [
        "/projects/project1_1.png",
        "/projects/project1_2.png",
        "/projects/project1_3.png",
        "/projects/project1_4.png",

      ],
      emoji: "📊",
    },
    {
      ...t.projects.project2,
      github: "https://github.com/bigdaddyballbuu/phornsanun-incenseshop",
      images: [
        "/projects/project2_1.png",
        "/projects/project2_2.png",
        "/projects/project2_3.png",
        "/projects/project2_4.png",
      ],
      emoji: "📿",
    },
    {
      ...t.projects.project3,
      github: "",
      images: [
        "/projects/project3_1.jpg",
        "/projects/project3_2.jpg",
        "/projects/project3_3.jpg",
        "/projects/project3_4.jpg",

      ],
      emoji: "🖥️",
    },
  ];

  return (
    <>
      <div id="projects" className="fb-box">
        <div className="fb-box-header">
          <h2>📁 {t.projects.title}</h2>
        </div>

        {/* Wall Input Box */}
        <div className="fb-wall-input">
          <div className="fb-wall-input-avatar">👨‍💻</div>
          <input
            type="text"
            className="fb-wall-input-field"
            placeholder={t.projects.wallPlaceholder}
            readOnly
          />
        </div>

        {/* Wall Posts */}
        <div style={{ padding: 0 }}>
          {projects.map((project, idx) => (
            <div className="fb-wall-post" key={idx}>
              <div className="fb-wall-post-header">
                <div className="fb-wall-post-avatar">{project.emoji}</div>
                <div>
                  <span className="fb-wall-post-author">Thanakrit</span>
                  <span className="fb-wall-post-meta"> {t.projects.sharedProject}</span>
                  <div className="fb-wall-post-meta">{t.projects.justNow}</div>
                </div>
              </div>

              <div className="fb-wall-post-content">
                <strong>{project.title}</strong>
                <br />
                {project.description}
              </div>

              {/* Image Carousel */}
              <ImageCarousel
                images={project.images}
                onClickImage={(imgIdx) => setLightbox({ images: project.images, index: imgIdx })}
              />

              <div className="fb-wall-post-tags">
                {project.tech.map((tech) => (
                  <span className="fb-tag" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="fb-wall-post-actions">
                <span className="fb-action-btn">{t.projects.like}</span>
                <span className="fb-action-btn">{t.projects.comment}</span>
                <span className="fb-action-btn">{t.projects.share}</span>
                <span style={{ color: "#999" }}>·</span>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {t.projects.viewCode}
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    🔗 {t.projects.liveDemo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {lightbox && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setLightbox(null)}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "fixed", top: 16, right: 20,
                background: "none", border: "none", color: "#fff",
                fontSize: 32, cursor: "pointer", zIndex: 10001,
              }}
            >
              ✕
            </button>

            {/* Left Arrow */}
            {lightbox.index > 0 && (
              <button
                onClick={() => setLightbox({ ...lightbox, index: lightbox.index - 1 })}
                style={{
                  position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
                  fontSize: 24, padding: "16px 14px", cursor: "pointer",
                  borderRadius: 4, zIndex: 10001,
                }}
              >
                ◀
              </button>
            )}

            {/* Image */}
            <img
              src={lightbox.images[lightbox.index]}
              alt=""
              style={{
                maxWidth: "85vw", maxHeight: "80vh",
                objectFit: "contain", borderRadius: 4,
              }}
            />

            {/* Right Arrow */}
            {lightbox.index < lightbox.images.length - 1 && (
              <button
                onClick={() => setLightbox({ ...lightbox, index: lightbox.index + 1 })}
                style={{
                  position: "fixed", right: 16, top: "50%", transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
                  fontSize: 24, padding: "16px 14px", cursor: "pointer",
                  borderRadius: 4, zIndex: 10001,
                }}
              >
                ▶
              </button>
            )}

            {/* Counter */}
            <div
              style={{
                position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
                color: "#fff", fontSize: 15, background: "rgba(0,0,0,0.5)",
                padding: "6px 16px", borderRadius: 20, zIndex: 10001,
              }}
            >
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* State-based Carousel — shows 1 image at a time */
function ImageCarousel({ images, onClickImage }: { images: string[]; onClickImage: (idx: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasAnyImage, setHasAnyImage] = useState(true);

  if (!hasAnyImage) return null;

  return (
    <div style={{ position: "relative", marginBottom: 12 }}>
      {/* Current Image */}
      <div
        onClick={() => onClickImage(current)}
        style={{
          width: "100%",
          height: 280,
          overflow: "hidden",
          border: "1px solid #ddd",
          background: "#f0f0f0",
          cursor: "pointer",
        }}
      >
        <img
          src={images[current]}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onLoad={() => setLoadedCount((c) => c + 1)}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            if (current === 0) setHasAnyImage(false);
          }}
        />
      </div>

      {/* Left Arrow */}
      {current > 0 && (
        <button
          onClick={() => setCurrent(current - 1)}
          style={{
            position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
            width: 36, height: 36, borderRadius: "50%",
            border: "1px solid #ccc", background: "rgba(255,255,255,0.9)",
            color: "#333", fontSize: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}
        >
          ◀
        </button>
      )}

      {/* Right Arrow */}
      {current < images.length - 1 && (
        <button
          onClick={() => setCurrent(current + 1)}
          style={{
            position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
            width: 36, height: 36, borderRadius: "50%",
            border: "1px solid #ccc", background: "rgba(255,255,255,0.9)",
            color: "#333", fontSize: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}
        >
          ▶
        </button>
      )}

      {/* Counter dots */}
      {images.length > 1 && (
        <div
          style={{
            position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 6, background: "rgba(0,0,0,0.4)",
            padding: "4px 10px", borderRadius: 12,
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
