import { Link } from "react-scroll";

const MenuOverlay = ({ menuList, handleMenu }) => {
  return (
    <div className="absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-5">
      {menuList.map((item) => (
        <Link
          key={item.id}
          to={item.title}
          onClick={handleMenu}
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          className="flex flex-col text-white text-[24px] font-normal my-6 justify-center hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuOverlay;
