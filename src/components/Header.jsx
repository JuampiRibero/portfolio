import { useState, useContext } from "react";
import { LanguageContext } from "../context/language";
import MenuOverlay from "./MenuOverlay";
import { Link } from "react-scroll";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const [activeLanguage, setActiveLanguage] = useState(isEnglish ? "en" : "es");

  const handleLanguage = (language) => {
    if ((language === "en" && !isEnglish) || (language === "es" && isEnglish)) {
      toggleLanguage();
      setActiveLanguage(language);
    }
  };

  const menuList = [
    {
      id: 1,
      title: isEnglish ? "HOME" : "INICIO",
    },
    {
      id: 2,
      title: isEnglish ? "ABOUT ME" : "SOBRE MI",
    },
    {
      id: 3,
      title: isEnglish ? "PORTFOLIO" : "PORTAFOLIO",
    },
    {
      id: 4,
      title: isEnglish ? "CONTACT" : "CONTACTO",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-black/75 px-12 py-8 font-roboto tracking-widest">
      <div>
        <h2 className="sm:text-2xl text-xl font-bold text-white">JUAN PABLO</h2>
        <h2 className="sm:text-2xl text-xl font-bold text-neon-cian">
          RIBERO MAZZONI
        </h2>
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((item) => (
          <Link
            key={item.id}
            to={item.title}
            onClick={() => setToggle(true)}
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            className="text-lg font-normal text-white border-b-2 border-transparent hover:text-neon-cian hover:border-b-2 hover:border-neon-cian transition ease-in-out duration-500 mx-4 py-2 cursor-pointer"
          >
            {item.title}
          </Link>
        ))}
        <div className="flex">
          <h3
            className={`text-lg font-normal text-white py-2 cursor-pointer ${activeLanguage === "es" ? "border-b-2 border-solid border-neon-cian !text-neon-cian" : "border-b-2 border-transparent"
            }`}
            onClick={() => handleLanguage("es")}
          >
            ES
          </h3>
          <span className="text-lg font-normal text-white mx-1 py-2">
            /
          </span>
          <h3
            className={`text-lg font-normal text-white py-2 cursor-pointer ${activeLanguage === "en" ? "border-b-2 border-solid border-neon-cian !text-neon-cian" : "border-b-2 border-transparent"
            }`} 
            onClick={() => handleLanguage("en")}
          >
            EN
          </h3>
        </div>
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <HiBars3
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl"
          />
        ) : (
          <HiXMark
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl"
          />
        )}
        {toggle ? (
          <MenuOverlay
            handleMenu={() => setToggle(!toggle)}
            menuList={menuList}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
