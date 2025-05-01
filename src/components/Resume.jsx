import React from 'react';
import TimelineExperience from "./timeline/TimelineExperience";
import TimelineProjects from "./timeline/TimelineProjects";
import SkillShowcase from './skill/SkillShowcase';
import Education from '../components/education/Education';
import Divider from "../components/Divider";

const Resume = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      

      <TimelineExperience />
      
      {/* design divider */}
      <Divider/>

      <Education/>
      
      </div>
  );
};

export default Resume;