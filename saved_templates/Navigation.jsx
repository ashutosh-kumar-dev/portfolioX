import React, { useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PageRoutes from "../PageRoutes";

const Navigation = () => {
  const Menus = [
    { name: "About", path: "/about", icon: PersonOutlineIcon, dis: "translate-x-0" },
    { name: "Resume", path: "/resume", icon: ViewTimelineOutlinedIcon, dis: "translate-x-16" },
    { name: "Projects", path: "/projects", icon: FolderZipOutlinedIcon, dis: "translate-x-32" },
    { name: "Contact", path: "/contact", icon: ContactMailOutlinedIcon, dis: "translate-x-48" },
  ];

  const navigate = useNavigate();
  
  const [active, setActive] = useState(0);

  const showTabs = (e, path, i) => {
    setActive(i);
    navigate(path);
  }




  return (
    <div className="flex flex-col">
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl ">
      <ul className="flex relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>

          {React.createElement(Menus[active].icon, { className: "text-white text-2xl ml-4 mt-4" })}
        </span>
        <div className="overflow-hidden flex mb-50">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16 ">
            <button
              className="flex flex-col text-center pt-6 focus:outline-none"
              onClick={(e) => showTabs(e,menu.path, i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                {React.createElement(menu.icon)}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100 ml-2"
                    : "opacity-0 translate-y-10 ml-2"
                } `}
              >
                {menu.name}
              </span>
            </button>
          </li>
        ))}
        </div>
      </ul>
    </div>

        {/*  ======================== seeperate this bith and place it in the app.jsx */}
    <div>
      <PageRoutes/>
    </div>

    </div>
  );
};

export default Navigation;
