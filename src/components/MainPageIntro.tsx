import { motion } from 'framer-motion'
import './design/MainPageIntro.css'

function MainPageIntro() {
    return (
        <motion.div className='text-4xl font-bold w-[30em] h-fit mt-[12vh] border-l-2 py-[3vh]  ml-[15vw]'
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0.8, 0.4, 0.9] }}
        >
            <div className='ml-[3em]'>
                <MainPageIntroText
                    text='This website was made as a "self-teaching" project about frontend development.'
                    animationDelay={1.2}
                    mb='[3em]' />
                <MainPageIntroText
                    text='The goal was to grasp the basics of many different frameworks used in the making of modern frontend applications.'
                    animationDelay={1.7}
                    mb='[3em]' />
                <MainPageIntroText
                    text='The first result with a public repository is this website.'
                    animationDelay={2.2}
                    mb='0' />
            </div>
        </motion.div>
    )
}

function MainPageIntroText({ text, animationDelay, mb }: { text: string, animationDelay: number, mb: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: animationDelay, ease: [0.2, 0.8, 0.4, 0.9] }}>

            <p className={'mb-' + mb} > {text} </p>
        </motion.div>
    );
}

export default MainPageIntro