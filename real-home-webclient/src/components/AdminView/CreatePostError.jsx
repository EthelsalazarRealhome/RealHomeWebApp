import { NavLink } from "react-router-dom";

function CreatePostError () {
  return (
    <section className="h-[85vh] w-full flex flex-col items-center justify-center">
      <p>Error al crear post</p>
      <NavLink to={"/Admin/CreatePost"}>
        <button className="bg-[#7187d5] text-white w-6/6 p-2 rounded-lg shadow-lg">Reintentar</button>
      </NavLink>
    </section>
  );
}

export default CreatePostError;