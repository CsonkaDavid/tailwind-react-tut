import React from 'react'
import {motion} from 'framer-motion'
import './design/MainPageIntro.css'

function MainPageIntro() {
  return (
        <div className='text-4xl font-bold w-[30em] h-fit mt-[3.5em]'>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration: 1, delay: 1.2, ease: [0.2, 0.8, 0.4, 0.9]}}>

                <p className='mb-[3em]'>
                    This website was made as a "self-teaching learning" project about frontend development.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration: 1, delay: 2, ease: [0.2, 0.8, 0.4, 0.9]}}>

                <p className='mb-[3em]'>
                    The goal was to grasp the basics of many different frameworks used in the making of modern frontend applications.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration: 1, delay: 2.8, ease: [0.2, 0.8, 0.4, 0.9]}}>

                <p>
                    The first result with a public repository is this website.
                </p>
            </motion.div>
        </div>   
  )
}

export default MainPageIntro