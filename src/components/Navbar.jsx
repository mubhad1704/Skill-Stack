import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function Navbar() {

  const title = "SkillStack is a personal skill-building tracker for courses, tutorials, and certifications."

  return (
    <nav className=' bg-linear-to-b from-[#42454b] via-[#282a2e] to-[#17191d] shadow-md p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-2'>
          <img className='w-8 h-8 mb-1' src="logo.png" alt="" />
        <h1 className='text-xl font-bold text-[#EEEEEE]'>
            Skill<span className='text-[#00ADB5]'>Stack</span>
        </h1>
        </div>

        <div className="hidden text-sm sm:block space-x-8 text-[#EEEEEE]">
            <a href="/" className=' hover:text-[#00ADB5]'>Home</a>
            <a href="/dashboard" className=' hover:text-[#00ADB5]'>Dashboard</a>
            <a href="/add" className=' hover:text-[#00ADB5]'>Add Skills</a>
            <a href="/skills" className=' hover:text-[#00ADB5]'>View Skills</a>
        </div>

        <div className='hidden sm:block'>
          <Tooltip title={title}>
              <a href='' className='text-[#00a5ade5]'>About</a>
          </Tooltip>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
