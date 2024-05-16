import { Link } from "react-scroll";
import imgDeveloper from "../assets/img/male-developer.png";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-svh mb-10 bg-home bg-cover gradient-mask-b-80 font-roboto tracking-widest">
      <Header />
      <div
        id="HOME"
        className="grid grid-cols-1 md:grid-cols-2 items-center px-12 py-10 "
      >
        <div>
          <p className="text-white text-2xl uppercase">
            ¡Hola! Bienvenidos a mi sitio web
          </p>
          <p className="text-white text-5xl font-bold py-3">Soy Juan Pablo</p>
          <div className="rotating-text-wrapper">
            <p className="text-gray-500 text-5xl font-bold underline underline-offset-8 decoration-neon-cian py-1">
              Desarrollador Frontend
            </p>
            <p className="text-gray-500 text-5xl font-bold underline underline-offset-8 decoration-neon-cian py-1">
              e Ingeniero Civil
            </p>
          </div>
          <div className="flex gap-4 mt-3 mb-6">
            <button className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white hover:border-gray-500 group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-gray-500 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <Link
                to="PORTFOLIO"
                smooth={true}
                spy={true}
                offset={50}
                duration={500}
              >
                <span className="uppercase relative w-full text-left text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Proyectos
                </span>
              </Link>
            </button>
            <button className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white hover:border-gray-500 group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-gray-500 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <Link
                to="CONTACTO"
                smooth={true}
                spy={true}
                offset={50}
                duration={500}
              >
                <span className="uppercase relative w-full text-left text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Contactame
                </span>
              </Link>
            </button>
            {/* <button className="text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white">
              SEE PORTFOLIO
            </button>
            <button className="text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white">
              CONTACT ME
            </button> */}
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              src={imgDeveloper}
              alt=""
              title=""
              className="h-full w-[500px] object-cover developer-animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
