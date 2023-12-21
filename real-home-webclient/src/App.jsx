import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Properties from './components/Properties/Properties';
import OurServices from './components/Us/OurServices';
import Moreinfo from './components/Us/Moreinfo'
import Team from './components/Us/Team';
import LogIn from './components/LogIn/Login';
import AdminHome from './components/AdminView/AdminHome';
import MyPosts from './components/AdminView/MyPosts';
import CreatePost from './components/AdminView/CreatePost';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Moreinfo" element={<Moreinfo />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Admin/AdminHome' element={<AdminHome />} />
          <Route path='/Admin/MyPosts' element={<MyPosts/>} />
          <Route path='/Admin/CreatePost' element={<CreatePost/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;