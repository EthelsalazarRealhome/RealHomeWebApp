import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const savePost = ({ 
  title, 
  description, 
  price, 
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
}, token = null, postId = null) => {
  return fetch(`${BASE_URL}/post/${postId}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ 
      title, 
      description, 
      price, 
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
    })
  }).then(res => {
    if(!res.ok) throw new Error("Error saving post");

    return res.json();
  }).then(res => {
    const { message } = res;

    return message;
  });
}

export const fetchVisiblePosts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/post/`);

    return data.posts;
  } catch (error) {
    throw new Error("Error fetching posts");
  }
}

export const fetchHiddenPosts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/post/hidden`);

    return data.posts;
  } catch (error) {
    throw new Error("Error fetching hidden posts");
  }
}

export const fetchOnePost = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/post/${id}`);

    return data;
  } catch (error) {
    throw new Error("Error fetching post data");
  }
}

export const visibility = async (id) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/post/visibility/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteOne = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/post/${id}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}