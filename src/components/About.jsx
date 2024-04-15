import { HiUser } from "react-icons/hi2";
import imgDeveloper from "../assets/img/developer.png";

const About = () => {
  return (
    <div id="SOBRE MI" className="py-10 md:px-12 px-4 text-gray-500">
      <h2 className="relative text-5xl text-bold mb-10 text-center">SOBRE MI</h2>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-24">
        <img
          src={imgDeveloper}
          alt=""
          title=""
          className="h-[20rem] lg:w-[40%] rounded-xl"
        />
        <div>
          <p className="text-1xl text-justify">
            Hola, soy Juan Pablo Ribero Mazzoni, Ingeniero Civil con más de 5
            años de experiencia en el sector de la construcción, específicamente
            en la inspección de obras y gestión de proyectos.
          </p>
          <br />
          <p className="text-1xl text-justify">
            En el año 2021 decidí dar un giro de 180° hacia el campo de la
            tecnología de la información y me he estado formando de manera
            continua.
          </p>
          <br />
          <p className="text-1xl text-justify">
            Desde aquel momento me convertí en un apasionado desarrollador web
            frontend, cuento con experiencia en el manejo de HTML, CSS,
            JavaScript, además del manejo de frameworks y liberías,
            especialmente React JS. He trabajado en proyectos de pequeña escala,
            implementando soluciones de código eficientes, trabajado con
            arquitecturas de software escalables y fácilmente mantenibles.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
