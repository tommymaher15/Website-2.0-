import React from 'react';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';
import Socials from './components/Socials';
import Email from './components/Email';



function App() {
  return (
    <div className="App">
     <Header /> 
     <Hero />
     <Socials />
     <Email />
     <Footer />

    </div>
  );
}

export default App;
