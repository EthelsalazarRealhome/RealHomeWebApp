import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import useManagePost from "../../hooks/useManagePost";
import useUploadImage from "../../hooks/useUploadImage";
import { useDropzone } from 'react-dropzone'
import CreatePostError from "./CreatePostError";


const services = ["alquiler", "venta"];
const possibleTypes = ["casa", "apartamento", "playa", "local/oficina/bodega", "terrenos/fincas", "casas de campo"]

const CreatePost = ({ editMode = false, postId = null, toEditPost = {} }) => {

  let images = editMode ? toEditPost.images : [];

  const [title, setTitle] = useState(editMode ? toEditPost.title : window.localStorage.getItem("title"));
  const [description, setDescription] = useState(editMode ? toEditPost.description : window.localStorage.getItem("description"));
  const [price, setPrice] = useState(editMode ? toEditPost.price : window.localStorage.getItem("price"));
  const [service, setService] = useState(editMode ? toEditPost.service : window.localStorage.getItem("service"));
  const [type, setType] = useState(editMode ? toEditPost.type : window.localStorage.getItem("type"));
  const [location, setLocation] = useState(editMode ? toEditPost.location : window.localStorage.getItem("location"));
  const [terrainSize, setTerrainSize] = useState(editMode ? toEditPost.terrainSize : window.localStorage.getItem("terrainSize"));
  const [constructionSize, setConstructionSize] = useState(editMode ? toEditPost.constructionSize : window.localStorage.getItem("constructionSize"));
  const [rooms, setRooms] = useState(editMode ? toEditPost.rooms : window.localStorage.getItem("rooms"));
  const [restrooms, setRestrooms] = useState(editMode ? toEditPost.restrooms : window.localStorage.getItem("restrooms"));
  const [parking, setParking] = useState(editMode ? toEditPost.parking : window.localStorage.getItem("parking"));
  const [contact, setContact] = useState(editMode ? toEditPost.contact : window.localStorage.getItem("contact"));

  const [rawImages, setRawImages] = useState([]);
  const [preview, setPreview] = useState(editMode ? toEditPost.images : []);
  const { uploadImages, imagesLoading } = useUploadImage();

  const { isLoading, hasError, uploadPost } = useManagePost();
  const [isSucces, setIsSucces] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    setRawImages(acceptedFiles);
    let imgPrevs = [];

    for (const acceptedFile of acceptedFiles) {
      imgPrevs.push({
        name: acceptedFile.name,
        url: URL.createObjectURL(acceptedFile)
      });
    }

    setPreview(imgPrevs);
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })



  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);

    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editMode) images = await uploadImages(rawImages);

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
    }, postId);
    /* 
    if (hasError) {
      navigate("/Admin/CreatePostError");
      return;
    } */

    setIsSucces(!isSucces);
    window.localStorage.clear();
  }


  return (
    <>
      {
        !hasError ?

          <div className="h-full flex flex-col justify-center items-center">
            <div className="max-w-2xl mx-auto p-4">
              <h2 className="ml-[50px] text-3xl font-bold mb-6 mt-[50px]">
                {editMode ? "EDITAR PROPIEDAD" : "PUBLICAR PROPIEDAD"}
              </h2>
            </div>

            {imagesLoading && <p>Subiendo imagenes...</p>}
            {isLoading && <p>{editMode ? "Guardando los cambios..." : "Creando post..."}</p>}

            {
              isSucces &&
              <section>
                <p>{editMode ? "Cambios guardados correctamente" : "Su publicacion ha sido enviada"}</p>
                {
                  !editMode &&
                    <NavLink to="/Admin/AdminHome">
                      <button className="bg-[#7187d5] text-white w-6/6 p-2 rounded-lg shadow-lg">Ir a Inicio</button>
                    </NavLink>
                }
              </section>
            }

            {
              (!isSucces && !isLoading && !imagesLoading) &&

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
                      maxLength={1500}
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

                  <div {...getRootProps()}
                    className="cursor-pointer m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-[300px] py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <input {...getInputProps()} className="w-full h-full" />
                    {
                      isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag n drop some files here, or click to select files</p>
                    }
                    {
                      !isDragActive &&
                      <div className="p-4 flex flex-row flex-wrap items-center justify-center gap-4">
                        {
                          preview?.map(img => (
                            <figure key={img.name} className="h-36 w-36 shadow-lg">
                              <img src={img.url} className="w-full h-full object-cover rounded-lg" />
                            </figure>
                          ))
                        }
                      </div>
                    }
                  </div>

                  <select
                    name="service"
                    required
                    className="m-3 lg:m-5 px-4 h-24 w-full text-gray-700 text-l bg-inherit border-2 rounded border-gray-300 border-opacity-50 outline-none hover:border-gray-600 focus:border-blue-500 focus:text-gray-700 transition duration-200 peer"
                    onChange={(e) => {
                      setService(e.target.value);
                      window.localStorage.setItem("service", e.target.value);
                    }}
                  >
                    <option value={editMode ? service : ""} disabled selected>{editMode ? service : "Servicio"}</option>
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
                    <option value={editMode ? type : ""} disabled selected>{editMode ? type : "Tipo de propiedad"}</option>
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
                      Número de teléfono (ej: +503 77777777)
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
                  {editMode ? "Guardar Cambios" : "Publicar Propiedad"}
                </button>
              </form>
            }

          </div>

          :

          <CreatePostError />
      }
    </>
  );
}



export default CreatePost;




