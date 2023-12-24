import { useParams } from 'react-router';
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png'
import usePosts from '../../hooks/usePosts';
import { useEffect } from 'react';

const AdminPostView = () => {
  const { postId } = useParams();
  const { loading, getSinglePost, singlePost: post, toggleHidden } = usePosts();

  useEffect(() => {
    getSinglePost(postId);
  }, [postId, getSinglePost]);

  const handleContactUs = () => {
    const whatsappLink =
      'https://api.whatsapp.com/send?phone=%2B50378287736&data=ARBdc2tNAjVnLT0Tg_YPi0WgleGqbrv1e77VyM9PaQc1UEQBZzvdVWqB533gILDdyCvR-brfwVDmWvMjtEr98UeBnElA9PJaEtuf6h7On7Lu_xarA3AHU0OVpclr5jVFnX2sp4y8u7F_oeuKmRkV9TktJg&source=FB_Page&app=facebook&entry_point=page_cta';

    window.open(whatsappLink, '_blank');
  };

  const handleVisibility = () => {
    toggleHidden(postId);
  }

  const handleDelete = () => {
    
  }

  return (
    <div className="container mx-auto mt-[90px] mb-10 p-8 bg-gray-200 rounded-lg shadow-lg">

      {
        loading ? <p>Cargando...</p> :
        <>
          <section className='flex flex-row items-center justify-center gap-7 mb-4'>
            {
              post.images?.map(image => (
                <figure key={image} className='h-96 w-3/5 shadow-lg'>
                  <img className="w-full h-full object-cover rounded-lg" src={image} alt='/' />
                </figure>
              ))
            }
          </section>

          <h2 className="text-5xl font-RubikMonoOne mb-5 mt-5">{ post.title }</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
            
            <div  className='flex mt-0 sm:order-1 md:order-1 lg:order-1'>
              <p className='mr-2 mt-3 text-xl text-black font-bold uppercase font-spaceGrotesk'>Servicio:</p>
              <p className='mt-3 text-xl text-[#ddc807] font-bold uppercase font-spaceGrotesk'>{ post.service }</p>
            </div>

             <div className="flex mt-4 sm:order-2 md:order-2 lg:order-2">
                <p className="text-lg mr-2">Tipo de Propiedad:</p>
                <p className="text-2xl font-bold uppercase text-[#042b5e]">{post.type}</p>
              </div>

            <div className="flex mt-4 sm:order-2 md:order-2 lg:order-2">
              <p className="text-lg mr-2">Ubicacion:</p>
              <p className="text-2xl text-[#042b5e] font-bold">{ post.location }</p>
            </div>

            <div className='flex mt-4 sm:order-3 md:order-3 lg:order-3'>
              <p className="text-lg mr-2">Precio:</p>
              <p className="text-2xl text-black font-bold ">${ post.price }</p>
            </div>

            <div className='flex mt-3 sm:order-4 md:order-4 lg:order-4'>
              <p className="text-lg mr-2">Cuartos:</p>
              <p className='text-2xl font-bold'>{ post.rooms }</p>
            </div>

            <div className='flex mb-2 mt-2 sm:order-5 md:order-5 lg:order-5'>
              <p className="text-lg mr-2">Baños:</p>
              <p className='text-2xl font-bold '>{ post.restrooms }</p>
            </div>

            <div className='flex sm:mb-6 sm:mt-2 lg:mt-0 lg:mb-0 lg:order-6'>
              <p className="text-lg mr-2">Parqueos:</p>
              <p className='text-2xl font-bold'>{ post.parking }</p>
            </div>

            <div className='flex mt-2 sm:order-7 md:order-7 lg:order-7'>
              <p className="text-lg mr-2">Tamaño del terreno:</p>
              <p className='text-xl font-bold'>{ post.terrainSize } Varas cuadradas</p>
            </div>

            <div className='flex mb-4 mt-3 sm:order-8 md:order-8 lg:order-8'>
              <p className="text-lg mr-2">Tamaño de construccion total:</p>
              <p className='text-xl font-bold'>{ post.constructionSize } varas cuadradas</p>
            </div>

            <div className='flex mt-1 sm:order-9 md:order-9 lg:order-9'>
              <p className="text-lg mr-2">Contacto:</p>
              <p className='text-2xl font-bold'>{ post.contact }</p>
            </div>

            <div className='flex sm:mt-4 md:mt-3 lg:mt-3 sm:order-10 md:order-10 lg:order-10'>
              <p className="text-lg mr-2">Descripción:</p>
              <p className="text-gray-700 font-bold text-xl">{ post.description }</p>
            </div>       
          </div>

          <div className='flex gap-4 mx-aut0 mt-4 mb-4'>
              <button
                onClick={handleContactUs}
                className="text-lg font-bold bg-white border border-green-500 text-green-500 px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 hover:text-white flex items-center"
              >
                <span className="mr-2">
                  <img src={WhatsAppIcon} alt="WhatsApp Icon" className="w-6 h-6" />
                </span>
                WhatsApp
              </button>

              </div>
              <div className='flex gap-4 text-center'>

              <button className='text-center font-bold py-1 px-4 rounded text-white' onClick={handleVisibility} style={{
                background: post.hidden ? '#ddc807' : "rgb(34 197 94)" 
              }}>
                { post.hidden ? "Oculto" : "Visible" }
              </button>
              <button onClick={handleDelete} className='bg-rose-500 text-center font-bold py-1 px-4 rounded text-white'>
                Eliminar Post
              </button>

              </div>
        </>
      }
    </div>
  );
}

export default AdminPostView;