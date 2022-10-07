
import React from 'react';
import Navbar from './Components.jsx/Navbar'
import './App.css';
import Text from './Components.jsx/Text';
import AboutUs from './Components.jsx/About Us';
import Services from './Components.jsx/Services';
import Footer from './Components.jsx/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Text/>
    <AboutUs/>
    <Services/>
    <Footer/>
    </>
  )
}

export default App