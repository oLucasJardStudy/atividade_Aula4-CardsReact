import './App.css'
import { Card } from './components/Card' 

export default function App() {
  const meuPerfil = {
    name: "Lucas Jardim Rocha",
    github: "https://github.com/oLucasJardStudy",
    time: "Central do Mentor - Desenvolvimento Web - 2025",
    photo: "/fotos/Lucas.png"
  };

  const colegas = [
    {
      name: "Rafael Silva",
      github: "https://github.com/",
      time: "Central do Mentor - Desenvolvimento Web - 2025",
      photo: "/fotos/Rafael.png"
    },
    {
      name: "Caua Evaristo",
      github: "https://github.com/",
      time: "Central do Mentor - Desenvolvimento Web - 2025",
      photo: "/fotos/Caua.png"
    },
  ];

  const colegasOrdenados = colegas.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <header>
        <h1>Projeto React Cards</h1>
        <p>Participantes do Grupo PEI:</p>
      </header>
      <div className="container">
        <div className="cards-list">
          <Card
            name={meuPerfil.name}
            github={meuPerfil.github}
            time={meuPerfil.time}
            photo={meuPerfil.photo}
          />
          {
            colegasOrdenados.map(colega => (
              <Card
                key={colega.name}
                name={colega.name}
                github={colega.github}
                time={colega.time}
                photo={colega.photo}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}