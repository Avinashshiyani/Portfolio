import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between py-[48px]'>
            <div className='flex items-center text-white font-bold text-[24px] text-nowrap'>
                Avinash Shiyani
            </div>
            <div className='flex items-center space-x-[48px] text-white text-[18px]'>
                <span>Home</span>
                <span>About Me</span>
                <span>Contact</span>
            </div>
        </div>
    )
}

export default Navbar