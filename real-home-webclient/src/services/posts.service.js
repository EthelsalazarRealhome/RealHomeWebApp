import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

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