import { useEffect, useState } from "react";
import Filter from './Filter/Filter';
import usePosts from "../../hooks/usePosts";
import Posts from "../Posts/Posts";
import { useLocation } from "react-router-dom"; 

const Properties = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 


  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState({
    type: location.state ? location.state.from : "",
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
      <div className="max-w-7xl lg:mx-10 mx-0 md:mx-6 sm:mx-2 mt-5 p-4">
        <h2 className="lg:text-5xl text-2xl px-0 font-bold mb-6 lg:mb-8 sm:mb-3 mt-[80px]">
          NUESTRAS PROPIEDADES DISPONIBLES
        </h2>
        <Filter setFilter={setSelectedFilter} className="mb-[80px]" />
      </div>

      {
          loading ? <p className="text-center h-screen mt-8 text-4xl lg:text-5xl py-16 mb-11">Cargando propiedades...</p> : <Posts posts={filteredPosts} />
      }

    </section>

  );
};

export default Properties;
