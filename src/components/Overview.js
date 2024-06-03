import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Styles } from '../utils/Style';
import { technologies, services } from '../constants';
//import { motion } from 'framer-motion'; //react library
import './style.css';
import { Link } from 'react-scroll';

function Overview() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Overview'>
        <span className={Styles.sectionHeadText}>
            Introduction
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
        <span className='sectionhead'>
        I am Working a as Sr. Software Engineer at Wipro Ltd, Where I work on a Product that have helped over 20 million <br/>
        clients all over the Globe to gain access on Health care services.<br/>
        Before Wipro, I was working at Paytm as a Associate software developer helped Clients to Integrate Paytm Payment <br/>
        gateway on multiple languages (Java, PhP, Python, Javascript) as per the Client needs.<br/>
        In my spare time, I enjoy investing in people and ideas. I am particularly interested in projects by which I can <br/> 
        learn something new. If you think I can be helpful to you or your cause and would like to meet, Please feel free to 
        </span>
        <Link spy={true} to='Contact'><span className='highlight'> Contact Us</span>.</Link>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {services.map ((services) => (
            <div>
                <Tilt
                    key = {services.icon}
                    className ="parallax-effect-glare-scale"
                    prespective={500}
                    glareColor="fed7aa"
                    glareEnable={true}
                    glareMaxOpacity={0.50}
                    scale={1.02}
                    gyroscope={true}>
                    <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                        <img className='h-[100px] w-[100px]' src={services.icon} alt={services.title}/>
                        <div className='m-5 text-violet-500'>
                            {services.title}
                        </div>
                    </div>
                </Tilt>
            </div>
        ))

        }
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {technologies.map((technology) =>(
          <div
            key={technology.name}
            className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 
            hover:shadow-orange-300'
            >
            <img className='p-2' src={technology.icon} alt={technology.name}/>
            <div className='text-violet-600 justify-center flex'>
            {technology.name}
            </div>
          </div>
          
        )
        )}

      </div>
    </div>
  )
}

export default Overview
