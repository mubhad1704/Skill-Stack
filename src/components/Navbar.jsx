import React from 'react'

function Navbar() {
  return (
    <nav className='bg-linear-to-b from-[#777c86] via-[#4c5058] to-[#393E46] shadow-md p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold text-[#EEEEEE]'>
            Skill<span className='text-[#00ADB5]'>Stack</span>
        </h1>

        <div className="hidden  sm:block space-x-10 text-[#EEEEEE]">
            <a href="/" className=' hover:text-[#00ADB5]'>Home</a>
            <a href="/dashboard" className=' hover:text-[#00ADB5]'>Dashboard</a>
            <a href="/add" className=' hover:text-[#00ADB5]'>Add Skills</a>
            <a href="/skills" className=' hover:text-[#00ADB5]'>View Skills</a>
        </div>

        <div className='hidden sm:block'>
            <a href='' className='text-[#00a5ade5]'>About</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
