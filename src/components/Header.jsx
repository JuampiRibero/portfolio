import { useState } from "react";
import { Link } from "react-scroll";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "SOBRE MI",
    },
    {
      id: 3,
      title: "PORTFOLIO",
    },
    {
      id: 4,
      title: "CONTACTO",
    },
  ];
  return (
    <div className="flex items-center justify-between bg-black/75 px-12 py-8">
      <div>
        <h2 className="text-2xl font-bold text-white">JUAN PABLO</h2>
        <h2 className="text-2xl font-bold text-neon-cian">RIBERO MAZZONI</h2>
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((item) => (
          <Link
            key={item.id}
            to={item.title}
            onClick={() => setToggle(true)}
            smooth={true}
            spy={true}
            offset={50}
            duration={500}
            className="text-1xl font-normal text-white hover:border-[2px] hover:text-white border-neon-cian rounded-full px-4 py-2 cursor-pointer"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <HiBars3
            onClick={() => setToggle(!toggle)}
            className="text-white text-[32px]"
          />
        ) : (
          <HiXMark
            onClick={() => setToggle(!toggle)}
            className="text-white text-[32px]"
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
