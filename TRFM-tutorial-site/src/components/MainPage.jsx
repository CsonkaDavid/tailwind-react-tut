import MainPageIntro from "./MainPageIntro";
import NavigationBar from "./NavigationBar";
import {SideBar} from "./SideBar";
import TechnologiesIntro from "./TechnologiesIntro";
import MainPageTitle from "./Titles";

function MainPage() {
  return (
    <div className='main-page w-[100vw] h-[100vh] bg-gradient-to-b from-gray-900 to-gray-800  m-0 p-0'>
      <MainPageTitle/>
      <table>
        <tr>
          <td className='flex'>
            <div>
              <SideBar/>
            </div>
          </td>
          <td className='text-white'>
            <table className='ml-[300px]'>
              <tr>
                <td>
                  <NavigationBar/>
                </td>
              </tr>
              <tr>
                <td>
                  <MainPageIntro/>
                </td>
              </tr>
              <tr>
                <td>
                  <TechnologiesIntro/>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MainPage;
