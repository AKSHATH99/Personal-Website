import './App.css';
import About from './components/About';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen w-screen overflow-x-hidden relative'>
        {/* Background layers for consistency */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black -z-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] -z-10"></div>
        
        {/* Floating particles for the entire page */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Additional subtle grid pattern */}
        <div 
          className="fixed inset-0 opacity-[0.02] -z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Main content */}
        <Header/>
        <Body/>
        <About/>
        <Project/>
        <Contact/>
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App;