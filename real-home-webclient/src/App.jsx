import { useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Propiedades from './components/Propiedades/Propiedades';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path='Propied' element={<Propiedades/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;