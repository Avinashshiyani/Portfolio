import React from 'react';
import Music from '../assets/music.png';
import Bulb from '../assets/lightbulb.png';
import AboutImg from '../assets/about.png';
import UpArrow from '../assets/upperarrow.png'

const About = () => {
    return (
        <div className='flex justify-between '>
            <div className='grid items-center   w-full'>
                <div className='grid  text-[66px] space-y-[60px]'>
                    <div className=''>
                        <img src={Music} alt="" />
                    </div>
                    <div className='grid'>
                        <div className='flex'>
                            <span className='text-white font-bold'>About</span>
                            <span className='text-secondary font-bold'>&nbsp;Me</span>
                            <span className='pl-[26px]'>
                                <img src={Bulb} alt="" />
                            </span>
                        </div>
                        <div className='flex items-center justify-center max-w-[350px]'>
                            <span className='text-white text-[18px] '>
                                Welcome to my portfolio! I am a web developer with a passion for creating elegant front-end designs and robust MERN stack systems. I thrive on transforming complex challenges into seamless user experiences. Let's create something amazing together!
                            </span>
                        </div>
                    </div>

                    <div className='flex pl-[161px]'>
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className=' w-full grid  justify-end items-center '>
                <img src={AboutImg} alt="" className='w-[550px] h-[450px]' />
            </div>
        </div>
    )
}

export default About