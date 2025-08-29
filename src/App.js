import './App.css';
import About from './components/About';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import Contact from './components/Contact';
import Project from './components/Project';
import Blogs from './components/Blogs';
import Experience from './components/Experience';

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen w-screen overflow-x-hidden relative'>
        {/* Background layers for consistency */}

        {/* 🌑 Dark Mode Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:block hidden -z-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:block hidden -z-10"></div>

        {/* 🌕 Light Mode Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#F8F9FB] via-[#FFFFFF] to-[#F2F3F5] block dark:hidden -z-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,93,229,0.08),transparent_50%)] block dark:hidden -z-10"></div>

        {/* Floating particles (adjust color for light mode) */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse
                         bg-blue-500/20 dark:bg-blue-500/20 
                         bg-violet-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Subtle grid (lighter for light mode, stronger for dark) */}
        <div 
          className="fixed inset-0 -z-10"
          style={{
            opacity: '0.02',
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div 
          className="fixed inset-0 -z-10 dark:hidden"
          style={{
            opacity: '0.03',
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Main content */}
        <Header/>
        <Body/>
        <About/>
        <Experience/>
        <Project/>
        <Blogs/>
        <Contact/>
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App;
