import { SiVite } from 'react-icons/si';
import GradientIcon from '../../GradientIcon'
import NoreferrerLink from '../../NoreferrerLink'
import SpringMotionDiv from '../../SpringMotionDiv'

function ViteIntro() {
    return (
        <SpringMotionDiv yOff={'57vh'} yOn={'-10vh'} duration={0.8} bounce={0.2} viewPortOnce={true}
            nestedElement={
                <div className='tech-intro flex-row-reverse'>
                    <div className='py-[0.5em] px-[1em]'>
                        <p className='mr-[8.3em] text-[2em] text-yellow-500 font-bold'>Vite</p>
                        <p>Next Generation Frontend Tooling</p>
                        <p>Get ready for a development environment that can finally catch up with you.</p>
                        <p>Official documentation and tutorials can be found here:</p>
                        <div className='w-fit text-[#f59e0b] hover:text-[#facc15]'>
                            <NoreferrerLink link={'https://vitejs.dev/'}
                                nestedElement={
                                    'vitejs.dev'
                                } />
                        </div>
                    </div>
                    <div className='pt-[5vh]'>
                        <GradientIcon startColor={'#fcd34d'} endColor={'#eab308'} gradientID={'viteicon'} offset='r'
                            nestedElement={<SiVite size={'15em'} />} />
                    </div>
                </div>
            }
        />
    )
}

export default ViteIntro