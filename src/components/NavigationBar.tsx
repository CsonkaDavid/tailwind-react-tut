import './design/NavigationBar.css'
import { BiHomeAlt } from 'react-icons/bi'
import { VscGithub } from 'react-icons/vsc'
import { SiVite, SiTailwindcss, SiFramer } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'

function NavigationBar() {
  return (
    <div className='fixed flex flex-row justify-center text-gray-300 text-lg h-[4em] w-full whitespace-nowrap bg-navigationBackgroundColor z-50'>
      <table>
        <tr className='w-full h-fit'>
          <td>
            <NavigationButton label='Home' animationDelay={0.1} icon={<BiHomeAlt size={26} />} />
          </td>
          <td>
            <NavigationButton label='React' animationDelay={0.2} icon={<FaReact size={26} />} />
          </td>
          <td>
            <NavigationButton label='Tailwind' animationDelay={0.3} icon={<SiTailwindcss size={26} />} />
          </td>
          <td>
            <NavigationButton label='Framer Motion' animationDelay={0.4} icon={<SiFramer size={26} />} />
          </td>
          <td>
            <NavigationButton label='Vite' animationDelay={0.5} icon={<SiVite size={26} />} />
          </td>
          <td>
            <NavigationButton label='Github' animationDelay={0.5} icon={<VscGithub size={26} />} />
          </td>
        </tr>
      </table>
    </div>
  )
}

function NavigationButton({ label, icon, animationDelay }: { label: string, icon: ReactElement, animationDelay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: animationDelay, ease: [0, 0.71, 0.2, 1.01] }}>
      <div className='w-fit'>
        <div className='w-fit mx-[2em] hover:text-white group'>
          <div>
            <span className='navigation-icon text-white text-xs group-hover:scale-100'>
              {icon}
            </span>
          </div>
          <div className='px-[2em]'>
            <button>
              {label}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NavigationBar