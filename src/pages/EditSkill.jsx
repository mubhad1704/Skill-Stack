import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EditSkill() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
       <h1 className='text-center my-5 text-3xl md:text-4xl font-bold md:mt-10'>Edit Learning <span className="bg-linear-to-b from-[#00a2aad0] via-[#007e85d0] to-[#004c50d0]  bg-clip-text text-transparent">Goal</span></h1>
        <div className="flex-1 flex flex-col justify-center items-center">
        
        </div>
      <Footer />
    </div>
  );
}

export default EditSkill;
