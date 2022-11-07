import React from 'react'
import {SiFramer} from 'react-icons/si'

function FramerMotionIntro() {
  return (
    <div>
        <p className='flex'>
            <div className='my-auto mr-5 text-purple-400'>
                <SiFramer size={40}/>
            </div>
            <div>
                Framer Motion 
            </div> 
        </p>
    </div>
  )
}

export default FramerMotionIntro