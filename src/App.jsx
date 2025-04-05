import React from "react";
import { Routes, Route} from "react-router-dom";
import Navigation from "./components/navBar/Navigation";
import ProfileCard from "./components/profileCard/ProfileCard";
const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      
      <Routes>
        <Route path="/*" element={<Navigation />}/>
      </Routes>
      
    </div>

    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500">
    //   <ProfileCard />
    // </div>
  );
};

export default App;
