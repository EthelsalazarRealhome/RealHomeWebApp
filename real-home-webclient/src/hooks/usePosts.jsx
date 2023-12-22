import { useCallback, useState } from "react";
import { fetchVisiblePosts, fetchHiddenPosts } from "../services/posts.service";

export default function usePosts () {
  const [posts, setPosts] = useState([]); 
  const [hiddenPosts, setHiddenPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedPosts = await fetchVisiblePosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },[]);  

  const getHiddenPosts = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedHiddenPosts = await fetchHiddenPosts();
      setHiddenPosts(fetchedHiddenPosts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  
  return {
    loading,
    posts,
    hiddenPosts,
    getPosts,
    getHiddenPosts
  };
}