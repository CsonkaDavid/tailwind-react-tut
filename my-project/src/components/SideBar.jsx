import { motion } from 'framer-motion';
import React from 'react'
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiFramer} from 'react-icons/si';
import './SideBar.css'

function SideBar() {
  return (
    <div className='fixed left-0 h-fit w-16 flex flex-col bg-transparent mt-[20vh] ml-20'>
        <SideBarIcon icon={<FaReact size={26}/>} text='ReactJS' customClass='react-nav-icon'/>
        <SideBarIcon icon={<SiTailwindcss size={26}/>} text='TailwindCSS' customClass='tailwind-nav-icon'/>
        <SideBarIcon icon={<SiFramer size={26}/>} text='Framer Motion' customClass='framer-nav-icon'/>
    </div>
  )
}

function SideBarIcon({icon, text = 'tooltip', customClass}) {
    return(
        <motion.div
            className='motion-button'
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>

            <div className='sidebar-icon mt-auto mb-auto group'>
                <div className={customClass}>
                    {icon}
                </div>
                <span className='sidebar-tooltip group-hover:scale-100'>
                    {text}
                </span>
            </div>
        </motion.div>
    );
}

export default SideBar;