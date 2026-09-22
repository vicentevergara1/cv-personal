import './App.css';

function App() {
  const personalInfo = {
    name: "Vicente Vergara",
    title: "Desarrollador Frontend React",
    email: "vicente.vergara@email.com",
    phone: "+56 9 1234 5678",
    location: "Santiago, Chile",
    portfolio: "github.com/vicentevergara"
  };

  const experience = [
    {
      id: 1,
      role: "Desarrollador Frontend Senior",
      company: "Tech Solutions",
      date: "Enero 2022 - Presente",
      description: [
        "Desarrollo de aplicaciones web SPA utilizando React y Vite.",
        "Implementación de estado global con Redux y Context API.",
        "Mejora del rendimiento de la aplicación en un 30%."
      ]
    },
    {
      id: 2,
      role: "Desarrollador Web Junior",
      company: "Agencia Creativa",
      date: "Marzo 2019 - Diciembre 2021",
      description: [
        "Mantenimiento de sitios web creados con HTML, CSS y JavaScript.",
        "Colaboración con el equipo de diseño UI/UX.",
        "Integración de APIs RESTful."
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Ingeniería en Informática",
      institution: "Universidad Tecnológica",
      date: "2014 - 2018"
    }
  ];

  const skills = [
    "React", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS",
    "Git / GitHub", "Vite", "Node.js (Básico)", "Trabajo en equipo"
  ];

  return (
    <div className="cv-container">
      {/* HEADER */}
      <header>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <div className="contact-info">
          <p>📧 {personalInfo.email} | 📱 {personalInfo.phone}</p>
          <p>📍 {personalInfo.location} | 💻 {personalInfo.portfolio}</p>
        </div>
      </header>

      {/* PERFIL / SOBRE MI */}
      <section>
        <h3>Sobre mí</h3>
        <p>
          Desarrollador apasionado por crear interfaces de usuario atractivas y eficientes.
          Enfocado en escribir código limpio y mantenible, siempre buscando aprender
          nuevas tecnologías para mejorar la experiencia del usuario final.
        </p>
      </section>

      {/* EXPERIENCIA */}
      <section>
        <h3>Experiencia Laboral</h3>
        {experience.map(job => (
          <div key={job.id} className="job">
            <h4>{job.role} - {job.company}</h4>
            <p className="date">{job.date}</p>
            <ul>
              {job.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* EDUCACIÓN */}
      <section>
        <h3>Educación</h3>
        {education.map(edu => (
          <div key={edu.id} className="education">
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
            <p className="date">{edu.date}</p>
          </div>
        ))}
      </section>

      {/* HABILIDADES */}
      <section>
        <h3>Habilidades</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
