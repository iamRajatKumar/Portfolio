import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { GrGithub, GrInstagram, GrLinkedinOption, GrMailOption } from 'react-icons/gr';
import './style.css';

function Footer() {
  return (
    <div>
      <div className='w-[screen] bg-[#040b14] py-2.5'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
        <a href='https://www.linkedin.com/in/i-am-rajat-kumar' target='blank' className='text-lg flex flex-row text-yellow-300'>
            <div className='h-[30px] w-[40px] rounded-full flex justify-center items-center bg-[#415ae8]'>
                <GrLinkedinOption className='text-white'></GrLinkedinOption>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>
                linkedin
            </span>
        </a>
        
        <a href='mailto:rohit.r.sharma2@gmail.com' target='blank' className='text-lg flex flex-row text-yellow-300'>
            <div className='h-[30px] w-[40px] rounded-full flex justify-center items-center bg-[#F04235]'>
                <GrMailOption className='text-white'></GrMailOption>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>
                Email
            </span>
        </a>
        
        <a href='https://github.com/rajat2222' target='blank' className='text-lg flex flex-row text-yellow-300'>
            <div className='h-[30px] w-[40px] rounded-full flex justify-center items-center bg-[#808080]'>
                <GrGithub className='text-white'></GrGithub>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>
                Github
            </span>
        </a>
        
        <a href='tel:+917007417252' target='self' className='text-lg flex flex-row text-yellow-300'>
            <div className='h-[30px] w-[40px] rounded-full flex justify-center items-center bg-[#2CBB00]'>
                <BiSolidPhoneCall className='text-white'></BiSolidPhoneCall>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>
                7007417252
            </span>
        </a>

        <a href='https://www.instagram.com/iamrajatsharma__/' target='blank' className='text-lg flex flex-row text-yellow-300'>
            <div className='h-[30px] w-[40px] rounded-xl flex justify-center items-center instagram'>
                <GrInstagram className='text-white'></GrInstagram>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>
                Instagram
            </span>
        </a>
        </div>

        <div className="credits">
        Designed by <a href="https://www.linkedin.com/in/rajat-kumar-86323512b/" className='hover:shadow-orange-300'>Rajat Kumar </a>
            <br/>
            &copy; Copyright 2024-25
        </div>

      </div>
    </div>
  )
}

export default Footer
