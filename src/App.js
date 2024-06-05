import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Project from './components/Project';

function App() {
  return (
    // <div className="App">
    //   {/* <Main/> */}
    //   <About/>
    // </div>
    <div className='flex flex-col overflow-x-hidden'>
      <div className='absolute w-screen'>
        <Navbar/>
      </div>
      <div> {/* className="min-h-screen" */}
        <div className='absolute'>
          <Main/>
        </div>
        <div className='relative'>
          <About/>
        </div>
      </div>
      <div className='flex flex-col relative bg-white'>
          <Overview/>
          
          <Contact/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
