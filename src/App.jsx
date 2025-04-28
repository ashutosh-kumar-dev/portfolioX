import React from "react";
import { Routes, Route} from "react-router-dom";
import Navigation from "./components/navBar/Navigation";
// import Navigation from "../saved_templates/Navigation";
import ProfileCard from "./components/profileCard/ProfileCard";
import LeetCodeHeatmap  from "./components/about/LeetCodeHeatmap";
import About from "./components/About";
import TimelineExperience from "./components/timeline/TimelineExperience";
import TimelineProjects from "./components/timeline/TimelineProjects";
import SkillShowcase from "./components/skill/SkillShowcase";
import Resume from "./components/Resume";
import Projects from "./components/projects/Projects";
import PageRoutes from './components/PageRoutes';

function App() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      {/* Fixed Navigation */}
      <div className="">
        <Navigation />
      </div>


      {/* Scrollable Content */}
      <div className="mt-[4.4rem]  ">
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
