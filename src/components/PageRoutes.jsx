import React from 'react';

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

import { Routes, Route} from "react-router-dom";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
};

export default PageRoutes;