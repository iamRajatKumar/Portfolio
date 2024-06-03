import React from 'react'
import Profile from '../assets/testpic.png'
import { Styles } from '../utils/Style'
import Resume from '../assets/resume.pdf'
import { TiArrowDownOutline } from 'react-icons/ti'
import '../App.css';
import './style.css'

function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
      
      <div className='flex-1 py-4'>
        <span className={Styles.heroHeadText}> 
            Hi, I'm <span className='text-orange-600' >
Rajat            
            </span>
            <br/>
            <span className={Styles.heroSubText}>
            React Js Developer & Web Designer
            </span>
        </span>
        <br/>
        <p className='text-violet-600'>Developing Software for Personal Use and Client's as well, <br/>
        & Also Working in <span className='wipro'>Wipro</span>, As a Senior Sorftware Engineer.</p>
        <div className='w-[14rem] pt-4'>
        <a 
        href={Resume} 
        download="Resume"
        target='blank'
        rel="noreferrer"
        >
          <div className=' p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 '>
            <TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500'></TiArrowDownOutline>
            Resume
          </div>
        </a>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <img src={Profile} alt='Profile' className='element object-contain p-4' />
      </div>
    </div>
  )
}

export default About
