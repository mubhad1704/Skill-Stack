import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

function SkillList() {
  return (
    <div className='min-h-screen flex flex-col bg-cover bg-center' style={{backgroundImage:"url('/bg2.jpg')"}}>
      <Navbar/>

      <h1 className='text-center my-5 text-3xl md:text-4xl font-bold md:mt-10'>Your Learning <span className="bg-linear-to-b from-[#00a2aad0] via-[#007e85d0] to-[#004c50d0]  bg-clip-text text-transparent">Goals</span></h1>
      <div className='flex-1 flex flex-col justify-center items-center'>
          

          <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6 p-3'>
            <div className='border-2 p-5 rounded-xl border-[#00acb5] shadow-md shadow-[#00acb5a6] max-w-xs md:w-sm'>
              <div className='flex justify-between border-b border-[#007b81]'>
                <h3 className='text-center font-bold text-[#004c50] text-lg md:text-xl '>skillname</h3>
                <div className='flex'>
                  <button className='text-xl cursor-pointer'><MdEdit /></button>
                  <button className='text-xl text-[#f50000ab] cursor-pointer'><MdDeleteForever /></button>
                </div>

              </div>
              <div className='space-y-2 mt-3'>
                <p><strong>Type:</strong> resource_type</p>
              <p><strong>Platform:</strong> platform</p>
              <p><strong>Status:</strong> status</p>
              <p><strong>Hours:</strong> hours</p>
              <p><strong>Difficulty:</strong> difficulty</p>
              <p><strong>Notes:</strong> notes</p>
              </div>
              
            </div>
           
          </div>

      </div>

      <Footer/>
    </div>
  )
}

export default SkillList
