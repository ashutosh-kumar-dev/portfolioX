import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMongodb,
  SiExpress, SiTypescript, SiRedux, SiMysql
} from "react-icons/si";
import { FaJava, FaPhp, FaRust } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, proficiency: 90, experience: "3 years" },
  { name: "Python", icon: <SiPython color="#3776AB" />, proficiency: 85, experience: "2 years" },
  { name: "HTML", icon: <SiHtml5 color="#E34F26" />, proficiency: 95, experience: "4 years" },
  { name: "CSS", icon: <SiCss3 color="#1572B6" />, proficiency: 90, experience: "4 years" },
  { name: "Java", icon: <FaJava color="#007396" />, proficiency: 80, experience: "3 years" },
  { name: "React", icon: <SiReact color="#61DAFB" />, proficiency: 85, experience: "2 years" },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" />, proficiency: 80, experience: "2 years" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, proficiency: 75, experience: "2 years" },
  { name: "Express", icon: <SiExpress color="white" />, proficiency: 70, experience: "2 years" },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, proficiency: 80, experience: "2 years" },
  { name: "Redux", icon: <SiRedux color="#764ABC" />, proficiency: 85, experience: "2 years" },
  { name: "MySQL", icon: <SiMysql color="#4479A1" />, proficiency: 75, experience: "3 years" },
  { name: "PHP", icon: <FaPhp color="#777BB4" />, proficiency: 70, experience: "3 years" },
  { name: "Rust", icon: <FaRust color="white" />, proficiency: 60, experience: "1 year" },
];

const SkillShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = (event, skill) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const skillRect = event.currentTarget.getBoundingClientRect();

    setHoveredSkill(skill);
    setTooltipPosition({
      top: skillRect.top - containerRect.top - 140, // Places tooltip above the skill
      left: skillRect.left - containerRect.left - 80 + skillRect.width / 2, // Centers tooltip
    });
  };

  return (
    <div ref={containerRef} className="relative w-full bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg shadow-gray-800">
     

      {/* Hovered Skill Tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-gray-800 text-white rounded-xl shadow-lg shadow-gray-700 p-4 text-center z-50"
            style={{ 
              top: `${tooltipPosition.top}px`, 
              left: `${tooltipPosition.left}px`, 
              transform: "translate(-50%, -10px)" // Center and move slightly upwards
            }}
          >
            <h3 className="text-lg font-bold">{hoveredSkill.name}</h3>
            <p className="text-sm text-gray-400">Experience: {hoveredSkill.experience}</p>
            <div className="mt-2 w-40 bg-gray-700 h-2 rounded-full relative">
              <div
                className="bg-blue-400 h-2 rounded-full"
                style={{ width: `${hoveredSkill.proficiency}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">{hoveredSkill.proficiency}% Proficiency</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skill Icons Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            onMouseEnter={(e) => handleMouseEnter(e, skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{
              scale: 1.3,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: "15px",
              borderRadius: "12px",
              background: "#121212",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div className="text-5xl">{skill.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillShowcase;
