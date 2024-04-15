import tenisLab from "../assets/img/tenislab.png";
import biciTienda from "../assets/img/bicitienda.png";
import petricorAmor from "../assets/img/petricoramor.png";
import barricas from "../assets/img/barricas.png";
import pasaporteEnMano from "../assets/img/pasaporte-en-mano.png";
import lifeArtCo from "../assets/img/life-art-co.png";
import projectImg from "../assets/img/project-management-planning-development-message-box-notification-graphic.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "TenisLab",
      stack: "HTML, CSS, SASS, Bootstrap",
      description:
        "Maquetación para un sitio web de una tienda con temática de tenis y pádel. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, SASS, Bootstrap.",
      projectImgSrc: tenisLab,
      gitHubLink: "https://github.com/JuampiRibero/tenislab",
      deployLink: "https://juampiribero.github.io/tenislab/",
    },
    {
      id: 2,
      name: "BiciTienda",
      stack: "HTML, CSS, Bootstrap, JavaScript, jQuery",
      description:
        "Maquetación para un sitio web de una tienda con temática de bicicletas. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript, jQuery.",
      projectImgSrc: biciTienda,
      gitHubLink: "https://github.com/JuampiRibero/bicitienda",
      deployLink: "https://juampiribero.github.io/bicitienda/",
    },
    {
      id: 3,
      name: "Petricor Amor",
      stack: "HTML, CSS, Bootstrap, JavaScript",
      description:
        "Maquetación para un sitio web de una tienda con temática holística. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript.",
      projectImgSrc: petricorAmor,
      gitHubLink: "https://github.com/JuampiRibero/petricoramor",
      deployLink: "https://juampiribero.github.io/petricoramor/",
    },
    {
      id: 4,
      name: "Barricas",
      stack: "HTML, CSS, Bootstrap, React, Firebase",
      description:
        "SPA de una tienda con temática de vinos. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, React, Firebase.",
      projectImgSrc: barricas,
      gitHubLink: "https://github.com/JuampiRibero/barricas",
      deployLink: "https://juampiribero.github.io/barricas/",
    },
    {
      id: 5,
      name: "Pasaporte en Mano",
      stack: "HTML, CSS, Bootstrap, Python, Django",
      description:
        "SPA de una blog con temática de viajes realizada en Python con Django. Cuenta con inicio de sesión, registros de nuevos usuarios, CRUD de posteos. Tecnologías utilizadas: HTML, CSS, Bootstrap, Python, Django.",
      projectImgSrc: pasaporteEnMano,
      gitHubLink: "https://github.com/JuampiRibero/python-coderhouse",
      deployLink:
        "https://drive.google.com/file/d/1TiGGiCe3nqsZsI6yj3Mb5LqXcNjF-S5s/view",
    },
    {
      id: 6,
      name: "Life Art Co",
      stack: "HTML, CSS, SASS, Bootstrap, React",
      description:
        "SPA de una empresa que brinda servicios de coaching y consultoría. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, SASS, Bootstrap, React.",
      projectImgSrc: lifeArtCo,
      gitHubLink: "https://github.com/JuampiRibero/lifeartco",
      deployLink: "https://lifeartco.netlify.app/",
    },
  ];

  return (
    <div id="PORTFOLIO" className="flex items-center flex-col px-12 py-10">
      <h2 className="font-semibold text-[40px] text-gray-500">PORTFOLIO</h2>
      <div className="gap-4 mt-10 grid lg:grid-cols-3 sm:grid-cols-1">
        {projects.map((item) => (
          <div
            key={item.id}
            className="relative w-[300px] h-[300px] border-none border p-2 bg-black rounded-xl"
          >
            <img
              className="object-cover rounded-xl"
              src={item.projectImgSrc}
              alt=""
            />
            <h1 className="text-2xl text-center text-personal-gray py-6">
              {item.name}
            </h1>
            <h2 className="text-personal-gray text-center">{item.stack}</h2>
            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-personal-gray text-pretty">{item.description}</p>
              <div className="flex my-8">
                <a
                  className="text-personal-gray hover:underline hover:underline-offset-4 hover:border-neon-cian hover:text-neon-cian"
                  href={item.gitHubLink}
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  className="text-personal-gray ml-4 hover:underline hover:underline-offset-4 hover:border-neon-cian hover:text-neon-cian"
                  href={item.deployLink}
                  target="_blank"
                >
                  Deploy
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
