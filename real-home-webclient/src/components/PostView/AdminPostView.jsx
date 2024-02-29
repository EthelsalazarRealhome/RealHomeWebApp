import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png';
import usePosts from '../../hooks/usePosts';
import { deleteOne } from '../../services/posts.service';
import CreatePost from '../AdminView/CreatePost';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import parkingsvg from '../../img/postsvgs/parked-car.svg';
import roomsvg from '../../img/postsvgs/room.svg';
import bathroomsvg from '../../img/postsvgs/bathroom.svg';
import sizesvg from '../../img/postsvgs/size.svg';
import phonesvg from '../../img/postsvgs/phone.svg.png';

const AdminPostView = () => {
  const { postId } = useParams();
  const { loading, getSinglePost, singlePost: post, toggleHidden } = usePosts();
  const [clickedEdit, setClickedEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSinglePost(postId);
  }, [postId, getSinglePost, clickedEdit]);

  const handleContactUs = () => {
    const whatsappLink =
      'https://api.whatsapp.com/send?phone=%2B50378287736&data=ARBdc2tNAjVnLT0Tg_YPi0WgleGqbrv1e77VyM9PaQc1UEQBZzvdVWqB533gILDdyCvR-brfwVDmWvMjtEr98UeBnElA9PJaEtuf6h7On7Lu_xarA3AHU0OVpclr5jVFnX2sp4y8u7F_oeuKmRkV9TktJg&source=FB_Page&app=facebook&entry_point=page_cta';

    window.open(whatsappLink, '_blank');
  };

  const handleVisibility = () => {
    toggleHidden(postId);
  };

  const handleDelete = async () => {
    await deleteOne(postId);

    navigate('/AdminPostView/deleteConfirmation');
  };

  return (
    <>
      {clickedEdit ? (
        <div className="mt-20 flex flex-col items-center gap-4">
          <button onClick={() => setClickedEdit(false)} className="rounded bg-red-300 p-5 m-4">
            Salir de modo edicion
          </button>
          <CreatePost editMode={true} postId={postId} toEditPost={post} />
        </div>
      ) : (
        <div className="h-full container mx-auto mt-[100px] mb-[30px] p-8 bg-gray-200 rounded-lg shadow-lg">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <>
              <div className="w-full flex flex-row-reverse gap-4">
              <button onClick={() => setIsDelete(true)} className="bg-rose-500 rounded text-2xl font-bold py-2 px-4 m-4 text-white">
                  Eliminar 
                </button>
                <button onClick={() => setClickedEdit(true)} className="rounded hover:bg-white hover:text-black hover:border-black text-white font-bold  text-2xl bg-[#042b5e] py-2 px-4 m-4">
                  Editar
                </button>
                <button onClick={handleVisibility} style={{ background: post.hidden ? '#ddc807' : 'rgb(34 197 94)',}} className="rounded text-2xl font-bold py-2 px-4 m-4 text-white">
                  {post.hidden ? 'Oculto' : 'Visible'}
                </button>
              </div>

              <section className="flex flex-row items-center justify-center gap-7 mb-4">
                {post.images?.map((image) => (
                  <figure key={image} className="h-96 w-3/5 shadow-lg">
                    <img className="w-full h-full object-cover rounded-lg" src={image} alt="/" />
                  </figure>
                ))}
              </section>

              <h2 className="text-5xl font-RubikMonoOne font-bold mb-5 mt-6">{post.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">

              {/* Post Service */}
              <div className='flex mt-0 sm:order-1 md:order-1 lg:order-1'>
                <p className='mt-3 text-4xl text-[#ddc807] font-bold uppercase font-spaceGrotesk'>{post.service}</p>
              </div>

              {/*Tipo */}
              <div className="flex mt-4 sm:order-2 md:order-2 lg:order-2">
                <p className="text-lg mr-2">Tipo de Propiedad:</p>
                <p className="text-2xl font-bold uppercase text-[#042b5e]">{post.type}</p>
              </div>

              {/* Ubicacion */}
              <div className="flex mt-4 sm:order-2 md:order-2 lg:order-2">
                <p className="text-lg mr-2">Ubicacion:</p>
                <p className="text-2xl font-bold">{post.location}</p>
              </div>

              {/* Precio */}
              <div className='flex mt-4 sm:order-3 md:order-3 lg:order-3'>
                <p className="text-lg mr-2">Precio:</p>
                <div className="text-2xl text-black font-bold font-merriweather">${post.price?.toLocaleString()}{(post.service === "alquiler") ? "/mensuales" : null} {post.neg_price ? <p className="text-green-500 font-bold">Negociables</p> : null}</div>
              </div>

              {/* Cuartos */}
              <div className='flex mt-3 sm:order-4 md:order-4 lg:order-4'>
                <img src={roomsvg} alt="room icon" className="w-6 h-6 mr-2" />
                <p className="text-lg  mr-2">Cuartos:</p>
                <p className='text-2xl font-bold'>{post.rooms}</p>
              </div>

              {/* Banos */}
              <div className='flex mb-2 mt-2 sm:order-5 md:order-5 lg:order-5'>
                <img src={bathroomsvg} alt="bathroom icon" className="w-6 h-6 mr-2" />
                <p className="text-lg mr-2">Baños:</p>
                <p className='text-2xl font-bold '>{post.restrooms}</p>
              </div>

              {/* Parqueos */}
              <div className='flex sm:mb-6 sm:mt-2 lg:mt-0 lg:mb-0 lg:order-6'>
                <img src={parkingsvg} alt="Parking icon" className="w-6 h-6 mr-2" />
                <p className="text-lg mr-2">Parqueos:</p>
                <p className='text-2xl font-bold'>{post.parking}</p>
              </div>

              {/* Tamano del terreno */}
              <div className='flex mt-2 sm:order-7 md:order-7 lg:order-7'>
                <img src={sizesvg} alt="size icon" className="w-6 h-6 mr-2" />
                <p className="text-lg mr-2">Tamaño del terreno:</p>
                <p className='text-xl font-bold'>{post.terrainSize} Varas cuadradas</p>
              </div>

              {/* Tamano de construccion */}
              <div className='flex mb-4 mt-3 sm:order-8 md:order-8 lg:order-8'>
                <img src={sizesvg} alt="size icon" className="w-6 h-6 mr-2" />
                <p className="text-lg mr-2 ">Tamaño de construccion:</p>
                <p className='text-xl font-bold'>{post.constructionSize} Varas cuadradas</p>
              </div>

              {/* Contacto */}
              <div className='flex mt-1 sm:order-9 md:order-9 lg:order-9'>
                <img src={phonesvg} alt="phone icon" className="w-6 h-6 mr-2" />
                <p className="text-lg mr-2">Contacto:</p>
                <p className='text-2xl font-bold'>{post.contact}</p>
              </div>

              {/* Descripcion */}
              <div className='flex sm:mt-4 md:mt-3 lg:mt-3 sm:order-10 md:order-10 lg:order-10'>
                <p className="text-lg mr-2">Descripción:</p>
                <p className="text-gray-700 font-bold text-xl">{post.description} </p>
              </div>

              </div>

              <div className="grid grid-cols-2 gap-4">
              </div>
            </>
          )}
        </div>
      )}
      {isDelete && (
        <DeleteConfirmationModal onCancel={() => setIsDelete(false)} onConfirm={handleDelete} />
      )}
    </>
  );
};

export default AdminPostView;
