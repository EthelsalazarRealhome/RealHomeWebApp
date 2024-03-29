import { HiMenuAlt3 } from 'react-icons/hi';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserMenu from './Menu/UserMenu';
import AdminMenu from './Menu/AdminMenu';
import useUser from '../../hooks/useUser';
import ROLES from "../../data/roles.json"

const NavBar = () => {
  const { isLogged, logout, user } = useUser();
  const [to, setTo] = useState('/');
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (isLogged) {
      if (user?.roles?.includes(ROLES.ADMIN)) setTo("/Admin/AdminHome");
      if (user?.roles?.includes(ROLES.SYSADMIN)) setTo("/Admin/AdminHome");
    } else {
      setTo("/");
    }
  }, [isLogged, user]);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <div className="fixed top-0 w-full z-50 ">
      <nav className="absolute w-full flex mt-[0px] justify-between p-4 items-center bg-black/20">
        <NavLink to={to} onClick={closeNav}>
          <h1 className="text-white font-bold text-2xl z-20"> REAL HOME</h1>
        </NavLink>

        <div className='flex flex-row justify-center items-center gap-7 z-10'>

          {isLogged &&
            <NavLink to="/" className="font-bold text-lg flex items-center bg-gray-700/70 rounded p-3 cursor-pointer hover:opacity-80 hover:bg-[#042b5e]/90 transition duration-200 ease-in-out">
              <button onClick={() => logout()} className='text-white text-2xl'>
                LogOut
              </button>
            </NavLink>
          }

          <div onClick={handleNav} className='z-30 flex items-center bg-gray-700/70 rounded p-3 cursor-pointer hover:opacity-80 hover:bg-[#042b5e]/90 transition duration-200 ease-in-out'> 
            <p className=' text-white text-2xl font-bold'>Menu</p>
            <HiMenuAlt3 className="text-white" size={31} />
          </div>

          <section className={`fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 transition-all duration-300 transform ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
            {
              (isLogged && (user?.roles?.includes(ROLES.ADMIN) || user?.roles?.includes(ROLES.SYSADMIN))) ? <AdminMenu closeNav={closeNav} /> : <UserMenu closeNav={closeNav} />
            }
          </section>

        </div>
      </nav>
    </div>
  )
}

export default NavBar;
