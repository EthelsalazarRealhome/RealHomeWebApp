import { NavLink } from "react-router-dom";

function UserMenu ({ closeNav }) {
  return (
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
      <NavLink to='/LogIn' onClick={closeNav}>
        <li className="text-xl p-16">Log In for team members only*</li>
      </NavLink>  
    </ul>
  );
}

export default UserMenu;