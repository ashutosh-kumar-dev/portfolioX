import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';


const Navigation = () => {
  const Menus = [
    { name: "About", path: "/about", icon: PersonOutlineIcon, dis: "translate-x-[0px] xs:translate-x-[25px] sm:translate-x-[65px] md:translate-x-[80px] xm:translate-x-[125px] lg:translate-x-[10px] xl:translate-x-[15px] " },
    { name: "Resume", path: "/resume", icon: ViewTimelineOutlinedIcon, dis: "translate-x-[65px] xs:translate-x-[115px] sm:translate-x-[195px] md:translate-x-[230px] xm:translate-x-[325px] lg:translate-x-[80px] xl:translate-x-[100px]" },
    { name: "Projects", path: "/projects", icon: FolderZipOutlinedIcon, dis: "translate-x-[135px] xs:translate-x-[205px] sm:translate-x-[325px] md:translate-x-[370px] xm:translate-x-[515px] lg:translate-x-[155px] xl:translate-x-[180px]" },
    { name: "Contact", path: "/contact", icon: ContactMailOutlinedIcon, dis: "translate-x-[200px] xs:translate-x-[290px] sm:translate-x-[455px] md:translate-x-[515px] xm:translate-x-[710px] lg:translate-x-[230px] xl:translate-x-[260px]" },
  ];
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [menuName, setMenuName] = useState("About");

  useEffect(()=>{
      
  navigate("/about")
  },[]);


  const showTabs = (e, menu, i) => {
    setActive(i);
    setMenuName(menu.name);
    navigate(menu.path);
  }




  return (
      <div className="bg-black">
    
        {/* Left side: menuName */}
        <div className="w-full z-40 h-[4.4rem] rounded-t-xl rounded-b-xl fixed text-white font-bold backdrop-blur-sm bg-gradient-to-r from-black/30 via-gray-400/30 to-black/30">
          <div className="pl-[10%] pt-3 text-3xl text-white font-kalam">
          {menuName}
          </div>
        </div>


    
        {/* Right side: navbar */}
        <div className="fixed w-full lg:w-[35%] flex flex-col justify-end z-50 bottom-0 left-0 top-auto lg:right-0 lg:top-0 lg:bottom-auto lg:left-auto">
          <div className="bg-white h-[4.4rem] px-6 border-t-[5px] border-black lg:border-t-0 lg:border-b-[5px] rounded-t-xl rounded-b-xl">
            <ul className="flex flex-col relative ">
              {/* Active Bubble */}
              <span
                className={`bg-blue-700 duration-500 ${Menus[active].dis} border-4 border-black h-16 w-16 absolute
                             bottom-auto -top-5 md:-top-5 md:bottom-auto lg:top-auto lg:-bottom-6 rounded-full transition-transform ease-in-out`}
              >
                {/* Active bubble lower shade */}
                <span className="w-3.5 h-3.5 bg-transparent absolute 
                  top-4 left-[-18px] rounded-tr-[6px] shadow-myShadow1
                  lg:top-auto lg:bottom-6 lg:left-auto lg:right-[-18px] lg:rounded-bl-[8px] lg:shadow-myShadow4">
                </span>

                <span className="w-3.5 h-3.5 bg-transparent absolute 
                  top-4 right-[-18px] rounded-tl-[6px] shadow-myShadow2
                  lg:top-auto lg:bottom-6 lg:right-auto lg:left-[-18px] lg:rounded-br-[8px] lg:shadow-myShadow3">
                </span>

                {React.createElement(Menus[active].icon, { className: "text-white text-2xl ml-4 mt-4 transition-transform duration-500 ease-in-out" })}
              </span>
    
              {/* Menu Buttons */}
              <div className=" overflow-hidden flex mb-50">
                {Menus.map((menu, i) => (
                  <li key={i} className="w-16 xs:ml-6 sm:ml-16 md:ml-20 xm:ml-32 lg:ml-2 xl:ml-4">
                    <button
                      className="flex flex-col text-center pt-4 focus:outline-none"
                      onClick={(e) => showTabs(e, menu, i)}
                    >
                      <span
                        className={`text-xl duration-700 ml-2 ${
                          i === active ? "-translate-y-6 lg:translate-y-16 text-white opacity-0" : "-translate-y-0 opacity-100"  // set inactive first then active
                        }`}
                      >
                        {React.createElement(menu.icon)}
                      </span>
                      <span
                        className={`duration-700 cursor-pointer  ml-2 ${
                          active === i
                            ? "translate-y-0 lg:-translate-y-10 opacity-100"
                            : "translate-y-20 lg:-translate-y-20 opacity-0" // set inactive first then active
                        }`}
                      >
                        {menu.name}
                      </span>

                    </button>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    
    
  );
};

export default Navigation;
