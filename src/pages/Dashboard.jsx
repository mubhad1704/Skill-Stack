import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center " style={{backgroundImage:"url('/bg2.jpg')"}}>
      <Navbar />
      <div className="flex-1 flex flex-col justify-center w-full">
        <h1 className="text-center text-2xl md:text-4xl my-6 md:mt-10 font-bold  ">
          SkillStack{" "}
          <span className="bg-linear-to-b from-[#00a2aad0] via-[#007e85d0] to-[#004c50d0]  bg-clip-text text-transparent">
            Dashboard
          </span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-5 ">
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Total Skills
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">totalskills</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Started
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">started</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              In Progress
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">inProgress</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Completed
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">completed</p>
          </div>
        </div>

        <div className="inline-flex flex-col items-center border-2 rounded-xl px-8 py-4 self-center bg-[#002729be] border-[#00676dc0] shadow-md shadow-[#00676dc0] my-8">
          <h3 className="text-xl font-bold text-[#eeeeeee0]">
            Total Hours Spent
          </h3>
          <p className="text-3xl text-[#eeeeeeb7] font-semibold">
           
            hrs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 ">
          <div className="bg-cover bg-center rounded-xl border-2 p-5 bg-linear-to-b from-[#009ba334] via-[#00888f34] to-[#00595e7e] border-[#00676dc0] shadow-md shadow-[#00676dc0]">
            <h2 className="text-2xl  font-semibold text-center text-[#003436] border-b border-[#00676dc0]">
              Resource Type Breakdown
            </h2>
            <div className="m-2 mt-4">
              <p className="text-lg font-semibold">
               
                Video<span className="text-[#003436] mx-3">➙</span>
                <span className="font-medium text-[#012324] ">video</span>
              </p>
              <p className="text-lg font-semibold">
               
                Course<span className="text-[#003436] mx-3">➙</span>
                <span className="font-medium text-[#012324] ">course</span>
              </p>
              <p className="text-lg font-semibold">
               
                Article<span className="text-[#003436] mx-3">➙</span>
                <span className="font-medium text-[#012324] ">article</span>
              </p>
            </div>
          </div>

          <div className="bg-cover bg-center rounded-xl border-2 p-5 bg-linear-to-b from-[#009ba334] via-[#00888f34] to-[#00595e7e] border-[#00676dc0] shadow-md shadow-[#00676dc0]">
            <h3 className="text-2xl  font-semibold text-center text-[#003436] border-b border-[#00676dc0]">
              Platform Breakdown
            </h3>
            <div className="m-2 mt-4 ">
              <p>YouTube</p>
              <p>Udemy</p>
              <p>Coursera</p>
              <p>Other</p>
            </div>
          </div>

          <div className="bg-cover bg-center rounded-xl border-2 p-5 bg-linear-to-b from-[#009ba334] via-[#00888f34] to-[#00595e7e] border-[#00676dc0] shadow-md shadow-[#00676dc0]">
            <h3 className="text-2xl  font-semibold text-center text-[#003436] border-b border-[#00676dc0]">
              Insights
            </h3>
            <div className="m-2 mt-4">
              <p>
                Completion Rate: <span>completion rate</span>{" "}
              </p>

              <p>message</p>
            </div>
          </div>
        </div>

       
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
