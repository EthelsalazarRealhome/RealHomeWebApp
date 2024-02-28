import React, { useEffect } from 'react';
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png';
import usePosts from '../../hooks/usePosts';
import { useParams } from 'react-router-dom';
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

  return (
    <div>
      <button
        className="mt-16 md:mt-8 lg:mt-12 text-xl md:text-2xl font-bold bg-[#042b5e] border border-[#ddc807] text-white px-4 md:px-6 py-2 md:py-4 rounded-full transition duration-300 hover:bg-[#ddc807] hover:border-[#042b5e] hover:text-black flex items-center fixed top-4 md:top-8 left-4 md:left-8"
        onClick={handleGoBack}
      >
        <span className="mr-2 flex-shrink-0">
          &larr;
        </span>
        <span className="flex-shrink-0">
          Return
        </span>
      </button>

      <div className="container mx-auto mt-16 p-8 lg:p-16">
        {loading ? (
          <p className="h-screen">Cargando...</p>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row mt-8 md:mt-12 lg:mt-16">
              <ImgSlider images={post.images} />
              <div className="lg:ml-8">
                <h2 className="text-4xl lg:text-5xl font-RubikMonoOne font-bold mb-2 lg:mb-5 mt-5">{post.title}</h2>
                <p className="mt-2 text-2xl font-spaceGrotesk">{post.location}</p>
                <p className="mt-6 text-3xl lg:text-4xl text-black font-bold">Precio: ${post.price}</p>
                <p className='mt-12 text-3xl  text-[#ddc807] uppercase font-spaceGrotesk'>{post.service}</p>
                <div className='flex mt-12'>
                  <p className="text-2xl uppercase ">Tipo de Propiedad:</p>
                  <p className="ml-2 text-2xl font-spaceGrotesk uppercase">{post.type}</p>
                </div>
                <div className='mt-8 flex'>
                  <img src={phonesvg} alt="phone icon" className="w-6 h-6 mr-2" />
                  <p className="text-lg mr-2">Contacto:</p>
                  <p className='text-2xl font-bold'>{post.contact}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:flex lg:items-center">
              <p className="lg:mr-7 text-gray-700 font-bold text-xl mb-8">{post.description}</p>
              <div className="lg:mt-0 mt-4">
                <button
                  className="text-2xl font-bold bg-white border border-green-500 text-green-500 px-6 py-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white flex items-center"
                  onClick={handleContactUs}
                >
                  <span className="mr-2 flex-shrink-0">
                    <img src={WhatsAppIcon} alt="WhatsApp Icon" className="w-8 h-8" />
                  </span>
                  <span className="flex-shrink-0">
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
            <h3 className="mb-4 text-2xl lg:text-4xl font-bold font-anton tracking-wide">
              Trabaja con nosotros hoy mismo!
            </h3>
            <p className="mb-8 text-base lg:text-xl tracking-wide font-semibold font-anton text-black">
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
