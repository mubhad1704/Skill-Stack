import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center " style={{backgroundImage: "url('/bg.jpg')"}}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold  mb-4">
          Track Your Learning. <span className="bg-linear-to-b from-[#003f42d0] via-[#002527d0] to-[#000000d0]  bg-clip-text text-transparent">Boost Your Skills.</span> 
        </h1>

        <p className="text-gray-800 text-lg max-w-xl mb-8 font-semibold mt-2 tracking-wide">
          SkillStack helps you organize courses, tutorials, and certifications —
          all in one place. Stay motivated and grow consistently.
        </p>

        <a href="/dashboard" className="mb-8 hover:underline hover:text-[#001718] text-[#01494d] font-bold tracking-wider">Dashboard →</a>

            <div className="flex flex-col md:flex-row gap-4">
            <a
                href="/add"
                className="bg-gray-100/20  border-2 border-[#00acb5] px-6 py-3 rounded-lg hover:bg-[#00acb557] hover:text-white transition shadow text-sm md:text-base"
            >
                Add Your Skill
            </a>

            <a
                href="/skills"
                className="bg-[#00acb54f] border border-[#00acb5a4]  px-6 py-3 rounded-lg hover:bg-[#00acb5a4] transition"
            >
                View Skills
            </a>
            </div>

      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
