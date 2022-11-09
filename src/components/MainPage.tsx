import MainPageIntro from "./MainPageIntro";
import NavigationBar from "./NavigationBar";
import { SideBar } from "./SideBar";
import TechnologiesIntro from "./TechnologiesIntro";
import { TitleComponent } from "./Titles";

function MainPage() {
  return (
    <div className='main-page h-[500vh] w-full bg-gradient-to-bl from-backgroundLight to-backgroundDark'>
      <table>
        <tr>
          <td className='flex'>
            <SideBar />
          </td>
          <td className='text-white p-0 m-0'>
            <table className='h-[100vh] m-0 p-0'>
              <tr>
                <td className='p-0'>
                  <NavigationBar />
                </td>
              </tr>
              <tr>
                <td>
                  <MainPageIntro />
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <TechnologiesIntro />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <TitleComponent title='TRFM-Main' />
    </div>
  );
}

export default MainPage;
