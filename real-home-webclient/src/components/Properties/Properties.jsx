import { useEffect, useState } from "react";
import Filter from './Filter/Filter';
import usePosts from "../../hooks/usePosts";
import Posts from "../Posts/Posts";

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    type: "",
    service: ""
  });
  const { posts, getPosts, loading } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const filterProperties = (posts) => {
    return posts.filter(post => {
      return (
        (selectedFilter.type !== "" ? (post.type === selectedFilter.type) : post.type) &&
        (selectedFilter.service !== "" ? (post.service === selectedFilter.service) : post.service)
      );
    })
  }

  const filteredPosts = filterProperties(posts);

  return (
    <section>
      <div className="max-w-7xl mx-10 md:mx-6 sm:mx-2 mt-5 p-4">
        <h2 className="text-3xl font-bold mb-6 sm:mb-3 mt-[70px] font-merriweather">
          NUESTRAS PROPIEDADES DISPONIBLES
        </h2>
        <Filter setFilter={setSelectedFilter} className="mb-[80px]" />
      </div>

      {
        loading ? <p>Cargando propiedades...</p> : <Posts posts={filteredPosts} />
      }
      
    </section>

  );
};

export default Properties;
