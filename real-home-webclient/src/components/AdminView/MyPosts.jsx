import { useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import AdminPosts from "../Posts/AdminPosts";

const MyPosts = () => {
  const { getAllPosts, allPosts, loading } = usePosts();

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);


  return (
    <section className=" flex flex-col items-center justify-center ">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="ml-[50px] text-3xl font-bold mb-6 mt-[50px]">
          PROPIEDADES PUBLICADAS
        </h2>
      </div>

      {
        loading ? <p>Cargando...</p> : <AdminPosts posts={allPosts}/>
      }

    </section>
  );
}

export default MyPosts; 