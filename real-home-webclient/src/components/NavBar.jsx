import { HiMenuAlt3 } from 'react-icons/hi';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from '../hooks/useUser';
import ROLES from "../data/roles.json"

const NavBar = () => {
  const { isLogged, logout, user } = useUser();
  const [to, setTo] = useState('/');
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (isLogged) {
      if (user?.roles?.includes(ROLES.ADMIN || ROLES.SYSADMIN)) setTo("/Admin/AdminHome")
    }
  }, [isLogged, user]);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="absolute w-full flex mt-[0px] justify-between p-4 items-center">
        <NavLink to={to} onClick={closeNav}>
          <h1
            className=" text-black font-bold text-2xl z-20"> Real State</h1>
        </NavLink>

        <div className='flex flex-row gap-7 z-10'>

          {isLogged &&
            <NavLink to="/" onClick={logout} className="font-bold text-lg cursor-pointer">
              <button className='text-white text-2xl'>
                LogOut
              </button>
            </NavLink>
          }

          <HiMenuAlt3 onClick={handleNav} className="bg-gray-700 z-20 text-white cursor-pointer" size={25} />
          <section className={nav ? "ease-in duration-300 fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10" : "absolute top-0 h-screen right-[-100%] ease-in duration-500 z-10"}>
            <ul className="flex flex-col fixed w-full h-full items-center justify-center">
              <NavLink to='/' onClick={closeNav}>
                <li className="font-bold text-5xl p-8">Home</li>
              </NavLink>
              <NavLink to='/Properties' onClick={closeNav}>
                <li className="font-bold text-5xl p-8">Propiedades</li>
              </NavLink>
              <NavLink to='/Benefits' onClick={closeNav}>
                <li className="font-bold text-5xl p-8">Beneficios</li>
              </NavLink>
              {!isLogged &&
                <NavLink to='/LogIn' onClick={closeNav}>
                  <li className="text-xl p-16">Log In for team members only*</li>
                </NavLink>  
              }
            </ul>
          </section>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;

