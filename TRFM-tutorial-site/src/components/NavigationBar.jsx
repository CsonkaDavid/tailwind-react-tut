import React from 'react'
import './design/NavigationBar.css'
import {BiHomeAlt} from 'react-icons/bi'
import {VscGithub} from 'react-icons/vsc'
import {SiTailwindcss ,SiFramer} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {motion} from 'framer-motion'

function NavigationBar() {
  return (
    <div className='w-full text-gray-300 mt-[2em] mb-[2em] text-lg'>
      <table>
        <tr className='w-full h-fit'>
          <td>
            <NavigationButton label='Home' animationDelay={0.3} icon={<BiHomeAlt size={26}/>}/>
          </td>
          <td>
            <NavigationButton label='React' icon={<FaReact size={26}/>}/>
          </td>
          <td>
            <NavigationButton label='Tailwind' icon={<SiTailwindcss size={26}/>}/>
          </td>
          <td>
            <NavigationButton label='Framer Motion' icon={<SiFramer size={26}/>}/>
          </td>
          <td>
            <NavigationButton label='Github' icon={<VscGithub size={26}/>}/>
          </td>
        </tr>
      </table>
    </div>
  )
}

function NavigationButton({label, icon, animationDelay}) {
  return(
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{duration: 0.4, delay:animationDelay, ease: [0, 0.71, 0.2, 1.01]}}>
      <div className='w-fit'>
        <div className='navigation-button group'>
          <div>
            <span className='navigation-icon group-hover:scale-100'>
              {icon}
            </span>
          </div>
          <div className='pl-10'>
            <button className=' border-b-[0.1em] rounded-sm'>
                {label}
            </button>
          </div>
        </div>     
      </div>
    </motion.div>
  );
}

export default NavigationBar