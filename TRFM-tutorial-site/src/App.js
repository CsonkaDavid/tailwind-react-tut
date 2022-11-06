import MainPageIntro from "./components/MainPageIntro";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className='main-page w-screen h-screen bg-gray-900 m-0 p-0'>
      <table className='w-screen h-screen'>
        <tr>
          <td className='flex mt-[25vh]'>
            <div>
              <SideBar/>
            </div>
          </td>
          <td className='w-max h-max pl-[20vw] text-white'>
            <table>
              <tr>
                <td>
                  
                </td>
              </tr>
              <tr>
                <td className='text-justify text-5xl font-bold'>
                  <MainPageIntro/>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
