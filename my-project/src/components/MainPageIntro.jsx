import React from 'react'
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiFramer} from 'react-icons/si';

function MainPageIntro() {
  return (
    <div>
        <p>
            This website was made with the following technologies:
            </p>
                <p className='flex'>
                    <div className='my-auto mr-3 text-cyan-400'>
                        <FaReact size={40}/>
                    </div>
                    <div>
                        React JS 
                    </div> 
                </p>
                <p className='flex'>
                    <div className='my-auto mr-3 text-blue-400'>
                        <SiTailwindcss size={40}/>
                    </div>
                    <div>
                        Tailwind CSS 
                    </div> 
                </p>
                <p className='flex'>
                    <div className='my-auto mr-3 text-purple-400'>
                        <SiFramer size={40}/>
                    </div>
                    <div>
                        Framer Motion 
                    </div> 
            </p>
    </div>
  )
}

export default MainPageIntro