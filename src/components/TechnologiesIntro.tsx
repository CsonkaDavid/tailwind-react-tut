import { motion, Variants } from "framer-motion"

function TechnologiesIntro() {
  const textScrollMotionVariants: Variants = {
    offscreen: {
      y: '20vh'
    },
    onscreen: {
      y: '-20vh',
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      variants={textScrollMotionVariants}
    >
      <div className='flex text-4xl font-bold w-fit px-[5em] h-fit min-h-[50vh] ml-[15vw] mt-[20vh] justify-center'>
        <p>
          The site was made with different technologies and frameworks during development:
        </p>
      </div>
    </motion.div >
  )
}

export default TechnologiesIntro