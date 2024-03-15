import React, { useEffect } from 'react';
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png';
import usePosts from '../../hooks/usePosts';
import { useParams } from 'react-router-dom';
import parkingsvg from '../../img/postsvgs/parked-car.svg';
import roomsvg from '../../img/postsvgs/room.svg';
import bathroomsvg from '../../img/postsvgs/bathroom.svg';
import sizesvg from '../../img/postsvgs/size.svg';
import phonesvg from '../../img/postsvgs/phone.svg.png';
import propertie1 from '../../img/prueba1.jpeg';
import ImgSlider from '../PostView/ImgSlider';

const PostView = () => {
  const { postId } = useParams();
  const { loading, getSinglePost, singlePost: post } = usePosts();

  useEffect(() => {
    getSinglePost(postId);
    window.scrollTo(0, 0);
  }, [postId, getSinglePost]);

  const handleContactUs = () => {
    const whatsappLink =
      'https://api.whatsapp.com/send?phone=%2B50378287736&data=ARBdc2tNAjVnLT0Tg_YPi0WgleGqbrv1e77VyM9PaQc1UEQBZzvdVWqB533gILDdyCvR-brfwVDmWvMjtEr98UeBnElA9PJaEtuf6h7On7Lu_xarA3AHU0OVpclr5jVFnX2sp4y8u7F_oeuKmRkV9TktJg&source=FB_Page&app=facebook&entry_point=page_cta';

    window.open(whatsappLink, '_blank');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <button
          className="mt-16 md:mt-8 lg:mt-16 text-xl md:text-2xl font-bold py-8 px-2 text-black flex items-center top-4 md:top-8 left-4 md:left-8"
          onClick={handleGoBack}
        >
          <span className="mr-0 flex-shrink-0 ml-4">
            &larr;
          </span>
          <span className="flex-shrink-0 p-2">
            Return
          </span>
        </button>
      </div>

      <div className="container mx-8 px-6">
        {loading ? (
          <p className="h-screen py-16 text-center text-2xl lg:text-4xl">Cargando propiedad...</p>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row mt-2 md:mt-2 lg:mt-2">
              <ImgSlider images={post.images} />
              <div className="lg:ml-8">
                <h2 className="text-4xl lg:text-4xl font-RubikMonoOne mb-2 lg:mb-5 mt-5">{post.title}</h2>
                <p className="mt-2 text-2xl">{post.location}</p>
                <div className="mt-6 text-3xl lg:text-2xl text-black ">Precio: ${post.price?.toLocaleString()}{(post.service === "alquiler") ? "/mensuales" : null} {post.neg_price ? <p className="text-green-500 font-bold">Negociables</p> : null}</div>
                <p className='mt-12 text-3xl  text-[#ddc807] uppercase font-spaceGrotesk'>{post.service}</p>
                <div className='flex mt-8'>
                  <p className="text-xl uppercase ">Tipo de Propiedad:</p>
                  <p className="ml-2 text-xl font-spaceGrotesk uppercase">{post.type}</p>
                </div>

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
                  <p className="text-lg mr-2">Contacto:</p>
                  <p className='text-2xl font-bold'>{post.contact}</p>
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
          </>
        )}
      </div>

      <div className="mt-2 md:mt-4 lg:mt-10 mb-10 flex items-center justify-center">
        <section className="flex flex-col w-full lg:flex-row lg:w-[1600px] lg:h-96">
          <div className="w-full lg:w-1/2 px-4 py-12 bg-[#ddc807] lg:px-12">
            <h3 className="mb-4 text-2xl lg:text-4xl font-anton tracking-wide">
              Trabaja con nosotros hoy mismo!
            </h3>
            <p className="mb-8 text-base lg:text-xl tracking-wide font-anton text-black">
              Obtén orientación individualizada para preparar y presentar tu propiedad de manera
              atractiva en el mercado, destacando sus mejores características y valor.
            </p>
            <div>
              <a
                href="https://wa.link/53yqsh"
                className="inline-flex items-center px-3 py-3 text-white transition-all duration-300 ease-in-out rounded-md lg:px-6 lg:py-3 bg-green-500 hover:bg-white hover:text-green-600"
              >
                <span className="pr-4 font-semibold tracking-wide">Contactanos!</span>
                <img src={phonesvg} alt="phone icon" className="w-6 h-6 mr-2" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={propertie1} alt="" className="object-cover w-full h-full" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostView;
