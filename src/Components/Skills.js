const Skills = () => {

  const skills = [
    "C","C++","Java","Python","HTML","CSS","JavaScript","Solidity",
    "MySQL","MongoDB","PostgreSQL","Neo4j",
    "AWS","FireBase","NodeJS","Python ML Libraries","Shell Script"
  ]
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>  Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;