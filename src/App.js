import React from 'react';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';
import Socials from './components/Socials';



function App() {
  return (
    <div className="App">
     <Header /> 
     <Hero />
     <Socials />
     <Footer />

    </div>
  );
}

export default App;
