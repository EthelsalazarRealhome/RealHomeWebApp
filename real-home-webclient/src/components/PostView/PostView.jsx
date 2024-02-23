import { useParams } from 'react-router';
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png';
import usePosts from '../../hooks/usePosts';
import { useEffect } from 'react';
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
  }, [postId, getSinglePost]);

  const handleContactUs = () => {
    const whatsappLink =
      'https://api.whatsapp.com/send?phone=%2B50378287736&data=ARBdc2tNAjVnLT0Tg_YPi0WgleGqbrv1e77VyM9PaQc1UEQBZzvdVWqB533gILDdyCvR-brfwVDmWvMjtEr98UeBnElA9PJaEtuf6h7On7Lu_xarA3AHU0OVpclr5jVFnX2sp4y8u7F_oeuKmRkV9TktJg&source=FB_Page&app=facebook&entry_point=page_cta';

    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <div className="container mx-auto mt-[100px] p-8 bg-gray-200 rounded-lg shadow-lg">

        {
          loading ? 
            (<p className='h-screen'>Cargando...</p>) 
          : 
            (
              <>

              <div>
              <ImgSlider images={post.images}/>
              </div>

              {/*
              <section className='flex flex-row items-center justify-center gap-7 mb-4'>
                  {post.images?.map(image => (
                    <figure key={image} className='sm:w-full md:w-1/2 lg:w-1/3 h-96 shadow-lg'>
                      <img className="w-full h-full object-cover rounded-lg" src={image} alt='/' />
                    </figure>
                  ))}
              </section>
              */}

                <h2 className="text-5xl font-RubikMonoOne font-bold mb-5 mt-5">{post.title}</h2>

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
                    <p className="text-2xl text-black font-bold font-merriweather">${post.price}</p>
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

                  {/* WhatsApp */}
                  <div className='sm:mt-5 md:mt-5 lg:mt-5 sm:order-11 md:order-11 lg:order-11'>
                    <button
                      onClick={handleContactUs}
                      className="text-2xl font-bold bg-white border border-green-500 text-green-500 px-6 py-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white flex items-center">
                      <span className="mr-2">
                        <img src={WhatsAppIcon} alt="WhatsApp Icon" className="w-8 h-8" />
                      </span>
                      WhatsApp
                    </button>
                  </div>

                </div>
              </>
            )
        }
      </div>
      <div className='mt-12 mb-10 flex items-center justify-center'>
        <section className="flex flex-col w-[1600px] h-full lg:flex-row lg:h-96">
          <div className="inline-flex flex-col justify-center w-full px-4 py-12 bg-[#ddc807] md:px-12 lg:w-1/2">
            <h3 className="mb-4 text-4xl font-bold font-anton tracking-wide 2xl:text-4xl ">Trabaja con nosotros hoy mismo!</h3>
            <p className="mb-8 tracking-wide font-semibold font-anton text-black text-xl"> Obtén orientación individualizada para preparar y presentar tu propiedad de manera atractiva en el mercado, destacando sus mejores características y valor.
            </p>
            <div>
              <a href="https://wa.link/53yqsh"
                className="inline-flex items-center px-3 py-3 text-white transition-all duration-300 ease-in-out rounded-md 2xl:px-6 2xl:py-3 bg-green-500 hover:bg-white hover:text-green-600">
                <span className="pr-4 font-semibold tracking-wide">Contactanos!</span>
                <img src={phonesvg} alt="phone icon" className="w-6 h-6 mr-2" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={propertie1} alt="" className="object-cover w-full h-full"></img>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostView;
