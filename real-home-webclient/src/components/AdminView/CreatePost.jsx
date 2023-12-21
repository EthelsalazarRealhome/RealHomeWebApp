import React from "react";

const CreatePost = () => {
    /*const [postData, setPostData] = useState({
        hidden: false,
        title: "",
        description: "",
        price: "0",
        service: "",
        type: "",
        location: "",
        terrainSize: "",
        constructionSize: "0",
        rooms: "0",
        restroomz: "0",
        parking: "0",
        contact: "",
      });
      const { jwt } = useContext(UserContext);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
           await createPost(postData, jwt);
       
        
        } catch (error) {
          console.error("Error al crear el post:", error.message);
    
          alert(`Error al crear el post: ${error.message}`);
        }
      };
    
      const handleChange = (e) => {
        setPostData({
          ...postData,
          [e.target.name]: e.target.value,
        });
      }; */

    return (

        <div className="h-[112vh]">
            <div className="max-w-2xl mx-auto p-4">
                <h2 className="ml-[50px] text-3xl font-bold mb-6 mt-[50px]">
                    PUBLICAR PROPIEDAD
                </h2>
            </div>

            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="title"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-fit py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Título Propiedad"
                    />

                    <input
                        type="text"
                        name="description"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Descripción Propiedad"
                    />

                    <input
                        type="text"
                        name="image"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-[300px] py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Imagenes (ver como aplicar)"
                    />

                    <input
                        type="text"
                        name="service"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-fit py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Servicio (alquiler/venta)"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type="number"
                        name="price"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Precio Propiedad"
                    />

                    <input
                        type="text"
                        name="contact"

                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Número de teléfono (PARA LLAMADAS)"
                    />

                    <input
                        type="text"
                        name="location"

                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Ubicacion"
                    />
                    <input
                        type="text"
                        name="terrainSize"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Tamaño total terreno"
                    />
                    <input
                        type="text"
                        name="constructionSize"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Tamaño total construccion"
                    />
                    <input
                        type="number"
                        name="rooms"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Numero habitaciones"
                    />
                    <input
                        type="number"
                        name="restrooms"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Numero banos"
                    />
                    <input
                        type="number"
                        name="parking"
                        className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Numero parqueos"
                    />
                </div>
                <button
                    type="submit"
                    className="h-[100px] m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded inline-block py-3 lg:py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
                >
                    Publicar Propiedad
                </button>
            </form>
        </div>
    );
}



export default CreatePost;




