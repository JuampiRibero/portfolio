import tenisLab from "../assets/img/tenislab.png";
import biciTienda from "../assets/img/bicitienda.png";
import petricorAmor from "../assets/img/petricoramor.png";
import barricas from "../assets/img/barricas.png";
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectImgSrc: projectImg,
      gitHubLink: "https://github.com/",
      deployLink: "https://github.com/",
    },
    {
      id: 6,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectImgSrc: projectImg,
      gitHubLink: "https://github.com/",
      deployLink: "https://github.com/",
    },
    {
      id: 7,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectImgSrc: projectImg,
      gitHubLink: "https://github.com/",
      deployLink: "https://github.com/",
    },
    {
      id: 8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectImgSrc: projectImg,
      gitHubLink: "https://github.com/",
      deployLink: "https://github.com/",
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
              <p className="text-white">{item.description}</p>
              <div className="flex">
                <a
                  className="text-personal-gray"
                  href={item.gitHubLink}
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  className="text-personal-gray ml-4"
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
