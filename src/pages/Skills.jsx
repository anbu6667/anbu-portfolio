export default function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Development",
      description: "The core front-end, back-end, and database technologies in my full stack path.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      number: "02",
      title: "Design",
      description: "The creative skills I use to shape clear, engaging interfaces.",
      skills: ["UI/UX Design", "Figma", "Canva", "Graphic Design"]
    },
    {
      number: "03",
      title: "Professional",
      description: "The habits that help me collaborate, learn, and solve problems well.",
      skills: ["Communication", "Teamwork", "Problem Solving", "Creativity", "Time Management", "Adaptability"]
    }
  ];

  return (
    <main className="skills-page">
      <div className="skills-content">
        <header className="skills-header">
          <p className="skills-kicker">What I bring</p>
          <h1 className="skills-title">Skills that connect design, code, and people.</h1>
          <p className="skills-intro">
            I combine technical knowledge with visual thinking and collaborative habits
            to create digital work that is useful, polished, and easy to use.
          </p>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section className="skill-card" key={group.title}>
              <p className="skill-number">{group.number}</p>
              <h2 className="card-title">{group.title}</h2>
              <p className="skill-description">{group.description}</p>
              <ul className="card-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
