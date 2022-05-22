
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Practice from './components/Practice';
import Attorneys from './components/Attorneys';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
       <Navbar/>
       <Home/>
       <About/>
       <Practice/>
       <Attorneys/>
       <Contact/>
       <Footer/>


    </>
    
   
  );
}

export default App;
