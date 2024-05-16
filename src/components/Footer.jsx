import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="py-4 bg-black/70 text-personal-gray text-center font-roboto tracking-widest">
      <div className="relative p-4 py-6 lg:py-8 md:flex md:justify-between px-12 bottom-2">
        <div className="mb-6 md:mb-0">
          <a className="flex md:text-start justify-center items-center" href="">
            <div>
              <span className="text-1xl font-bold text-personal-gray">
                JUAN PABLO
              </span>
              <br />
              <span className="text-1xl font-bold text-neon-cian">
                RIBERO MAZZONI
              </span>
            </div>
          </a>
        </div>
        <div className="flex gap-10 my-2 justify-center items-center text-4xl">
          <a
            className="text-personal-gray cursor-pointer hover:text-neon-cian"
            href="https://www.linkedin.com/in/juanpabloriberomazzoni/"
            target="_blank"
          >
            <IoLogoLinkedin />
          </a>
          <a
            className="text-personal-gray cursor-pointer hover:text-neon-cian"
            href="https://github.com/JuampiRibero"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
          <a
            className="text-personal-gray cursor-pointer hover:text-neon-cian"
            href="mailto:juampiribero@gmail.com?subject=Consulta%20por%20servicio%20de..."
            target="_blank"
          >
            <SiGmail />
          </a>
        </div>
      </div>
      <hr className="border-neon-cian pb-2" />
      <span className="text-center">&copy; Juan Pablo Ribero Mazzoni 2024</span>
    </div>
  );
};

export default Footer;
