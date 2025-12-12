export default function Skills() {
  const techSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "C", "Java"
  ];

  const designSkills = [
    "UI/UX Design", "Canva", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Graphics Design"
  ];

  const softSkills = [
    "Communication", "Teamwork", "Problem Solving", "Creativity", "Time Management", "Adaptability"
  ];

  return (
    <main className="page-center">
      <div className="page-content">
        <h1 className="page-title">Skills</h1>

        <div className="skills-grid">

          {/* Tech Skills Card */}
          <div className="skill-card">
            <h2 className="card-title">Tech Skills</h2>
            <ul className="card-list">
              {techSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Designing Skills Card */}
          <div className="skill-card">
            <h2 className="card-title">Designing Skills</h2>
            <ul className="card-list">
              {designSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Soft Skills Card */}
          <div className="skill-card">
            <h2 className="card-title">Soft Skills</h2>
            <ul className="card-list">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
