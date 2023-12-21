import { useState, useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import ROLES from "../../data/roles.json";

function LogIn() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogged, isLoginLoading, hasLoginError, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if(hasLoginError) navigate("/LoginError");

    if(isLogged) {
      if(user?.roles?.includes(ROLES.ADMIN || ROLES.SYSADMIN)) navigate("/")
    }
  }, [hasLoginError, isLogged, navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ identifier, password });
  }

  return (
    <section className="flex flex-col items-center justify-center h-[85vh] w-full">
      {isLoginLoading && <strong>Validando credenciales...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-7 bg-[#042b5e] shadow-lg rounded px-8 sm:px-5 pt-6 sm:pt-3 pb-15 sm:pb-12 h-2/4 w-1/4">
          <section className="flex flex-col items-center justify-center w-full my-8 gap-3">
            <label className="relative w-full">
              <input 
                type="text" 
                required
                className="px-4 h-12 w-full text-white text-l bg-inherit border-2 rounded-lg border-white border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-white transition duration-200 peer"  
                onChange={e => setIdentifier(e.target.value)}
                value={identifier}
              />
              <span className="text-l cursor-text text-white text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-[#042b5e] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-[#042b5e] peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Username
              </span>
            </label>

            <label className="relative w-full">
              <input 
                type="password" 
                required
                className="px-4 h-12 w-full text-white text-l bg-inherit border-2 rounded-lg border-white border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-white transition duration-200 peer"  
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <span className="text-l cursor-text text-white text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-[#042b5e] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-[#042b5e] peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Password
              </span>
            </label>
          </section>

          <button
            type="submit"
            className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#ddc807]"
          >
            Log in
          </button>
        </form>
      }
    </section> 
  );
}

export default LogIn;
