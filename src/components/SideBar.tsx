import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiFramer } from 'react-icons/si';
import './design/SideBar.css'

export function SideBar() {
    return (
        <div className='sidebar'>
            <SideBarIcon icon={<FaReact size={26} />} tooltip='React' animationDelay={0.7} customClass='react-nav-icon' />
            <SideBarIcon icon={<SiTailwindcss size={26} />} tooltip='Tailwind' animationDelay={0.8} customClass='tailwind-nav-icon' />
            <SideBarIcon icon={<SiFramer size={26} />} tooltip='Framer Motion' animationDelay={0.9} customClass='framer-nav-icon' />
            <SideBarIcon icon={<SiVite size={26} />} tooltip='Vite' animationDelay={1} customClass='vite-nav-icon' />
        </div>
    )
}

function SideBarIcon(
    { icon, tooltip = 'tooltip', animationDelay, customClass }:
        { icon: ReactElement, tooltip: string, animationDelay: number, customClass: string }) {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: animationDelay, ease: [0, 0.71, 0.2, 1.01] }}>

            <div className='sidebar-button group'>
                <div className={customClass + ' p-0 m-0 w-full h-full flex items-center justify-center rounded-full text-9xl'}>
                    {icon}
                </div>
                <span className='sidebar-tooltip group-hover:scale-100 w-fit'>
                    {tooltip}
                </span>
            </div>
        </motion.div>
    );
}