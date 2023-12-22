import { useCallback, useState } from "react";
import { fetchVisiblePosts, fetchHiddenPosts, fetchOnePost } from "../services/posts.service";

export default function usePosts () {
  const [posts, setPosts] = useState([]); 
  const [hiddenPosts, setHiddenPosts] = useState([]);
  const [singlePost, setSinglePost] = useState({});

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

  const getSinglePost = useCallback(async (id=null) => {
    try {
      setLoading(true);
      const fetchedPost = await fetchOnePost(id);
      setSinglePost(fetchedPost);
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
    singlePost,
    getPosts,
    getHiddenPosts,
    getSinglePost
  };
}