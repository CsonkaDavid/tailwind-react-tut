import { motion } from 'framer-motion'

function MainPageIntro() {
    return (
        <motion.div className='text-4xl font-bold w-[34em] h-fit min-h-[50vh] border-l-2 py-[2vh] ml-[15vw] mt-[10vh]'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.2, 0.8, 0.4, 0.9] }}
        >
            <div className='ml-[2em]'>
                <MainPageIntroText
                    text='This website was made as a "self-teaching" project about frontend development.'
                    animationDelay={1.6}
                    marginBottom='[3em]' />
                <MainPageIntroText
                    text='The goal was to grasp the basics of many different frameworks used in the making of modern frontend applications.'
                    animationDelay={1.9}
                    marginBottom='[3em]' />
                <MainPageIntroText
                    text='The first result with a public repository is this website.'
                    animationDelay={2.2}
                    marginBottom='0' />
            </div>
        </motion.div>
    )
}

function MainPageIntroText({ text, animationDelay, marginBottom }: { text: string, animationDelay: number, marginBottom: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: animationDelay, ease: [0.2, 0.8, 0.4, 0.9] }}>

            <p className={'mb-' + marginBottom} > {text} </p>
        </motion.div>
    );
}

export default MainPageIntro