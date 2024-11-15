import { useContext } from "react";
import { LanguageContext } from "../context/language";
import imgDeveloper from "../../src/assets/images/developer.png";
import CurriculumVitaeEs from "../../src/assets/cv/cv-es.pdf";
import CurriculumVitaeEn from "../../src/assets/cv/cv-en.pdf";

const About = () => {
  const { isEnglish } = useContext(LanguageContext);
  const getCVFile = () => {
    if (isEnglish) {
      return CurriculumVitaeEn;
    } else {
      return CurriculumVitaeEs;
    }
  };

  return (
    <div
      id={isEnglish ? "ABOUT ME" : "SOBRE MI"}
      className="py-10 md:px-12 px-10 text-gray-500"
    >
      <div className="flex justify-center object-cover">
        <h2
          className="relative sm:text-7xl text-5xl text-bold mb-10 text-center font-bebas-neue tracking-widest title"
          data-aos="fade-right"
        >
          <span>{isEnglish ? "ABOUT" : "SOBRE"}</span>
          {isEnglish ? " ME" : " MI"}
        </h2>
      </div>
      <div
        className="mx-auto max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none shadow-2xl shadow-gray-500 items-center"
        data-aos="fade-up"
      >
        <div
          className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"
          data-aos="zoom-in-right"
        >
          <div className="rounded-3xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
            <div className="mx-auto">
              <img
                src={imgDeveloper}
                alt={
                  isEnglish
                    ? "Smiling image of Juan Pablo Ribero Mazzoni"
                    : "Imagen sonriendo de Juan Pablo Ribero Mazzoni"
                }
                title={
                  isEnglish
                    ? "Image of Juan Pablo Ribero Mazzoni"
                    : "Imagen de Juan Pablo Ribero Mazzoni"
                }
              />
            </div>
          </div>
        </div>
        <div className="p-8 sm:p-10 lg:flex-auto font-roboto tracking-wider">
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            {isEnglish
              ? "I'm Juan Pablo Ribero Mazzoni, a guy from Córdoba, Argentina. I am a civil engineer and have worked in the construction sector, specifically in project inspection and management, for over 5 years."
              : "Soy Juan Pablo Ribero Mazzoni, un chico de Córdoba, Argentina. Soy ingeniero civil, he trabajado en el sector de la construcción, específicamente en la inspección de obras y gestión de proyectos, por más de 5 años."}
          </p>
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            {isEnglish
              ? "In 2021, I decided to make a 180° turn towards the field of information technology. Since then, I have been continuously training and have become a passionate frontend developer."
              : "En el año 2021 decidí dar un giro de 180° hacia el campo de la tecnología de la información, desde ese entonces me he estado formando de manera continua y me convertí en un apasionado desarrollador frontend."}
          </p>
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            {isEnglish
              ? "I have experience in handling HTML5, CSS3, and JavaScript, as well as working with libraries like React.js and frameworks like Next.js. I have worked on small-scale projects, implementing efficient code solutions, and working with scalable and easily maintainable software architectures."
              : "Cuento con experiencia en el manejo de HTML5, CSS3, JavaScript, además del manejo de bibliotecas como React.js y frameworks como Next.js. He trabajado en proyectos de pequeña escala, implementando soluciones de código eficientes, trabajado con arquitecturas de software escalables y fácilmente mantenibles."}
          </p>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="bg-gray-500 border-2 border-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-transparent hover:text-gray-500 hover:border-gray-500 px-16 shadow-lg shadow-gray-500"
              data-aos="zoom-out-up"
            >
              <a href={getCVFile()} download>
                CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
