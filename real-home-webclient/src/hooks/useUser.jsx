import { useCallback, useContext, useEffect, useState } from "react";
import Context from "../context/UserContext";
import {login as loginService, getUser } from "../services/login.service";

export default function useUser () {
  const {token, setToken} = useContext(Context);
  const [state, setState] = useState({
    loading: false,
    error: false
  });  
  const [user, setUser] = useState({});

  useEffect(() => {
    const gettingUser = async () => {
      setUser(await getUser(token)); 
    }

    if(token) gettingUser()
  }, [token])

  //login
  const login = useCallback(({ identifier, password }) => {
    setState({ loading: true, error: false });

    loginService({ identifier, password })
      .then(async (token) => {
        window.sessionStorage.setItem("token", token);
        setState({ loading: false, error: false });
        setToken(token); 
      })
      .catch(err => {
        window.sessionStorage.removeItem("token");
        setState({ loading: true, error: true });
        console.error(err);
      });
  }, [setToken]);

  //logout
  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    setToken(null);
    setUser({});
  }, [setToken]); 

  return {
    isLogged: Boolean(token),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    user
  }
}