import { motion } from "framer-motion";
import FramerMotionIntro from "./FramerMotionIntro";
import { MainPageIntro } from "./MainPageIntro";
import NavigationBar from "../../NavigationBar";
import ReactJSIntro from "./ReactJSIntro";
import { SideBar } from "../../SideBar";
import TailwindIntro from "./TailwindIntro";
import TechnologiesIntro from "./TechnologiesIntro";
import { TitleInjector } from "../../TitleInjector";
import '../../design/MainPage.css'
import ViteIntro from "./ViteIntro";

function MainPage() {
  return (
    <motion.div id='main-page' className='main-page h-full w-full bg-gradient-to-bl from-backgroundLight to-backgroundDark'>
      <header className='p-0'>
        <TitleInjector title='TRFM-Main' />
        <NavigationBar />
      </header>
      <aside>
        <SideBar />
      </aside>
      <div className='pl-[15vw] pr-[5vw] pb-[1vh]'>
        <section className='text-white pt-[20vh] border-b-2 border-white pl-[2vw]'>
          <MainPageIntro />
        </section>
        <section className='text-white border-b-2 border-white pt-[60vh]'>
          <TechnologiesIntro />
        </section>
        <section className='pt-[30vh]' >
          <article className='right-icon-intro overflow-visible' id='reactJSIntro'>
            <ReactJSIntro />
          </article>
          <article className='left-icon-intro' id='tailwindIntro'>
            <TailwindIntro />
          </article>
          <article className='right-icon-intro' id='framerMotionIntro'>
            <FramerMotionIntro />
          </article>
          <article className='left-icon-intro' id='viteIntro'>
            <ViteIntro />
          </article>
        </section>
      </div>
    </motion.div >
  );
}

export default MainPage;