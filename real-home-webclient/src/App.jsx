import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Properties from './components/Properties/Properties';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path='Properties' element={<Properties/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;