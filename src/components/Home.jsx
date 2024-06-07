import { useContext } from "react";
import { LanguageContext } from "../context/language";
import { Link } from "react-scroll";
import Header from "./Header";
import imgDeveloper from "../../src/assets/images/male-developer.png";

const Home = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div
      id="HOME"
      className="h-svh mb-10 bg-home bg-cover sm:gradient-mask-b-80 gradient-mask-none font-roboto tracking-widest"
    >
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-12 py-10">
        <div>
          <p className="text-white sm:text-2xl text-xl uppercase">
            {isEnglish
              ? "Hi! Welcome to my website"
              : "¡Hola! Bienvenidos a mi sitio web"}
          </p>
          <p className="text-white sm:text-5xl text-3xl font-bold py-3">
            {isEnglish ? "I'm Juan Pablo" : "Soy Juan Pablo"}
          </p>
          <div className="rotating-text-wrapper">
            <p className="text-gray-500 sm:text-5xl text-3xl font-bold underline underline-offset-8 decoration-neon-cian py-1">
              {isEnglish ? "Frontend Developer" : "Desarrollador Frontend"}
            </p>
            <p className="text-gray-500 sm:text-5xl text-3xl font-bold underline underline-offset-8 decoration-neon-cian py-1">
              {isEnglish ? "and Civil Engineer" : "e Ingeniero Civil"}
            </p>
          </div>
          <div className="flex gap-4 mt-3 mb-6">
            <button className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white hover:border-gray-500 group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-gray-500 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <Link
                to="PORTFOLIO"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
              >
                <span className="uppercase relative w-full text-left text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white">
                  {isEnglish ? "Projects" : "Proyectos"}
                </span>
              </Link>
            </button>
            <button className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white hover:border-gray-500 group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-gray-500 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <Link
                to="CONTACTO"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
              >
                <span className="uppercase relative w-full text-left text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white">
                  {isEnglish ? "Contact me" : "Contactame"}
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              src={imgDeveloper}
              alt={isEnglish ? "Cartoon of a smiling and focused developer working with a laptop" : "Caricatura de un desarrollador trabajando sonriente y concentrado con un portátil"}
              title={isEnglish ? "Cartoon of a developer working with a laptop" : "Caricatura de un desarrollador trabajando con un portátil"}
              className="h-full w-[500px] object-cover developer-animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
