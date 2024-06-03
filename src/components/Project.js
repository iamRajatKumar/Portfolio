
import React from 'react'
import { Styles } from '../utils/Style';
import {projects} from '../constants';
import Tilt from 'react-parallax-tilt';
import { SiGithub, SiNetlify } from 'react-icons/si';
import './style.css'

function Project() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Project'>
        <span className={Styles.sectionHeadText}>
            Projects
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
        <span className='sectionhead'>
        I have developed Some Projects for Self and Some for Clients as well, If you have any Ideas and need help in <br/> 
        Project/Product Development. Just send us your query on contact us down below, I will be Glad to connect with you.
        </span>
        </div>
      </div>
      <div className='flex flex-wrap p-8 justify-evenly items-center'>
        {projects.map((project) => 
        (
            <Tilt
            key={project.name}
            className='w-[300px] h-[500px] flex-col flex justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400
            shadow-pink-300 p-5 rounded-xl border-2 border-violet-200'>
                <div>
                    <div className='flex justify-center items-center mb-3'>
                        <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                        flex justify-center items-center'>
                            <a href={project.source_deploy_link} target='blank'>
                                <SiNetlify className='text-3xl font-bold text-violet-600'></SiNetlify>
                            </a>
                        </div>
                        <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                        flex justify-center items-center'>
                            <a href={project.source_code_link} target='blank'>
                                <SiGithub className='text-3xl font-bold text-violet-600'></SiGithub>
                            </a>
                        </div>
                    </div>
                    <img src={project.image} alt={project.name} className=' h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl'/>
                    <div className='text-center text-2xl pt-2 title'>
                        {project.name}
                    </div>
                    <div className='text-center pt-2'>
                        <span className='pdescription'>
                            {project.description}
                        </span>
                    </div>           
                </div>
            </Tilt>
        )
        )}
      </div>
    </div>
  )
}

export default Project
