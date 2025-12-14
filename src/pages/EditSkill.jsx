import React, { useEffect, useState } from "react";
import API from "../api";
import Swal from "sweetalert2";

function EditSkill({ skillId, onSuccess }) {
  const [form, setForm] = useState({
    skill_name: "",
    resource_type: "",
    platform: "",
    status: "",
    hours: "",
    notes: "",
    difficulty: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!skillId) return;

    let isMounted = true;

    const fetchSkill = async () => {
      try {
        const res = await API.get(`/skills/${skillId}`);
        const skill = res.data;

        if (isMounted) {
          setForm({
            skill_name: skill.skill_name || "",
            resource_type: skill.resource_type || "",
            platform: skill.platform || "",
            status: skill.status || "",
            hours: skill.hours || "",
            notes: skill.notes || "",
            difficulty: skill.difficulty || "",
          });
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "warning",
          title: "Load Failed",
          text: "Failed to load skill details",
        });
      }
    };

    fetchSkill();

    return () => {
      isMounted = false;
    };
  }, [skillId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/skills/${skillId}`, {
        skill_name: form.skill_name,
        resource_type: form.resource_type,
        platform: form.platform,
        status: form.status,
        hours: Number(form.hours),
        notes: form.notes,
        difficulty: Number(form.difficulty),
      });

      
      onSuccess();
      await Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Skill updated successfully",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Could not update the skill. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="font-bold">Skill Name</label>
          <input
            type="text"
            name="skill_name"
            value={form.skill_name}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50 "
            required
          />
        </div>

        <div>
          <label className="font-bold">Resource Type</label>
          <select
            name="resource_type"
            value={form.resource_type}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50"
            required
          >
            <option value="">Select</option>
            <option value="video">Video</option>
            <option value="course">Course</option>
            <option value="article">Article</option>
          </select>
        </div>

        <div>
          <label className="font-bold">Platform</label>
          <select
            name="platform"
            value={form.platform}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50"
          >
            <option value="">Select</option>
            <option value="youtube">YouTube</option>
            <option value="udemy">Udemy</option>
            <option value="coursera">Coursera</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="font-bold">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50"
            required
          >
            <option value="">Select</option>
            <option value="started">Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="font-bold">Hours</label>
          <input
            type="number"
            name="hours"
            value={form.hours}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50"
            min="0"
          />
        </div>

        <div>
          <label className="font-bold">Difficulty (1–5)</label>
          <input
            type="number"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50"
            min="1"
            max="5"
          />
        </div>

        <div>
          <label className="font-bold">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl border-[#007c83] bg-white/50"
            rows="3"
          />
        </div>

        <button className="w-full bg-[#007c83] text-white p-2 rounded-xl border-[#007c83] hover:bg-[#00666b] cursor-pointer">
          Update Skill
        </button>
      </form>
    </div>
  );
}

export default EditSkill;
