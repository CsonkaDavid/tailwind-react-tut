import { FaReact } from 'react-icons/fa'
import { SiFramer } from 'react-icons/si'
import '../../design/TechIntro.css'
import GradientIcon from '../../GradientIcon'
import NoreferrerLink from '../../NoreferrerLink'
import SpringMotionDiv from '../../SpringMotionDiv'

function FramerMotionIntro() {
	return (
		<SpringMotionDiv yOff={'57vh'} yOn={'-10vh'} duration={0.8} bounce={0.2} viewPortOnce={true}
			nestedElement={
				<div className='tech-intro mr-[10vw]'>
					<div className='py-[3vh] px-[2vw]'>
						<p className='mr-[11vw] text-[4vw] text-purple-500 font-bold whitespace-nowrap'>Framer Motion</p>
						<p>A production-ready motion library for React.</p>
						<p>Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.</p>
						<p>Official documentation and tutorials can be found here:
						</p>
						<div className='w-fit text-[#9333ea] hover:text-[#d946ef]'>
							<NoreferrerLink link={'https://www.framer.com/motion/'}
								nestedElement={
									' framer.com/motion'
								}
							/>
						</div>
					</div>
					<div className='pt-[10vh]'>
						<GradientIcon startColor={'#c026d3'} endColor={'#7e22ce'} gradientID={'framericon'} offset='l'
							nestedElement={<SiFramer size={'30vw'} />} />
					</div>
				</div>
			}
		/>
	)
}

export default FramerMotionIntro