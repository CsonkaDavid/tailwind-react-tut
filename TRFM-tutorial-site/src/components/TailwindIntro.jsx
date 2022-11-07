import React from 'react'
import {SiTailwindcss} from 'react-icons/si'

function TailwindIntro() {
  return (
    <div>
        <p className='flex'>
            <div className='my-auto mr-5 mb-[2.4em] text-blue-400'>
                <SiTailwindcss size={40}/>
            </div>
            <div>
                Tailwind CSS 
            </div> 
        </p>
    </div>
  )
}

export default TailwindIntro