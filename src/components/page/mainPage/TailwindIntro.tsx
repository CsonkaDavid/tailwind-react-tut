import { SiTailwindcss } from 'react-icons/si'
import '../../design/TechIntro.css'
import GradientIcon from '../../GradientIcon'
import NoreferrerLink from '../../NoreferrerLink'
import SpringMotionDiv from '../../SpringMotionDiv'

function TailwindIntro() {
  return (
    <SpringMotionDiv yOff={'45vh'} yOn={'-10vh'} duration={0.8} bounce={0.2} viewPortOnce={true}
      nestedElement={
        <div className='tech-intro flex-row-reverse'>
          <div className='py-[1em] px-[1em]'>
            <p className='mr-[6.6em] text-[2em] text-blue-500 font-bold'>Tailwind</p>
            <p>A utility-first CSS framework that can be composed to build any design, directly in your markup.</p>
            <p>Official documentation and tutorials can be found here:</p>
            <div className='w-fit text-[#0284c7] hover:text-[#60a5fa]'>
              <NoreferrerLink link={'https://tailwindcss.com/'}
                nestedElement={
                  ' tailwindcss.com'
                }
              />
            </div>
          </div>
          <div className='pt-[2vh]'>
            <GradientIcon startColor={'#60a5fa'} endColor={'#3b82f6'} gradientID={'tailwindicon'} offset='r'
              nestedElement={<SiTailwindcss size={'15em'} />} />
          </div>
        </div>
      }
    />
  )
  /*
  return (
    <div className='tech-intro'>
      <p className='flex'>
        <div className='my-auto mr-5 mb-[2.4em] text-blue-400'>
          <SiTailwindcss size={40} />
        </div>
        <div>
          Tailwind CSS
        </div>
      </p>
    </div>
  )
  */
}

export default TailwindIntro