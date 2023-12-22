import { useCallback, useState } from "react";
import { fetchVisiblePosts, fetchHiddenPosts, fetchOnePost, visibility, deleteOne } from "../services/posts.service";

export default function usePosts () {
  const [posts, setPosts] = useState([]); 
  const [hiddenPosts, setHiddenPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
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

  const getAllPosts = useCallback(async () => {
    try {
      setLoading(true);

      const fetchedPosts = await fetchVisiblePosts();
      const fetchedHiddenPosts = await fetchHiddenPosts();

      setAllPosts([...fetchedPosts, ...fetchedHiddenPosts]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleHidden = useCallback(async (id) => {
    try {
      await visibility(id);
      setSinglePost(await fetchOnePost(id));
    } catch (error) {
      console.error(error);
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

  const deletePost = useCallback(async (id) => {
    try {
      await deleteOne(id);
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  return {
    loading,
    posts,
    hiddenPosts,
    allPosts,
    singlePost,
    getPosts,
    getHiddenPosts,
    getAllPosts,
    getSinglePost,
    toggleHidden,
    deletePost
  };
}