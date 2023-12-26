import { useEffect, useState } from "react";
import usePosts from "../../hooks/usePosts";
import AdminPosts from "../Posts/AdminPosts";

const MyPosts = () => {
  const { getAllPosts, allPosts, loading } = usePosts();
  const [filter, setFilter] = useState({visibility: "all"});

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const filterPosts = (posts) => {
    return posts.filter(post => {
      if(filter.visibility === "all") return post;
      return filter.visibility === "visible" ? post.hidden === false : post.hidden === true;
    });
  }

  const filteredPosts = filterPosts(allPosts)

  return (
    <section className="mx-[50px] flex flex-col items-center justify-center ">
      <h2 className=" text-3xl font-bold mb-6 mt-[80px]">
        PROPIEDADES PUBLICADAS
      </h2>
      <section className="self-start">
        <span className="text-xl font-semibold text-[#042b5e]">Filtrar mi busqueda por: </span>
        <select className="bg-[#ddc807]/40 h-7 w-48 rounded-lg pl-3" onChange={(e) => setFilter(() => ({ visibility: e.target.value }))}>
          <option value="all">Todos</option>
          <option value="visible">Visibles</option>
          <option value="hidden">Ocultos</option>
        </select>
      </section>


      {
        loading ? <p>Cargando...</p> : <AdminPosts posts={filteredPosts} />
      }

    </section>
  );
}

export default MyPosts; 