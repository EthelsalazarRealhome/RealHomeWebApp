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
import ImgSlider from './ImgSlider';

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

              <div className="container mx-auto lg:mx-10 px-6">
        {loading ? (
          <p className="h-screen py-16 text-center text-2xl lg:text-4xl">Cargando propiedad...</p>
        ) : (
          <div className="mx-auto lg:mx-16"> 
            <div className="flex flex-col lg:flex-row mt-2 md:mt-2 lg:mt-2">
              <ImgSlider images={post.images} />
              <div className="lg:ml-8">
                <h2 className="text-4xl lg:text-4xl  font-semibold mb-2 lg:mb-5 mt-5">{post.title}</h2>
                <p className="mt-2 text-2xl">{post.location}</p>
                <div className="mt-6 text-3xl lg:text-2xl text-black ">Precio: ${post.price?.toLocaleString()}{(post.service === "alquiler") ? "/mensuales" : null} {post.neg_price ? <p className="text-green-500 font-bold">Negociables</p> : null}</div>
                <p className='mt-12 text-3xl  text-[#ddc807] uppercase font-spaceGrotesk'>{post.service}</p>
                <p className="mt-8 text-xl lg:text-2xl font-spaceGrotesk uppercase">{post.type}</p>

                <div className='mt-8 flex'>
                  {post.rooms > 0 && (
                    <>
                      <img src={roomsvg} alt="room icon" className="w-6 h-6 mr-2" />
                      <p className="text-lg  mr-2">Cuartos:</p>
                      <p className='text-2xl font-bold'>{post.rooms}</p>
                    </>
                  )}
                </div>

                <div className='mt-1 flex'>
                  {post.restrooms > 0 && (
                    <>
                      <img src={bathroomsvg} alt="bathroom icon" className="w-6 h-6 mr-2" />
                      <p className="text-lg mr-2">Baños:</p>
                      <p className='text-2xl font-bold '>{post.restrooms}</p>
                    </>
                  )}
                </div>

                <div className='mt-1 flex'>
                  {post.parking > 0 && (
                    <>
                      <img src={parkingsvg} alt="Parking icon" className="w-6 h-6 mr-2" />
                      <p className="text-lg mr-2">Parqueos:</p>
                      <p className='text-2xl font-bold'>{post.parking}</p>
                    </>
                  )}
                </div>

                <div className='mt-1 flex'>
                  {post.terrainSize > 0 && (
                    <>
                      <img src={sizesvg} alt="size icon" className="w-6 h-6 mr-2" />
                      <p className="text-lg mr-2">Tamaño del terreno:</p>
                      <p className='text-xl font-bold'>{post.terrainSize} Varas cuadradas</p>
                    </>
                  )}
                </div>

                <div className='mt-1 flex'>
                  {post.constructionSize > 0 && (
                    <>
                      <img src={sizesvg} alt="size icon" className="w-6 h-6 mr-2" />
                      <p className="text-lg mr-2 ">Tamaño de construcción:</p>
                      <p className='text-xl font-bold'>{post.constructionSize} Varas cuadradas</p>
                    </>
                  )}
                </div>
                <div className='mt-8 flex'>
                  <img src={phonesvg} alt="phone icon" className="w-6 h-6 mr-2" />
                  <p className='text-2xl lg:text-xl font-bold'>{post.contact}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:flex lg:items-center">
              <p
                className="lg:mr-7 text-gray-700 font-bold text-xl mb-8"
                style={{ whiteSpace: 'pre-line' }}
              >
                {post.description}
              </p>
              <div className="lg:mt-0 mt-4">
                <button
                  className="text-2xl font-bold bg-white border border-green-500 text-green-500 px-6 py-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white flex items-center"
                  onClick={handleContactUs}
                >
                  <span className="flex mr-4 flex-shrink-0">
                    <img src={WhatsAppIcon} alt="WhatsApp Icon" className="w-8 h-8" />
                    WhatsApp
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
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
