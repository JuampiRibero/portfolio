import { useContext } from "react";
import { LanguageContext } from "../context/language";
import tenisLab from "../../src/assets/images/tenislab.png";
import biciTienda from "../../src/assets/images/bicitienda.png";
import petricorAmor from "../../src/assets/images/petricoramor.png";
import barricas from "../../src/assets/images/barricas.png";
import pasaporteEnMano from "../../src/assets/images/pasaporte-en-mano.png";
import lifeArtCo from "../../src/assets/images/life-art-co.png";
import tresEnRaya from "../../src/assets/images/tres-en-raya.png";
import buscadorDePeliculas from "../../src/assets/images/buscador-de-peliculas.png";
import acmeDashboard from "../../src/assets/images/acme-dashboard.png";
import productAdmin from "../../src/assets/images/product-admin.png";
import comingSoon from "../../src/assets/images/coming-soon.png";

const Projects = () => {
  const { isEnglish } = useContext(LanguageContext);

  const projects = [
    {
      id: 1,
      name: "TenisLab",
      stack: "HTML, CSS, SASS, Bootstrap",
      description: isEnglish ? "My first website for a fictional tennis and paddle-themed store. It features a responsive design following the mobile-first methodology. Technologies used: HTML, CSS, SASS, Bootstrap." : "Mi primer sitio web para una tienda ficticia con temática de tenis y pádel. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, SASS, Bootstrap.",
      projectImgSrc: tenisLab,
      alt: isEnglish ? "Image showing the website homepage" : "Imagen mostrando el inicio del sitio web",
      title: isEnglish ? "Preview of the website" : "Vista previa del sitio web",
      gitHubLink: "https://github.com/JuampiRibero/tenislab",
      deployLink: "https://juampiribero.github.io/tenislab/",
    },
    {
      id: 2,
      name: "BiciTienda",
      stack: "HTML, CSS, Bootstrap, JavaScript, jQuery",
      description: isEnglish ? "My first landing page for a fictional bicycle-themed store. It features a responsive design following the mobile-first methodology. Technologies used: HTML, CSS, Bootstrap, JavaScript, jQuery.": "Mi primera página landing para una tienda ficticia con temática de bicicletas. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript, jQuery.",
      projectImgSrc: biciTienda,
      alt: isEnglish ? "Image showing the landing page start" : "Imagen mostrando el inicio de la página landing",
      title: isEnglish ? "Preview of the landing page" : "Vista previa de la página landing",
      gitHubLink: "https://github.com/JuampiRibero/bicitienda",
      deployLink: "https://juampiribero.github.io/bicitienda/",
    },
    {
      id: 3,
      name: "Petricor Amor",
      stack: "HTML, CSS, Bootstrap, JavaScript",
      description: isEnglish ? "Website for a holistic-themed store. It was my first independent project, working in collaboration with a UX/UI designer. It features a responsive design following the mobile-first methodology. Technologies used: HTML, CSS, Bootstrap, JavaScript." : "Sitio web para una tienda con temática holística. Fue mi primer proyecto independiente, trabajando en conjunto a una diseñadora UX/UI. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript.",
      projectImgSrc: petricorAmor,
      alt: isEnglish ? "Image showing the website homepage" : "Imagen mostrando el inicio del sitio web",
      title: isEnglish ? "Preview of the website" : "Vista previa del sitio web",
      gitHubLink: "https://github.com/JuampiRibero/petricoramor",
      deployLink: "https://juampiribero.github.io/petricoramor/",
    },
    {
      id: 4,
      name: "Barricas",
      stack: "HTML, CSS, Bootstrap, React, Firebase",
      description: isEnglish ? "Single Page Application (SPA) for a fictional wine-themed store. It features a responsive design following the mobile-first methodology. Technologies used: HTML, CSS, Bootstrap, React, Firebase." : "SPA para una tienda ficticia con temática de vinos. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, Bootstrap, React, Firebase.",
      projectImgSrc: barricas,
      alt: isEnglish ? "Image showing the start of the SPA" : "Imagen mostrando el inicio de la SPA",
      title: isEnglish ? "Preview of the SPA" : "Vista previa de la SPA",
      gitHubLink: "https://github.com/JuampiRibero/barricas",
      deployLink: "https://juampiribero.github.io/barricas/",
    },
    {
      id: 5,
      name: "Pasaporte en Mano",
      stack: "HTML, CSS, Bootstrap, Python, Django",
      description: isEnglish ? "Single Page Application (SPA) for a fictional travel-themed blog made in Python with Django. It includes user login, new user registration, and CRUD operations for blog posts. Technologies used: HTML, CSS, Bootstrap, Python, Django." : "SPA de blog ficticio con temática de viajes realizada en Python con Django. Cuenta con inicio de sesión, registros de nuevos usuarios, CRUD de posteos. Tecnologías utilizadas: HTML, CSS, Bootstrap, Python, Django.",
      projectImgSrc: pasaporteEnMano,
      alt: isEnglish ? "Image showing the start of the SPA" : "Imagen mostrando el inicio de la SPA",
      title: isEnglish ? "Preview of the SPA" : "Vista previa de la SPA",
      gitHubLink: "https://github.com/JuampiRibero/python-coderhouse",
      deployLink: "https://drive.google.com/file/d/1TiGGiCe3nqsZsI6yj3Mb5LqXcNjF-S5s/view",
    },
    {
      id: 6,
      name: "Life Art Co",
      stack: "HTML, CSS, SASS, Bootstrap, React",
      description: isEnglish ? "Single Page Application (SPA) for a company providing coaching and consulting services. This was my second independent project, working together with a frontend developer. It features a responsive design following the mobile-first methodology. Technologies used: HTML, CSS, SASS, Bootstrap, React." : "SPA para una empresa que brinda servicios de coaching y consultoría. Este fue mi segundo proyecto independiente, trabajando en conjunto a una desarrolladora frontend. Tiene un diseño responsivo, siguiendo la metodología mobile first. Tecnologías utilizadas: HTML, CSS, SASS, Bootstrap, React.",
      projectImgSrc: lifeArtCo,
      alt: isEnglish ? "Image showing the start of the SPA" : "Imagen mostrando el inicio de la SPA",
      title: isEnglish ? "Preview of the SPA" : "Vista previa de la SPA",
      gitHubLink: "https://github.com/JuampiRibero/lifeartco",
      deployLink: "https://lifeartco.netlify.app/",
    },
    {
      id: 7,
      name: isEnglish ? "Tic-Tac-Toe" : "Tren en Raya",
      stack: "HTML, CSS, JavaScript, React, Vite",
      description: isEnglish ? "Tic-tac-toe game application, using useState and useEffect hooks. Technologies used: HTML, CSS, JavaScript, React, Vite." : "Aplicación del juego Tres en Raya, haciendo uso de los hooks useState y useEffect. Tecnologías utilizadas: HTML, CSS, JavaScript, React, Vite.",
      projectImgSrc: tresEnRaya,
      alt: isEnglish ? "Image showing the application" : "Imagen mostrando la aplicación",
      title: isEnglish ? "Preview of the application" : "Vista previa de la aplicación",
      gitHubLink: "https://github.com/JuampiRibero/tic-tac-toe",
      deployLink: "https://tresenrayaneon.netlify.app/",
    },
    {
      id: 8,
      name: isEnglish ? "Movie Searcher" : "Buscador de Películas",
      stack: "HTML, CSS, JavaScript, React, Vite",
      description: isEnglish ? "Movie search application using the OMDb API, utilizing the useState, useEffect, useMemo, useRef, and useCallback hooks. Technologies used: HTML, CSS, JavaScript, React, Vite." : "Aplicación para buscar películas utilizando la API de OMDb, haciendo uso de los hooks useState, useEffect, useMemo, useRef y useCallback. Tecnologías utilizadas: HTML, CSS, JavaScript, React, Vite",
      projectImgSrc: buscadorDePeliculas,
      alt: isEnglish ? "Image showing the application" : "Imagen mostrando la aplicación",
      title: isEnglish ? "Preview of the application" : "Vista previa de la aplicación",
      gitHubLink: "https://github.com/JuampiRibero/buscador-de-peliculas",
      deployLink: "https://appbuscadorpeliculas.netlify.app/",
    },
    {
      id: 9,
      name: "Acme Dashboard",
      stack: "React, Next.js, Tailwind CSS",
      description: isEnglish ? "Web application with Next.js 14 using the Acme project template. Pre-designed components were used with Next.js conventions and patterns. We connected the logic and data of the web application to bring it to life and provide a full demonstration." : "Aplicación web con Next.js 14 utilizando la plantilla del proyecto Acme. Se han usado componentes prediseñados con las convenciones y patrones de Next.js. Conectamos la lógica y los datos de la aplicación web para darle vida y hacer una demostración completa.",
      projectImgSrc: acmeDashboard,
      alt: isEnglish ? "Image showing the application" : "Imagen mostrando la aplicación",
      title: isEnglish ? "Preview of the application" : "Vista previa de la aplicación",
      gitHubLink: "https://github.com/JuampiRibero/nextjs-dashboard",
      deployLink: "https://nextjs-acme-dashboard-learn.vercel.app/",
    },
    {
      id: 10,
      name: isEnglish ? "Product Admin" : "Administrador de Productos",
      stack: "React, Next.js, Tailwind CSS, Firebase",
      description: isEnglish ? "Web application for managing products made with Next.js 14, Tailwind CSS and Firebase Services." : "Aplicación web para la gestión de productos hecha con Next.js 14, Tailwind CSS y Servicios de Firebase.",
      projectImgSrc: productAdmin,
      alt: isEnglish ? "Image showing the application" : "Imagen mostrando la aplicación",
      title: isEnglish ? "Preview of the application" : "Vista previa de la aplicación",
      gitHubLink: "https://github.com/JuampiRibero/nextjs-product-admin",
      deployLink: "https://nextjs-product-admin-jp.vercel.app/",
    },
    {
      id: 11,
      name: "Lic. María Eugenia Mazzoni",
      stack: "HTML, CSS, Bootstrap, JavaScript, React, Vite",
      description: isEnglish ? "Single Page Application (SPA) for a healthcare professional offering health care services. This is an independent project I am currently working on. Technologies used: HTML, CSS, Bootstrap, JavaScript, React, Vite." : "SPA para una profesional que brinda servicios de cuidados de la salud. Este es un proyecto independiente, en el cual me encuentro actualmente trabajando. Tecnologías utilizadas: HTML, CSS, Bootstrap, JavaScript, React, Vite.",
      projectImgSrc: comingSoon,
      alt: isEnglish ? "Image showing the 'coming soon' message" : "Imagen mostrando la leyenda de coming soon",
      title: isEnglish ? "Coming soon image" : "Imagen de coming soon",
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
        {isEnglish ? "PORTFOLIO" : "PORTAFOLIO"}
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
                  {isEnglish ? "Explore" : "Explorar"}
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
