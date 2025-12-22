function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
    },
  ];

  return (
    <div className="page-content skills-page">
      <section className="section">
        <h1>Skills & Technologies</h1>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
