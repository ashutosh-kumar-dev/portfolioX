import { useState } from "react";
import myImage from "./myImage.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-[350px] h-[450px] bg-gradient-to-tr from-green-300 via-blue-300 to-purple-400
 rounded-[20px] shadow-2xl transition-all duration-500 ${
        isHovered ? "h-[450px]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Box */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 ${
          isHovered ? "w-[250px] h-[250px]" : "w-[150px] h-[150px]"
        } top-[-50px] bg-gradient-to-tr from-green-300 via-blue-300 to-purple-400  rounded-[20px] shadow-xl overflow-hidden transition-all duration-500`}
      >
        <img
          src={myImage} // Change this to your image path
          alt="Profile"
          className="w-full h-full object-cover scale-110 -translate-x-5"
        />
      </div>

      {/* Content Section */}
      <div className="absolute w-full h-full flex justify-center items-end overflow-hidden">
        <div
          className={`p-10 text-center w-full transition-transform duration-500 `}
        >
          {/* Name and Title */}
          <h2 className="text-2xl md:text-2xl font-semibold text-blue-950">
            Ashutosh Kumar
            <br />
            <span className="text-base md:text-lg font-medium opacity-40">
              Web Developer
            </span>
          </h2>


          {/* Stats */}
          <div className="flex justify-center my-5 space-x-4 md:space-x-6">
            <IconButton onClick={() => window.open(import.meta.env.VITE_GITHUB_URL, "_blank")}>
              <GitHubIcon className="text-blue-950" fontSize="large"  />
            </IconButton>

            <IconButton onClick={() => window.open(`mailto:${import.meta.env.VITE_EMAIL_URL}`)}>
              <EmailIcon fontSize="large" className="text-blue-950" />
            </IconButton>

            <IconButton onClick={() => window.open(import.meta.env.VITE_LINKEDIN_URL, "_blank")}>
              <LinkedInIcon fontSize="large" className="text-blue-950" />
            </IconButton>
          </div>




          
        </div>
      </div>
    </div>
  );
}
