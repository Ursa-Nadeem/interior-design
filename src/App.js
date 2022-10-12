import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Services from './Components/Services';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbars />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='portfolio' element={<Portfolio />} />
          <Route exact path='services' element={<Services />} />
          <Route exact path='contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App