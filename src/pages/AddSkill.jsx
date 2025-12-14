import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AddSkill() {
  return (
    <div className='min-h-screen bg-cover bg-center' style={{backgroundImage:"url('/skillsbg.jpg')"}}>
      <Navbar/>
        <div className='flex-1 flex flex-col justify-center items-center mt-10 '>
          <h1 className='text-3xl md:text-4xl font-bold mb-5'>Add Learning <span className="bg-linear-to-b from-[#00a2aad0] via-[#007e85d0] to-[#004c50d0]  bg-clip-text text-transparent">Goal</span></h1>
          <div className='border-2 border-[#00acb5] shadow-md shadow-[#00acb5a6] p-5 rounded-xl bg-white/30 m-3'>
            <form className='space-y-4'>

            <div className='flex flex-col'>
              <label className='font-bold text-[#00595e] md:text-lg'>Skill Name</label>
              <input type="text"
                name='skill_name'
                placeholder='Ex: React, Python...'
                className='border border-[#007c83] p-2 rounded-xl bg-white/20'
              />
            </div>

            <div>
              <label className='font-bold text-[#00595e] md:text-lg'>Resource Type</label>
              <select name="resource_type" id="" className='bg-white/20 border border-[#007c83] p-2 rounded-xl ms-3'>
                <option value="">Select one</option>
                <option value="video">Video</option>
                <option value="course">Course</option>
                <option value="article">Article</option>
              </select>
            </div>

            <div>
              <label className='font-bold text-[#00595e] md:text-lg'>Select Platform</label>
              <select name="platform" id="" className='border bg-white/20 border-[#007c83] p-2 rounded-xl ms-3'>
                <option value="">Select platform</option>
                <option value="youTube">YouTube</option>
                <option value="udemy">Udemy</option>
                <option value="coursera">Coursera</option>
                <option value="other">Others</option>
              </select>
            </div>

            <div>
              <label className='font-bold text-[#00595e] md:text-lg'>Status</label>
              <select name="status" id=""className='border border-[#007c83] p-2 rounded-xl ms-3 bg-white/20'>
                <option value="" >Select status</option>
                <option value="started">Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

             <div>
              <label className='font-bold text-[#00595e] md:text-lg'>Hours Spent</label>
              <input type="number" name='hours' placeholder='Ex: 4' min="0" className='border border-[#007c83] p-2 rounded-xl ms-3 bg-white/20'/>
            </div>

             <div>
              <label className='font-bold text-[#00595e] md:text-lg'>Difficulty Rating</label>
              <input type="number" name='difficulty' placeholder='1-Easy, 5-Hard' min="1" max="5" className='border border-[#007c83] p-2 rounded-xl ms-3 w-36 bg-white/20' />
            </div>

            <div className='flex flex-col'>
              <label className='font-bold text-[#00595e] md:text-lg'>Notes</label>
              <textarea name="notes" id="" rows="4" placeholder='Notes...' className='border border-[#007c83] p-2 rounded-xl bg-white/20 '></textarea>
            </div>

            <button className='text-white border bg-[#007c83] border-[#007c83] p-2 rounded-xl cursor-pointer w-full hover:bg-[#007d83c5]'>
              Add Skill
            </button>

            

          </form>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AddSkill
