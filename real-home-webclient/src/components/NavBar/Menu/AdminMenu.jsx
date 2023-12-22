import { NavLink } from "react-router-dom";

function AdminMenu ({ closeNav }) {
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
      <NavLink to='/Admin/MyPosts' onClick={closeNav}>
        <li className="font-bold text-5xl p-8">Mis Publicaciones</li>
      </NavLink>
      <NavLink to='/Admin/CreatePost' onClick={closeNav}>
        <li className="font-bold text-5xl p-8">Crear Publicacion</li>
      </NavLink>
    </ul>
  );
}

export default AdminMenu;