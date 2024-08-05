import React from 'react';
import DribbleDownArrow from '../assets/downdribble.png';
import Avatar from '../assets/mainAvatar.png';
import { twMerge } from 'tailwind-merge';
const Body = () => {
    return (
        <div className='flex justify-between '>
            <div className='grid  items-center w-full'>
                <div className='flex'>
                    <div >
                        <img src={DribbleDownArrow} className='-rotate-[9deg] mt-[60px]' />
                    </div>
                    <div className='grid'>
                        <div className=' grid -space-y-[30px] font-bold text-[70px]'>
                            <span className='text-white'>Creative </span>
                            <span className='text-white'>Web </span>
                            <span className='text-secondary'>Developer</span>
                        </div>
                        <div className='flex space-x-[24px] pt-[18px]'>
                            <Button>Hire me</Button>
                            <Button type="secondary">Download CV</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-end  w-full'>
                <img src={Avatar} className='h-[550px]' />
            </div>
        </div>
    )
}

export default Body ;
export {Button};

const Button = ({ children = "Button", type = "primary" }) => {
    return (
        <button className={twMerge("text-[18px] font-bold text-white py-[8px] px-[32px] bg-secondary rounded-[24px]", type == "secondary" && "bg-[#393E46]")}>
            <span className=''>
                {children}
            </span>
        </button>
    )
}