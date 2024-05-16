import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoAngular,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoWordpress,
  IoLogoGithub,
  IoLogoFirebase,
} from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import {
  BiLogoTailwindCss,
  BiLogoJquery,
  BiLogoMongodb,
  BiLogoDjango,
} from "react-icons/bi";
import { SiExpress, SiGit } from "react-icons/si";

const Skills = () => {
  return (
    <div className="py-10 px-12 text-gray-500 bg-black">
      <div className="flex justify-center">
        <h2 className="relative text-7xl text-bold mb-10 text-center text-personal-gray font-bebas-neue tracking-widest title title--width185" data-aos="fade-left">
          SKILLS
        </h2>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-16 px-6 font-roboto tracking-wider">
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out " data-aos="zoom-in-right">
          <IoLogoHtml5 className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">HTML</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <IoLogoCss3 className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">CSS</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <IoLogoSass className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">SASS</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <FaBootstrap className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">BOOTSTRAP</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-left">
          <BiLogoTailwindCss className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">TAILWIND</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-right">
          <IoLogoJavascript className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">JAVASCRIPT</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <BiLogoJquery className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">JQUERY</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <IoLogoReact className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">REACT</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <IoLogoFirebase className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">FIREBASE</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-left">
          <BiLogoMongodb className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">MONGODB</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-right">
          <SiExpress className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">EXPRESS</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <IoLogoNodejs className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">NODE</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <IoLogoWordpress className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">WORDPRESS</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-up">
          <SiGit className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">GIT</h2>
        </div>
        <div className="bg-personal-gray border-[2px] border-personal-gray p-[10px] rounded-xl flex flex-col items-center justify-center hover:border-[2px] hover:border-neon-cian hover:bg-transparent hover:text-neon-cian duration-500 ease-in-out" data-aos="zoom-in-left">
          <IoLogoGithub className="text-[40px] my-2 text-center" />
          <h2 className="text-[17px] font-bold my-2">GITHUB</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
