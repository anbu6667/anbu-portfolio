import React, { useState } from "react";

const projects = [
  {
    title: "Campus Connect",
    description:
      "A platform that allows students within a college campus to share, borrow, and lend items easily, promoting resource saving and community collaboration.",
  },
  {
    title: "Open AI for Braille Candidates",
    description:
      "An OpenAI-powered platform designed to assist braille and visually impaired students with accessible academic support.",
  },
  {
    title: "Book Recommendation System",
    description:
      "A recommendation engine that suggests books based on user interests, preferences, and reading patterns.",
  },
  {
    title: "Proximity Activated Braking System",
    description:
      "An IoT and sensor-based safety system that automatically triggers braking when obstacles are detected.",
  },
  {
    title: "Travel Planner",
    description:
      "A smart planner that helps users organize trips with optimized routes, budget planning, and suggestions.",
  },
];

export default function Projects() {
  const top = projects.slice(0, 3);
  const bottom = projects.slice(3);

  const [visible, setVisible] = useState(() => projects.map(() => false));

  function toggle(idx) {
    setVisible((prev) => {
      const next = prev.slice();
      next[idx] = !next[idx];
      return next;
    });
  }

  return (
    <main className="projects-section">
      <div className="page-content">
        <h2 className="page-title" style={{ textAlign: "center" }}>My Projects</h2>
        <div className="projects-row top" role="list">
          {top.map((p, i) => {
            const idx = i;
            return (
              <article className="project-card" key={p.title} role="listitem">
                <div className="project-thumb" aria-hidden="true" />
                <h3 className="project-title">{p.title}</h3>
                <button className="project-btn" onClick={() => toggle(idx)} aria-expanded={visible[idx]}>
                  {visible[idx] ? "Hide description" : "View description"}
                </button>
                {visible[idx] && <p className="project-description">{p.description}</p>}
              </article>
            );
          })}
        </div>

        {bottom.length > 0 && (
          <div className="projects-row bottom" role="list">
            {bottom.map((p, i) => {
              const idx = top.length + i;
              return (
                <article className="project-card" key={p.title} role="listitem">
                  <div className="project-thumb" aria-hidden="true" />
                  <h3 className="project-title">{p.title}</h3>
                  <button className="project-btn" onClick={() => toggle(idx)} aria-expanded={visible[idx]}>
                    {visible[idx] ? "Hide description" : "View description"}
                  </button>
                  {visible[idx] && <p className="project-description">{p.description}</p>}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
