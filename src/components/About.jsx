import imgDeveloper from "../assets/img/developer.png";
import CurriculumVitaeEs from "../assets/cv/cv-es.pdf";

const About = () => {
  const getCVFile = () => {
    return CurriculumVitaeEs;
  };

  return (
    <div id="SOBRE MI" className="py-10 md:px-12 px-10 text-gray-500">
      <div className="flex justify-center object-cover">
        <h2
          className="relative sm:text-7xl text-5xl text-bold mb-10 text-center font-bebas-neue tracking-widest title"
          data-aos="fade-right"
        >
          <span>SOBRE</span> MI
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
                alt="Imagen sonriendo de Juan Pablo Ribero Mazzoni"
                title="Imagen de Juan Pablo Ribero Mazzoni"
              />
            </div>
          </div>
        </div>
        <div className="p-8 sm:p-10 lg:flex-auto font-roboto tracking-wider">
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            Soy Juan Pablo Ribero Mazzoni, un chico de Córdoba, Argentina. Soy
            ingeniero civil, he trabajado en el sector de la construcción,
            específicamente en la inspección de obras y gestión de proyectos,
            por más de 5 años.
          </p>
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            En el año 2021 decidí dar un giro de 180° hacia el campo de la
            tecnología de la información, desde ese entonces me he estado
            formando de manera continua y me convertí en un apasionado
            desarrollador frontend.
          </p>
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            Cuento con experiencia en el manejo de HTML, CSS, JavaScript, además
            del manejo de frameworks y liberías, especialmente React JS. He
            trabajado en proyectos de pequeña escala, implementando soluciones
            de código eficientes, trabajado con arquitecturas de software
            escalables y fácilmente mantenibles.
          </p>
          <p className="mt-6 text-justify leading-7" data-aos="zoom-in-left">
            En el año 2023 decidí emigrar a Italia para tramitar la ciudadanía
            italiana, actualmente me encuentro viviendo en Valencia, España.
          </p>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="bg-gray-500 border-2 border-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-transparent hover:text-gray-500 hover:border-gray-500 px-16 shadow-lg shadow-gray-500 animate-bounce"
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
