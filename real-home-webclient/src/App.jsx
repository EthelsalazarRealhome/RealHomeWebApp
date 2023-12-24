import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import Properties from './components/Properties/Properties';
import OurServices from './components/Us/OurServices';
import Moreinfo from './components/Us/Moreinfo'
import Team from './components/Us/Team';
import LogIn from './components/LogIn/Login';
import AdminHome from './components/AdminView/AdminHome';
import MyPosts from './components/AdminView/MyPosts';
import CreatePost from './components/AdminView/CreatePost';
import Footer from './components/Footer';
import LoginError from './components/LogIn/LoginError';
import { UserContextProvider } from "./context/UserContext";
import Benefits from './components/Us/Benefits';
import PostView from './components/PostView/PostView';
import AdminPostView from './components/PostView/AdminPostView';
import CreatePostError from './components/AdminView/CreatePostError';
import DeleteConfirmation from './components/PostView/DeleteConfirmation';

function App() {

  return (
    <>
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
          <Route path='/Admin/CreatePostError' element={<CreatePostError/>} />
          <Route path="OurServices" element={<OurServices />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/LoginError' element={<LoginError/>}/>
          <Route path='/Benefits' element={<Benefits/>} /> 
          <Route path='/PostView/:postId' element={<PostView/>} />
          <Route path='/AdminPostView/:postId' element={<AdminPostView/>} />
          <Route path='/AdminPostView/deleteConfirmation' element={<DeleteConfirmation/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserContextProvider>
    </>
  );
}

export default App;