import { useCallback, useState, useContext } from "react";
import Context from "../context/UserContext";
import { savePost } from "../services/posts.service";

export default function useManagePost () {
  const { token } = useContext(Context);
  const [state, setState] = useState({
    loading: false,
    error: false
  });

  const uploadPost = useCallback(({
    title, 
    description, 
    price, 
    neg_price,
    images, 
    service, 
    type, 
    location, 
    terrainSize, 
    constructionSize,
    rooms, 
    restrooms, 
    parking,
    contact
  }, postId = null) => {
    setState({ loading: true, error: false });

    savePost({ 
      title, 
      description, 
      price, 
      neg_price,
      images, 
      service, 
      type, 
      location, 
      terrainSize, 
      constructionSize,
      rooms, 
      restrooms, 
      parking,
      contact
    }, token, postId).then(() => {
      setState({ loading: false, error: false });
    }).catch(err => {
      setState({ loading: true, error: true });
      console.error(err);
    })
  }, [token]);

  return {
    isLoading: state.loading,
    hasError: state.error,
    uploadPost
  };
}

