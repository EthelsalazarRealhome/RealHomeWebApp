import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export function login ({ identifier, password }) {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ identifier, password })
  }).then(res => {
    if(!res.ok) throw new Error("Res is not ok");

    return res.json();
  }).then(res => {
    const { token } = res;

    return token;
  });
}

export async function getUser (token = null) {
  axios.defaults.headers.common['authorization'] = `Bearer ${token}`;

  const { data } = await axios.get(`${BASE_URL}/auth/whoami`);

  return data;
}