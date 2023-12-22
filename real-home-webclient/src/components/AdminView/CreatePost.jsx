import { useState } from "react";
import { NavLink } from "react-router-dom";
import useManagePost from "../../hooks/useManagePost";
import { useNavigate } from "react-router-dom";

const services = ["alquiler", "venta"];
const possibleTypes = ["casa", "apartamento", "playa", "local/oficina/bodega", "terrenos/fincas", "casas de campo"]

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [images, setImages] = useState([]); 
  const [service, setService] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState(""); 
  const [terrainSize, setTerrainSize] = useState(null);
  const [constructionSize, setConstructionSize] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [restrooms, setRestrooms] = useState(null); 
  const [parking, setParking] = useState(null); 
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const { isLoading, hasError, uploadPost } = useManagePost();
  const [isSucces, setIsSucces] = useState(false);

  /* useEffect(() => {
    if(hasError) navigate("/Admin/CreatePostError");
  }, [hasError, navigate]); */

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadPost({ 
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
     });

    if(hasError) {
      setTitle(window.localStorage.getItem("title"));
      setDescription(window.localStorage.getItem("description"));
      setPrice(window.localStorage.getItem("price"));
      setImages(window.localStorage.getItem("images"));
      setService(window.localStorage.getItem("service"));
      setType(window.localStorage.getItem("type"));
      setLocation(window.localStorage.getItem("location"));
      setTerrainSize(window.localStorage.getItem("terrainSize"));
      setConstructionSize(window.localStorage.getItem("constructionSize"));
      setRooms(window.localStorage.getItem("rooms"));
      setRestrooms(window.localStorage.getItem("restrooms"));
      setParking(window.localStorage.getItem("parking"));
      setContact(window.localStorage.getItem("contact"));

      navigate("/Admin/CreatePostError");
    }

    setIsSucces(!isSucces);
  }


  return (
    <div className="h-full">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="ml-[50px] text-3xl font-bold mb-6 mt-[50px]">
          PUBLICAR PROPIEDAD
        </h2>
      </div>

      {isLoading && <p>Creando post...</p>}

      {
        isSucces &&
          <section>
            <p>Su publicacion ha sido enviada</p>
            <NavLink to={"/Admin/AdminHome"}>
              <button className="bg-[#7187d5] text-white w-6/6 p-2 rounded-lg shadow-lg">Ir a Inicio</button>
            </NavLink>
          </section> 
      }

      {
        !isSucces &&

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
          <div className="flex flex-col">
            <label className="relative w-full m-3 lg:m-5">
              <input
                type="text"
                name="title"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setTitle(e.target.value);
                  window.localStorage.setItem("title", e.target.value);
                }}
                value={title}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Título Propiedad
              </span>
            </label>

            <label className="relative w-full h-full m-3 lg:m-5">
              <textarea
                name="description"
                rows="4" cols="50"
                maxLength={500}
                required
                className="resize-none px-4 py-4 w-full h-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setDescription(e.target.value);
                  window.localStorage.setItem("description", e.target.value);
                }}
                value={description}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Descripción Propiedad
              </span>
            </label>

            <input
              type="text"
              name="image"
              className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-[300px] py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Imagenes (ver como aplicar)"
              onChange={(e) => {
                setImages(e.target.value);
                window.localStorage.setItem("images", [e.target.value]);
              }}
              value={images}
            />

            <select
              name="service"
              required
              className="m-3 lg:m-5 px-4 h-24 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
              onChange={(e) => {
                setService(e.target.value);
                window.localStorage.setItem("service", e.target.value);
              }}
            >
              <option value="" disabled selected>Servicio</option>
              {
                services.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))
              }
            </select>

            <select
              name="type"
              required
              className="m-3 lg:m-5 px-4 h-24 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
              onChange={(e) => {
                setType(e.target.value);
                window.localStorage.setItem("type", e.target.value);
              }}
            >
              <option value="" disabled selected>Tipo de propiedad</option>
              {
                possibleTypes.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-col">
            <label className="relative w-full m-3 lg:m-5">
              <input
                type="number"
                name="price"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setPrice(e.target.value);
                  window.localStorage.setItem("price", e.target.value);
                }}
                value={price}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Precio Propiedad (en dolares $)
              </span>
            </label>

            <label className="relative w-full m-3 lg:m-5">
              <input
                type="text"
                name="contact"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setContact(e.target.value);
                  window.localStorage.setItem("contact", e.target.value);
                }}
                value={contact}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Número de teléfono (PARA LLAMADAS)
              </span>
            </label>

            <label className="relative w-full m-3 lg:m-5">
              <input
                type="text"
                name="location"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setLocation(e.target.value);
                  window.localStorage.setItem("location", e.target.value);
                }}
                value={location}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Ubicacion
              </span>
            </label>

            <label className="relative w-full m-3 lg:m-5">
              <input
                type="number"
                name="terrainSize"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setTerrainSize(e.target.value);
                  window.localStorage.setItem("terrainSize", e.target.value);
                }}
                value={terrainSize}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Tamaño total terreno
              </span>
            </label>

            <label className="relative w-full m-3 lg:m-5">
              <input
                type="number"
                name="constructionSize"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setConstructionSize(e.target.value);
                  window.localStorage.setItem("constructionSize", e.target.value);
                }}
                value={constructionSize}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Tamaño total construccion
              </span>
            </label>

            <label className="relative w-full m-3 lg:m-5">
              <input
                type="number"
                name="rooms"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setRooms(e.target.value);
                  window.localStorage.setItem("rooms", e.target.value);
                }}
                value={rooms}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Numero habitaciones
              </span>
            </label>

            <label className="relative w-full m-3 lg:m-5">
              <input
                type="number"
                name="restrooms"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setRestrooms(e.target.value);
                  window.localStorage.setItem("restrooms", e.target.value);
                }}
                value={restrooms}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Numero banos
              </span>
            </label>
        
            <label className="relative w-full m-3 lg:m-5">
              <input
                type="number"
                name="parking"
                required
                className="px-4 h-12 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                onChange={(e) => {
                  setParking(e.target.value);
                  window.localStorage.setItem("parking", e.target.value);
                }}
                value={parking}
              />
              <span className="text-l cursor-text text-gray-700 text-opacity-80 absolute left-0 top-3 mx-2 px-1 transition duration-200 tracking-wide peer-focus:text-blue-500 pointer-events-none peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-3 ml-2 peer-valid:scale-75 peer-valid:bg-white peer-valid:-translate-y-6 peer-valid:-translate-x-3">
                Numero parqueos
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="h-[100px] m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded inline-block py-3 lg:py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
          >
            Publicar Propiedad
          </button>
        </form>
      }

    </div>
  );
}



export default CreatePost;




