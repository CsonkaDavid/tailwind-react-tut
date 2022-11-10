import { motion, Variants } from 'framer-motion'

export function MainPageIntro() {
    return (
        <motion.div className='relative text-4xl font-bold w-[34em] h-fit min-h-[50vh] py-[2vh] ml-[15vw] z-0 border-b-2 pb-[4em]'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.2, 0.8, 0.4, 0.9] }}
        >
            <div className='ml-[2em]'>
                <div className='mb-[3em]'>
                    <InAnimateTextDiv
                        text='This website was made as a "self-teaching" project about frontend development.'
                        animationDelay={1.5} />
                </div>
                <div className='mb-[3em]'>
                    <InAnimateTextDiv
                        text='The goal was to grasp the basics of many different frameworks used in the making of modern frontend applications.'
                        animationDelay={1.9} />
                </div>
                <div>
                    <InAnimateTextDiv
                        text='The first result with a public repository is this website.'
                        animationDelay={2.2} />
                </div>
            </div>
        </motion.div>
    )
}

function InAnimateTextDiv({ text, animationDelay }: { text: string, animationDelay: number }) {
    const textScrollOutMotionVariants: Variants = {
        offscreen: {
            y: '-25vh'
        },
        onscreen: {
            y: '10vh',
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: animationDelay, ease: [0.2, 0.8, 0.4, 0.9] }}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                variants={textScrollOutMotionVariants}
            >
                <p> {text} </p>
            </motion.div>
        </motion.div>
    );
}