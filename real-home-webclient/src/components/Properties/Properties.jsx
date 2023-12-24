import { useEffect, useState } from "react";
import Filter from './Filter/Filter';
import usePosts from "../../hooks/usePosts";
import Posts from "../Posts/Posts";

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const { posts, getPosts, loading } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
  };

  return (
    <section>
      <div className="max-w-7xl mx-10 md:mx-6 sm:mx-2 mt-5 p-4">
        <h2 className="text-3xl font-bold mb-6 sm:mb-3 mt-[70px] font-merriweather">
          NUESTRAS PROPIEDADES DISPONIBLES
        </h2>
        <Filter onSelect={handleFilterSelect} className="mb-[80px]" />
      </div>

      {
        loading ? <p>Cargando propiedades...</p> : <Posts posts={posts}/>
      }
      
    </section>

  );
};

export default Properties;
