import './App.css';
import About from './components/About';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import Contact from './components/Contact';
import Project from './components/Project';


// import 

function App() {
  return (
    <Provider store={store}>
      <div className='bg-gray-950 w-screen overflow-x-hidden'>

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
