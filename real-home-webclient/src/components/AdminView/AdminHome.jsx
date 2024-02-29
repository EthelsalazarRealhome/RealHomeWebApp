import fondo from "../../img/team.jpg"
import { useNavigate } from "react-router-dom";

const AdminHome = () => {

  const navigate = useNavigate();

  const handleMyPosts = () => {
    navigate('/Admin/MyPosts');
  };

  const handlePostProperties = () => {
    navigate('/Admin/CreatePost')
  }

  return (
    <>
      <div className="w-full h-[86.8vh] pb-[50px]">

        <img className="top-0 left-0 w-full h-[750px] object-cover" src={fondo} alt="fondo" />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-[750px]" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <p className="font-bolder py-4"> Listo para tu siguiente publicacion</p>
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Bienvenido de nuevo Ethel Salazar-Real Home</h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl mt-1"> Bienvenido a la Administracion de Ethel Salazar-Real Home. Con un equipo de expertos dedicados a superar expectativas, ofrecemos un servicio excepcional, transparente y personalizado para cada cliente.</p>
            <button onClick={handlePostProperties} className="mt-1 border py-2 px-3 rounded-full mr-2 bg-black  text-white text-xl"
            > Publicar propiedades
            </button>
            <button onClick={handleMyPosts} className="mt-1 border py-2 px-3 rounded-full mr-2 bg-black  text-white text-xl"
            > Mis propiedades publicadas
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome;

                  