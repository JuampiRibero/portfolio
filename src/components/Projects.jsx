import tenisLab from "../assets/img/tenislab.png";
import biciTienda from "../assets/img/bicitienda.png";
import petricorAmor from "../assets/img/petricoramor.png";
import barricas from "../assets/img/barricas.png";
import pasaporteEnMano from "../assets/img/pasaporte-en-mano.png";
import lifeArtCo from "../assets/img/life-art-co.png";
import tresEnRaya from "../assets/img/tres-en-raya.png";
import buscadorDePeliculas from "../assets/img/buscador-de-peliculas.png";
import comingSoon from "../assets/img/coming-soon.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "TenisLab",
      stack: "HTML, CSS, SASS, Bootstrap",
      description:
        "Mi primer sitio web para una tienda ficticia con temática de tenis y pádel. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, SASS, Bootstrap.",
      projectImgSrc: tenisLab,
      alt: "Imagen mostrando el inicio del sitio web",
      title: "Vista previa del sitio web",
      gitHubLink: "https://github.com/JuampiRibero/tenislab",
      deployLink: "https://juampiribero.github.io/tenislab/",
    },
    {
      id: 2,
      name: "BiciTienda",
      stack: "HTML, CSS, Bootstrap, JavaScript, jQuery",
      description:
        "Mi primera página landing para una tienda ficticia con temática de bicicletas. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript, jQuery.",
      projectImgSrc: biciTienda,
      alt: "Imagen mostrando el inicio de la página landing",
      title: "Vista previa de la página landing",
      gitHubLink: "https://github.com/JuampiRibero/bicitienda",
      deployLink: "https://juampiribero.github.io/bicitienda/",
    },
    {
      id: 3,
      name: "Petricor Amor",
      stack: "HTML, CSS, Bootstrap, JavaScript",
      description:
        "Sitio web para una tienda con temática holística. Fue mi primer proyecto independiente, trabajando en conjunto a una diseñadora UX/UI. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript.",
      projectImgSrc: petricorAmor,
      alt: "Imagen mostrando el inicio del sitio web",
      title: "Vista previa del sitio web",
      gitHubLink: "https://github.com/JuampiRibero/petricoramor",
      deployLink: "https://juampiribero.github.io/petricoramor/",
    },
    {
      id: 4,
      name: "Barricas",
      stack: "HTML, CSS, Bootstrap, React, Firebase",
      description:
        "SPA para una tienda ficticia con temática de vinos. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, React, Firebase.",
      projectImgSrc: barricas,
      alt: "Imagen mostrando el inicio de la SPA",
      title: "Vista previa del sitio web",
      gitHubLink: "https://github.com/JuampiRibero/barricas",
      deployLink: "https://juampiribero.github.io/barricas/",
    },
    {
      id: 5,
      name: "Pasaporte en Mano",
      stack: "HTML, CSS, Bootstrap, Python, Django",
      description:
        "SPA de blog ficticio con temática de viajes realizada en Python con Django. Cuenta con inicio de sesión, registros de nuevos usuarios, CRUD de posteos. Tecnologías utilizadas: HTML, CSS, Bootstrap, Python, Django.",
      projectImgSrc: pasaporteEnMano,
      alt: "Imagen mostrando el inicio de la SPA",
      title: "Vista previa de la SPA",
      gitHubLink: "https://github.com/JuampiRibero/python-coderhouse",
      deployLink:
        "https://drive.google.com/file/d/1TiGGiCe3nqsZsI6yj3Mb5LqXcNjF-S5s/view",
    },
    {
      id: 6,
      name: "Life Art Co",
      stack: "HTML, CSS, SASS, Bootstrap, React",
      description:
        "SPA para una empresa que brinda servicios de coaching y consultoría. Este fue mi segundo proyecto independiente, trabajando en conjunto a una desarrolladora frontend. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, SASS, Bootstrap, React.",
      projectImgSrc: lifeArtCo,
      alt: "Imagen mostrando el inicio de la SPA",
      title: "Vista previa de la SPA",
      gitHubLink: "https://github.com/JuampiRibero/lifeartco",
      deployLink: "https://lifeartco.netlify.app/",
    },
    {
      id: 7,
      name: "Tren en Raya",
      stack: "HTML, CSS, JavaScript, React, Vite",
      description:
        "Aplicación del juego Tres en Raya, haciendo uso de los hooks useState y useEffect. Tecnologías utilizadas: HTML, CSS, JavaScript, React, Vite.",
      projectImgSrc: tresEnRaya,
      alt: "Imagen mostrando la aplicación",
      title: "Vista previa de la aplicación",
      gitHubLink: "https://github.com/JuampiRibero/tic-tac-toe",
      deployLink: "https://tresenrayaneon.netlify.app/",
    },
    {
      id: 8,
      name: "Buscador de Películas",
      stack: "HTML, CSS, JavaScript, React, Vite",
      description:
        "Aplicación para buscar películas utilizando la API de OMDb, haciendo uso de los hooks useState, useEffect, useMemo, useRef y useCallback. Tecnologías utilizadas: HTML, CSS, JavaScript, React, Vite",
      projectImgSrc: buscadorDePeliculas,
      alt: "Imagen mostrando la aplicación",
      title: "Vista previa de la aplicación",
      gitHubLink: "https://github.com/JuampiRibero/buscador-de-peliculas",
      deployLink: "https://appbuscadorpeliculas.netlify.app/",
    },
    {
      id: 9,
      name: "Lic. María Eugenia Mazzoni",
      stack: "HTML, CSS, Bootstrap, JavaScript, React, Vite",
      description:
        "SPA para una profesional que brinda servicios de cuidados de la salud. Este es un proyecto independiente, en el cual me encuentro actualemente trabajando. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript, React, Vite.",
      projectImgSrc: comingSoon,
      alt: "Imagen mostrando la leyenda de coming soon",
      title: "Imagen de coming soon",
      gitHubLink: "https://github.com/JuampiRibero/mem-web-site",
      deployLink: "",
    },
  ];

  return (
    <div id="PORTFOLIO" className="flex items-center flex-col px-12 py-10">
      <h2
        className="relative sm:text-7xl text-5xl text-bold mb-10 text-center text-gray-500 font-bebas-neue tracking-widest title title--width295"
        data-aos="fade-right"
      >
        PORTFOLIO
      </h2>
      <div className="gap-4 grid lg:grid-cols-3 sm:grid-cols-1 font-roboto">
        {projects.map((item) => (
          <div
            key={item.id}
            className="relative w-[300px] h-[300px] border-none border p-2 bg-black rounded-xl"
            data-aos="zoom-in"
          >
            <img
              className="object-cover rounded-xl"
              src={item.projectImgSrc}
              alt={item.alt}
              title={item.title}
            />
            <h1 className="text-2xl text-center text-personal-gray py-6">
              {item.name}
            </h1>
            <h2 className="text-personal-gray text-center">{item.stack}</h2>
            <span className="flex flex-col p-4 absolute rounded-xl hover:bg-black/50 backdrop-blur-sm inset-0 align-top text-justify opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-personal-gray text-pretty">
                {item.description}
              </p>
              <div className="flex justify-center my-8">
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
                  Explorar
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
