import { useState } from "react";

const projects = [
  {
    title: "Campus Connect",
    type: "Community platform",
    tags: ["Web app", "Collaboration"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    imageAlt: "People collaborating around a table",
    description:
      "A platform that allows students within a college campus to share, borrow, and lend items easily, promoting resource saving and community collaboration.",
  },
  {
    title: "Open AI for Braille Candidates",
    type: "Accessible AI",
    tags: ["AI", "Accessibility"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Laptop used for accessible digital learning",
    description:
      "An OpenAI-powered platform designed to assist braille and visually impaired students with accessible academic support.",
  },
  {
    title: "Book Recommendation System",
    type: "Recommendation engine",
    tags: ["Machine learning", "Personalization"],
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Stack of books",
    description:
      "A recommendation engine that suggests books based on user interests, preferences, and reading patterns.",
  },
  {
    title: "Travel Planner",
    type: "Planning experience",
    tags: ["Routes", "Budgeting"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mountain landscape for travel planning",
    description:
      "A smart planner that helps users organize trips with optimized routes, budget planning, and suggestions.",
  },
  {
    title: "Consultancy Project",
    type: "Business solution",
    tags: ["Consulting", "Web app"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Consultants discussing a project around a table",
    description:
      "A practical digital solution created to organize consultancy workflows, client communication, and project delivery.",
  },
];

export default function Projects() {
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
        <header className="projects-header">
          <h1 className="projects-title">Ideas turned into useful experiences.</h1>
          <p className="projects-intro">
            A collection of experiments and practical products focused on people, accessibility, and smart problem-solving.
          </p>
          <div className="projects-summary" aria-label="Project summary">
            <span><strong>05</strong> projects</span>
            <span><strong>03</strong> focus areas</span>
            <span><strong>01</strong> curious builder</span>
          </div>
        </header>

        <div className="projects-grid" role="list">
          {projects.map((project, idx) => (
            <article className="project-card" key={project.title} role="listitem">
              <div className="project-card-top">
                <span className="project-number">0{idx + 1}</span>
                <span className="project-type">{project.type}</span>
              </div>
              <img className="project-media" src={project.image} alt={project.imageAlt} />
              <h2 className="project-title">{project.title}</h2>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className={`project-overview ${visible[idx] ? "is-visible" : ""}`}>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-actions">
                <button className="project-btn" onClick={() => toggle(idx)} aria-expanded={visible[idx]}>
                  {visible[idx] ? "Hide overview" : "Read overview"}
                  <span aria-hidden="true">{visible[idx] ? "−" : "+"}</span>
                </button>
                <button className="project-visit-btn" type="button" disabled title="Website link coming soon">
                  Visit website
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
