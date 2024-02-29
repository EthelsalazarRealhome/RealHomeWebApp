import { NavLink } from "react-router-dom";

function CreatePostError () {
  return (
    <section className="h-[86.8vh] w-screen flex flex-col items-center justify-center gap-6">
      <p className="font-bold text-lg">Error al crear post</p>
      <NavLink to={"/Admin/CreatePost"}>
        <button className="text-xl font-bold text-gray-700 bg-[#ddc807] rounded p-4">Reintentar</button>
      </NavLink>
    </section>
  );
}

export default CreatePostError;