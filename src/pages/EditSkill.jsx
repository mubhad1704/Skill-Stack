import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

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

  const loadSkill = async () => {
    if (!skillId) return;

    try {
      const res = await API.get(`/skills/${skillId}`);
      const skill = res.data;

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
    } catch (err) {
      console.error(err);
      alert("Failed to load skill");
    }
  };


  useEffect(() => {
    setLoading(true)
    loadSkill();
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

      alert("Skill updated successfully!");
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to update skill");
    }
  };

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  return (
  <div>
    {loading && ( 
      <p>Loading...</p>
    )}
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="font-bold">Skill Name</label>
        <input
          type="text"
          name="skill_name"
          value={form.skill_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="font-bold">Resource Type</label>
        <select
          name="resource_type"
          value={form.resource_type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
          
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
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
          rows="3"
        />
      </div>

      <button className="w-full bg-[#007c83] text-white p-2 rounded hover:bg-[#00666b]">
        Update Skill
      </button>
    </form>
  </div>
  
)}

export default EditSkill;
