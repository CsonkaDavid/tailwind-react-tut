import SpringMotionDiv from "../../SpringMotionDiv";

function TechnologiesIntro() {
  return (
    <div>
      <SpringMotionDiv yOff={'19vh'} yOn={'-35vh'} duration={0.8} bounce={0.2} viewPortOnce={true}
        nestedElement={
          <div className='text-4xl font-bold bg-slate-800 rounded-3xl py-20 px-20'>
            <p>
              The site was made with different technologies and frameworks during development:
            </p>
          </div>
        } />
    </div>
  );
}

export default TechnologiesIntro