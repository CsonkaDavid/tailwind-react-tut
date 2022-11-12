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
			<div className='pl-[15vw] pr-[5vw] pb-[1vw]'>
				<section className='text-white pt-[15vw] border-b-2 border-white pl-[2vw]'>
					<MainPageIntro />
				</section>
				<section className='text-white border-b-2 border-white pt-[54vh]'>
					<TechnologiesIntro />
				</section>
				<section className='pt-[15vw]' >
					<article className='right-icon-intro scroll-mt-[16vw]' id='reactJSIntro'>
						<ReactJSIntro />
					</article>
					<article className='left-icon-intro scroll-mt-[15vw]' id='tailwindIntro'>
						<TailwindIntro />
					</article>
					<article className='right-icon-intro scroll-mt-[15vw]' id='framerMotionIntro'>
						<FramerMotionIntro />
					</article>
					<article className='left-icon-intro scroll-mt-[14vw]' id='viteIntro'>
						<ViteIntro />
					</article>
				</section>
			</div>
		</motion.div >
	);
}

export default MainPage;