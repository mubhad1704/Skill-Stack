import React from 'react'

function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#393E46] via-[#2b2d31] to-[#1d2024]  py-4 mt-10 ">
      <div className="max-w-7xl mx-auto text-center text-[#EEEEEE] text-sm">
        &copy; {new Date().getFullYear()} SkillStack. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
