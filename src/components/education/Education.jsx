import React from "react";

const Education = () => {
  return (
    <div className="max-w-md mx-auto mb-20 mt-10 p-6 bg-[#333] rounded-2xl shadow-lg ">
      <h2 className="text-2xl font-semibold text-white mb-4">📘 Schooling Details</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-slate-200">University</h3>
          <p className="text-slate-200">Lovely Professional University, Punjab</p>
          <p className="text-sm text-slate-200">2024</p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-slate-200">High School</h3>
          <p className="text-slate-100">Holy Cross School, Jharkhand</p>
          <p className="text-sm text-slate-100">2020 – CBSE Board </p>
        </div>
        
      </div>
    </div>
  );
};

export default Education;
