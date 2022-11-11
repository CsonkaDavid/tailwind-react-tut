import { FaReact } from 'react-icons/fa'
import '../../design/TechIntro.css'
import GradientIcon from '../../GradientIcon'
import NoreferrerLink from '../../NoreferrerLink'
import SpringMotionDiv from '../../SpringMotionDiv'

function ReactJSIntro() {
  return (
    <SpringMotionDiv yOff={'45vh'} yOn={'-10vh'} duration={0.8} bounce={0.2} viewPortOnce={true}
      nestedElement={
        <div className='tech-intro'>
          <div className='py-[0.5em] px-[1em]'>
            <p className='mr-[7.7em] text-[2em] text-cyan-500 font-bold'>React</p>
            <p>A JavaScript library for building user interfaces</p>
            <p>React is a component-based UI builder tool.</p>
            <p>Official documentation and tutorials can be found here:
            </p>
            <div className='w-fit text-[#06b6d4] hover:text-[#67e8f9]'>
              <NoreferrerLink link={'https://reactjs.org/'}
                nestedElement={
                  ' reactjs.org'
                }
              />
            </div>
          </div>
          <div className='pt-[3vh]'>
            <GradientIcon startColor={'#67e8f9'} endColor={'#0ea5e9'} gradientID={'reacticon'} offset='l'
              nestedElement={<FaReact size={'15em'} />} />
          </div>
        </div>
      }
    />
  );
}

export default ReactJSIntro