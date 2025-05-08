import React from "react";
import { Routes, Route} from "react-router-dom";
import Navigation from "./components/navBar/Navigation";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          {/* Add a fallback route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
