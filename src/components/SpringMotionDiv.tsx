import { motion, Variants } from 'framer-motion'
import { ReactElement } from 'react';

function SpringMotionDiv(
    { yOff, yOn, duration, bounce, viewPortOnce, nestedElement }:
        { yOff: any, yOn: any, duration: number, bounce: number, viewPortOnce: boolean, nestedElement: ReactElement }) {

    const textScrollMotionVariants: Variants = {
        offscreen: {
            y: yOff
        },
        onscreen: {
            y: yOn,
            transition: {
                type: "spring",
                bounce: bounce,
                duration: duration
            }
        }
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: viewPortOnce }}
            variants={textScrollMotionVariants}
        >
            {nestedElement}
        </motion.div>
    );
}

export default SpringMotionDiv