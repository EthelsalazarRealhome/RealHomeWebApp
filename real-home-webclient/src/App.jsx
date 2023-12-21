import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Properties from './components/Properties/Properties';
import OurServices from './components/Us/OurServices';
import Moreinfo from './components/Us/Moreinfo'
import Team from './components/Us/Team';
import LogIn from './components/LogIn/Login';
import Footer from './components/Footer';
import LoginError from './components/LogIn/LoginError';

import { UserContextProvider } from "./context/UserContext";

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Moreinfo" element={<Moreinfo />} />
          <Route path="/Team" element={<Team />} />
          <Route path="OurServices" element={<OurServices />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/LoginError' element={<LoginError/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </UserContextProvider>
  );
}

export default App;