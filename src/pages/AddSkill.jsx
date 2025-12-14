import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api";
import { Bounce, ToastContainer, toast } from "react-toastify";

function AddSkill() {
  const [form, setForm] = useState({
    skill_name: "",
    resource_type: "",
    platform: "",
    status: "",
    hours: "",
    notes: "",
    difficulty: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/skills", {
        skill_name: form.skill_name,
        resource_type: form.resource_type,
        platform: form.platform,
        status: form.status,
        hours: Number(form.hours),
        notes: form.notes,
        difficulty: Number(form.difficulty),
      });
      toast.success("Skill added successfully!");

      setForm({
        skill_name: "",
        resource_type: "",
        platform: "",
        status: "",
        hours: "",
        notes: "",
        difficulty: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed to add skill");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/skillsbg.jpg')" }}
    >
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          Add Learning{" "}
          <span className="bg-linear-to-b from-[#00a2aad0] via-[#007e85d0] to-[#004c50d0]  bg-clip-text text-transparent">
            Goal
          </span>
        </h1>
        <div className="border-2 border-[#00acb5] shadow-md shadow-[#00acb5a6] p-5 rounded-xl bg-white/30 m-3">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-bold text-[#00595e] md:text-lg">
                Skill Name :
              </label>
              <input
                type="text"
                name="skill_name"
                value={form.skill_name}
                onChange={handleChange}
                placeholder="Ex: React, Python..."
                className="border border-[#007c83] p-2 rounded-xl bg-white/50"
                required
              />
            </div>

            <div>
              <label className="font-bold text-[#00595e] md:text-lg">
                Resource Type :
              </label>
              <select
                name="resource_type"
                id=""
                className="bg-white/50 border border-[#007c83] p-2 rounded-xl ms-3"
                value={form.resource_type}
                onChange={handleChange}
                required
              >
                <option value="">Select one</option>
                <option value="video">Video</option>
                <option value="course">Course</option>
                <option value="article">Article</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-[#00595e] md:text-lg">
                Select Platform :
              </label>
              <select
                name="platform"
                id=""
                className="border bg-white/50 border-[#007c83] p-2 rounded-xl ms-3"
                value={form.platform}
                onChange={handleChange}
                required
              >
                <option value="">Select platform</option>
                <option value="youtube">YouTube</option>
                <option value="udemy">Udemy</option>
                <option value="coursera">Coursera</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-[#00595e] md:text-lg">
                Status :
              </label>
              <select
                name="status"
                id=""
                className="border border-[#007c83] p-2 rounded-xl ms-3 bg-white/50"
                value={form.status}
                onChange={handleChange}
                required
              >
                <option value="">Select status</option>
                <option value="started">Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-[#00595e] md:text-lg">
                Hours Spent :
              </label>
              <input
                type="number"
                name="hours"
                placeholder="Ex: 4"
                min="0"
                className="border border-[#007c83] p-2 rounded-xl ms-3 bg-white/50"
                value={form.hours}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-bold text-[#00595e] md:text-lg">
                Difficulty Rating :
              </label>
              <input
                type="number"
                name="difficulty"
                placeholder="1-Easy, 5-Hard"
                min="1"
                max="5"
                className="border border-[#007c83] p-2 rounded-xl ms-3 w-36 bg-white/50"
                value={form.difficulty}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-[#00595e] md:text-lg">
                Notes :
              </label>
              <textarea
                name="notes"
                id=""
                rows="4"
                placeholder="Notes..."
                className="border border-[#007c83] p-2 rounded-xl bg-white/50 "
                value={form.notes}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="text-white border bg-[#007c83] border-[#007c83] p-2 rounded-xl cursor-pointer w-full hover:bg-[#007d83c5]">
              Add Skill
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default AddSkill;
