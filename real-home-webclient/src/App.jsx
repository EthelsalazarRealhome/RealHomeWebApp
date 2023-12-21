import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Properties from './components/Properties/Properties';
import OurServices from './components/Us/OurServices';
import Moreinfo from './components/Us/Moreinfo'
import Team from './components/Us/Team';
import LogIn from './components/LogIn/Login';
<<<<<<< HEAD
import AdminHome from './components/AdminView/AdminHome';
import MyPosts from './components/AdminView/MyPosts';
import CreatePost from './components/AdminView/CreatePost';
import Footer from './components/Footer';
import LoginError from './components/LogIn/LoginError';

import { UserContextProvider } from "./context/UserContext";
=======
import Benefits from './components/Us/Benefits';
>>>>>>> infofull

function App() {

  return (
<<<<<<< HEAD
    <UserContextProvider>
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
          <Route path="OurServices" element={<OurServices />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/LoginError' element={<LoginError/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </UserContextProvider>
=======
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/Properties" element={<Properties/>}/>
    <Route path="/Moreinfo" element={<Moreinfo/>} />
    <Route path="/Team" element={<Team/>} />
    <Route path="OurServices" element={<OurServices/>} />
    <Route path="/LogIn" element={<LogIn/>} />
    <Route path="/Benefits"element={<Benefits/>} />
   </Routes>
   </BrowserRouter>
    </>
>>>>>>> infofull
  );
}

export default App;