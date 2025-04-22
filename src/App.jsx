import React from "react";
import { Routes, Route} from "react-router-dom";
import Navigation from "./components/navBar/Navigation";
import ProfileCard from "./components/profileCard/ProfileCard";
import LeetCodeHeatmap  from "./components/about/LeetCodeHeatmap";
import About from "./components/About";
import TimelineExperience from "./components/timeline/TimelineExperience";
import TimelineProjects from "./components/timeline/TimelineProjects";
import SkillShowcase from "./components/skill/SkillShowcase";
import Resume from "./components/Resume";
import Projects from "./components/projects/Projects";



const App = () => {
  return (
    // <div className="h-screen flex justify-center items-center bg-gray-900">
      
    //   <Routes>
    //     <Route path="/*" element={<Navigation />}/>
    //   </Routes>
      
    // </div>

    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500">
    //   <ProfileCard />
    // </div>


  //   <div>
  // <LeetCodeHeatmap/>
  //   </div>


  // <div>
    // <About/>
  // </div>



  <div className="w-full min-h-screen bg-black py-80">
    <div >
   <Routes>
    <Route path="/*" element={<Navigation />}/>
   </Routes>

    </div>

   </div>

  // <div className="bg-black min-h-screen p-10">
  //   <TimelineProjects />
  // </div>

 

    // <SkillShowcase />

    // <Resume />

    // <div className="bg-[#171616] min-h-screen">

    //   <Projects />
    // </div>





  );
};

export default App;
