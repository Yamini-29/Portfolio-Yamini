import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
         <Navbar/>
         <Hero/>
         <About/>
         <Services/>
         <Contact/>

    </div>
  );
}

export default App;
