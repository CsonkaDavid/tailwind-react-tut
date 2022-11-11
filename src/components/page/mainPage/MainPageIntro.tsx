import { motion } from 'framer-motion'

export function MainPageIntro() {
    return (
        <motion.div className='relative text-4xl font-bold py-[2vh] pb-[3em] z-0'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.2, 0.8, 0.4, 0.9] }}
        >
            <div>
                <div className='mb-[15vh]'>
                    <OnOffAnimatedText
                        text='This website was made as a "self-teaching" project about frontend development.'
                        animationDelay={1.5} />
                </div>
                <div className='mb-[15vh]'>
                    <OnOffAnimatedText
                        text='The goal was to grasp the basics of many different frameworks used in the making of modern frontend applications.'
                        animationDelay={1.9} />
                </div>
                <div>
                    <OnOffAnimatedText
                        text='The first result with a public repository is this website.'
                        animationDelay={2.2} />
                </div>
            </div>
        </motion.div>
    )
}

function OnOffAnimatedText({ text, animationDelay }: { text: string, animationDelay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: animationDelay, ease: [0.2, 0.8, 0.4, 0.9] }}>

            <div>
                <p> {text} </p>
            </div>
        </motion.div >
    );
}