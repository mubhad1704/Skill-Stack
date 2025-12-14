import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import API from "../api";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditSkill from "./EditSkill";

function SkillList() {
  const [skills, setSkills] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxHeight: "80vh",
    overflowY: "auto", 
    bgcolor: "#d0f8fa", 
    boxShadow: 24,
    p: 4,
    borderRadius: "12px"
  };

  const loadSkills = async () => {
    const result = await API.get("/skills");
    setSkills(result.data);
  };

  const deleteSkill = async (id) => {
    await API.delete(`/skills/${id}`);
    loadSkills();
  };

  useEffect(() => {
    loadSkills();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-[#e7f1f5] via-[#c5f3ffe1] to-[#b2dfeb]">
      <Navbar />

      <h1 className="text-center my-5 text-3xl md:text-4xl font-bold md:mt-10">
        Your Learning{" "}
        <span className="bg-linear-to-b from-[#00a2aad0] via-[#007e85d0] to-[#004c50d0]  bg-clip-text text-transparent">
          Goals
        </span>
      </h1>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="border-2 p-5 rounded-xl border-[#00acb5] shadow-md shadow-[#00acb5a6] max-w-xs md:w-sm bg-linear-to-b from-[#00acb50c] via-[#01bbc513] to-[#00acb538]"
            >
              <div className="flex justify-between border-b border-[#007b81]">
                <h3 className="text-left font-bold text-[#004c50] text-lg md:text-xl ">
                  {skill.skill_name}
                </h3>
                <div className="flex ">
                  <button
                    className="text-xl cursor-pointer"
                    onClick={() => handleOpen(skill.id)}
                  >
                    <MdEdit />
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight: "bold",mb: 2,color: "#007c83" }}
                      >
                        UPDATE
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <EditSkill
                          skillId={selectedId}
                          onSuccess={() => {
                            handleClose();
                            loadSkills();
                          }}
                        />
                      </Typography>
                    </Box>
                  </Modal>

                  <button
                    className="text-xl text-[#f50000ab] cursor-pointer"
                    onClick={() => deleteSkill(skill.id)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
              <div className="space-y-2 mt-3">
                <p>
                  <strong>Type</strong> <span>➙</span> {skill.resource_type}
                </p>
                <p>
                  <strong>Platform</strong> <span>➙</span> {skill.platform}
                </p>
                <p>
                  <strong>Status</strong> <span>➙</span> {skill.status}
                </p>
                <p>
                  <strong>Hours</strong> <span>➙</span> {skill.hours}
                </p>
                <p>
                  <strong>Difficulty</strong> <span>➙</span> {skill.difficulty}
                </p>
                <p>
                  <strong>Notes</strong> <span>➙</span> {skill.notes}
                </p>
              </div>
            </div>
          ))}

          {skills.length === 0 && <p>No Skills added yet.</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SkillList;
