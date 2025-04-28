import React from "react";
import LeetCodeHeatmap from "./about/LeetCodeHeatmap";
import SkillShowcase from "./skill/SkillShowcase";
import ProfileCard from "./profileCard/ProfileCard"; // Import your ProfileCard here

import "./about/About.css"

const About = () => {
  return (
    <div className="about-page w-full min-h-screen flex flex-col items-center justify-center bg-black py-10 px-6 space-y-8 overflow-x-hidden">

  {/* Layout Container */}
  <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:max-w-6xl">

    {/* Profile Card */}
    <div className="hidden lg:block lg:w-[350px] sticky top-24 self-start pt-20 ">
      <ProfileCard />
    </div>

    {/* About Content */}
    <div className="w-full flex flex-col items-center justify-center space-y-10">
      
      {/* About Section Card */}
      <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl flex flex-col items-center text-white p-10 shadow-lg shadow-gray-800">
        
        {/* About Heading */}
        <h2 className="text-4xl font-bold">About Me</h2>
        <div className="w-24 h-1 bg-blue-400 rounded-full mt-3 mb-5"></div>

        {/* About Me Text */}
        <p className="text-center text-lg opacity-90 leading-relaxed">
          Hey there! 👋 I'm a <b>Full-Stack Developer & Software Tester</b> with a knack for building smooth, real-time web apps and making sure they run flawlessly.
        </p>

        <ul className="text-left text-base opacity-80 mt-4 space-y-2">
          <li>🕵️‍♂️ <b>Bug detective by night</b> – Squashed more bugs than a windshield on a highway (with style, of course).</li>
          <li>💼 <b>Interned at OpenText & Micro Focus</b></li>
          <li>💻 <b>Tech Stack:</b> React, Node.js, MongoDB, Spring Boot – If it runs on the web, I’ve probably built or broken it (on purpose, for testing 😉).</li>
          <li>🔥 <b>Believer in clean code, automation, and the power of Ctrl+Z.</b></li>
          <li>🏋️‍♂️ <b>Outside code:</b> Catch me at the gym pretending I know what I’m doing or Googling errors like a pro.</li>
        </ul>

        <p className="text-center text-base mt-4 opacity-80"><i><b>Let’s team up and build something awesome – or at least something that doesn’t throw a 500 error! 😄🚀</b></i></p>

      </div>


       {/* Skill Showcase Section */}
       <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl flex flex-col items-center p-6 shadow-lg shadow-gray-800">
        <h2 className="text-white text-xl font-semibold mb-3">My Skills</h2>
        <SkillShowcase />
      </div>
      

      {/* GitHub Timeline Section Card */}
      <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl flex flex-col items-center p-6 shadow-lg shadow-gray-800">
        <h2 className="text-white text-xl font-semibold mb-3">GitHub Activity</h2>
        <div className="w-full rounded-xl overflow-hidden">
          <img 
            src="https://github-readme-activity-graph.vercel.app/graph?username=ashutosh-kumar-dev&theme=tokyo-night" 
            alt="GitHub Activity Graph"
            className="w-full"
          />
        </div>
      </div>

      {/* LeetCode Heatmap Section with Scrollable & Styled Scrollbar */}
      <div className="w-full  max-w-4xl bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl flex flex-col items-center p-6 shadow-lg shadow-gray-800">
        <h2 className="text-white text-xl font-semibold mb-3">LeetCode Heatmap</h2>
        
        {/* Scrollable Container with Custom Scrollbar */}
        <div className="w-full lg:w-[500px] xl:w-full overflow-x-auto custom-scrollbar max-w-3xl">
          <div className="sm:min-w-[600px] md:min-w-[800px] rounded-xl">
            <LeetCodeHeatmap />
          </div>
        </div>
      </div>

      </div>
      
      
      </div>

     

    </div>
  );
};

export default About;
