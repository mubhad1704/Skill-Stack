import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api";

function Dashboard() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadedSkills = async () => {
      try {
        const res = await API.get("/skills");
        setSkills(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadedSkills();
  }, []);

  const totalSkills = skills.length;

  const started = skills.filter((s) => s.status === "started").length;
  const inProgress = skills.filter((s) => s.status === "in-progress").length;
  const completed = skills.filter((s) => s.status === "completed").length;

  const totalHours = skills.reduce((sum, s) => sum + (s.hours || 0), 0);

  const videoCount = skills.filter((s) => s.resource_type === "video").length;
  const courseCount = skills.filter((s) => s.resource_type === "course").length;
  const articleCount = skills.filter((s) => s.resource_type === "article").length;

  const ytCount = skills.filter((s) => s.platform === "youtube").length;
  const udemyCount = skills.filter((s) => s.platform === "udemy").length;
  const courseraCount = skills.filter((s) => s.platform === "coursera").length;
  const otherCount = skills.filter((s) => s.platform === "other").length;

  const completionRate = totalSkills === 0 ? 0 : Math.round((completed/ totalSkills)*100)

  let insightMessage = "keep learning!"
  if(completed> started + inProgress) insightMessage = "Amazing progress!"
  if(completed === totalSkills && totalSkills > 0) insightMessage = "All goals completed!"

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center "
      style={{ backgroundImage: "url('/bg2.jpg')" }}
    >
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
            <p className="md:text-lg text-[#00676d] text-center">{totalSkills}</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Started
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">{started}</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              In Progress
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">{inProgress}</p>
          </div>
          <div className="flex flex-col items-center justify-center border-2 rounded-xl p-5 bg-white/20 border-[#00676dc0] shadow-md shadow-[#0089916e]">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Completed
            </h3>
            <p className="md:text-lg text-[#00676d] text-center">{completed}</p>
          </div>
        </div>

        <div className="inline-flex flex-col items-center border-2 rounded-xl px-8 py-4 self-center bg-[#002729be] border-[#00676dc0] shadow-md shadow-[#00676dc0] my-8">
          <h3 className="text-xl font-bold text-[#eeeeeef6]">
            Total Hours Spent
          </h3>
          <p className="text-5xl bg-linear-to-b from-[#c8fcffd0] via-[#9be0e4d0] to-[#55cbd1d0]  bg-clip-text text-transparent font-bold ">{totalHours}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 ">
          <div className="bg-cover bg-center rounded-xl border-2 p-5 bg-linear-to-b from-[#009ba334] via-[#00888f34] to-[#00595e7e] border-[#00676dc0] shadow-md shadow-[#00676dc0]">
            <h2 className="text-2xl  font-semibold text-center text-[#003436] border-b border-[#00676dc0]">
              Resource Type Breakdown
            </h2>
            <div className="m-2 mt-4">
              <p className="text-lg font-semibold">
                Video<span className="text-[#003436] mx-3">➙</span>
                <span className="font-medium text-[#012324] ">{videoCount}</span>
              </p>
              <p className="text-lg font-semibold">
                Course<span className="text-[#003436] mx-3">➙</span>
                <span className="font-medium text-[#012324] ">{courseCount}</span>
              </p>
              <p className="text-lg font-semibold">
                Article<span className="text-[#003436] mx-3">➙</span>
                <span className="font-medium text-[#012324] ">{articleCount}</span>
              </p>
            </div>
          </div>

          <div className="bg-cover bg-center rounded-xl border-2 p-5 bg-linear-to-b from-[#009ba334] via-[#00888f34] to-[#00595e7e] border-[#00676dc0] shadow-md shadow-[#00676dc0]">
            <h3 className="text-2xl  font-semibold text-center text-[#003436] border-b border-[#00676dc0]">
              Platform Breakdown
            </h3>
            <div className="m-2 mt-4 ">
              <p className="text-lg font-semibold">YouTube<span className="text-[#003436] mx-3">➙</span> <span className="font-medium text-[#012324] ">{ytCount}</span></p>
              <p className="text-lg font-semibold">Udemy<span className="text-[#003436] mx-3">➙</span> <span className="font-medium text-[#012324] ">{udemyCount}</span></p>
              <p className="text-lg font-semibold">Coursera<span className="text-[#003436] mx-3">➙</span> <span className="font-medium text-[#012324] ">{courseraCount}</span></p>
              <p className="text-lg font-semibold">Other<span className="text-[#003436] mx-3">➙</span> <span className="font-medium text-[#012324] ">{otherCount}</span></p>
            </div>
          </div>

          <div className="bg-cover bg-center rounded-xl border-2 p-5 bg-linear-to-b from-[#009ba334] via-[#00888f34] to-[#00595e7e] border-[#00676dc0] shadow-md shadow-[#00676dc0] flex flex-col">
            <h3 className="text-2xl  font-semibold text-center text-[#003436] border-b border-[#00676dc0]">
              Insights
            </h3> 
            <div className="m-2 mt-4 flex-1 flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-center">
                Completion Rate<span className="text-[#003436] mx-3 ">➙</span> <span className="text-2xl  text-[#00676d]">{completionRate}%</span>{" "}
              </p>

              <p className="mt-2 tracking-wide text-[#003a3d]">{insightMessage}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
