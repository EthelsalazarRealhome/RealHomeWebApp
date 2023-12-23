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
      <div className="max-w-7xl mx-10 mt-5 p-4">
        <h2 className="text-4xl font-bold mb-6 mt-12 font-merriweather">
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
