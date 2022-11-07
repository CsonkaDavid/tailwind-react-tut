import { motion } from 'framer-motion';
import React from 'react'
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiFramer} from 'react-icons/si';
import './design/SideBar.css'

export function SideBar() {
  return (
    <div className='sidebar'>
        <SideBarIcon icon={<FaReact size={26}/>} text='React' customClass='react-nav-icon'/>
        <SideBarIcon icon={<SiTailwindcss size={26}/>} text='Tailwind' customClass='tailwind-nav-icon'/>
        <SideBarIcon icon={<SiFramer size={26}/>} text='Framer Motion' customClass='framer-nav-icon'/>
    </div>
  )
}

export function SideBarIcon({icon, text = 'tooltip', customClass}) {
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 1, delay: 0.4, ease: [0, 0.71, 0.2, 1.01]}}>

            <div className='sidebar-button mt-auto mb-auto group'>
                <div className={customClass + ' p-0 m-0 w-full h-full flex items-center justify-center rounded-full text-9xl'}>
                    {icon}
                </div>
                <span className='sidebar-tooltip group-hover:scale-100'>
                    {text}
                </span>
            </div>
        </motion.div>
    );
}