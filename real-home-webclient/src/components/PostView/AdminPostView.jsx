import { useParams } from 'react-router';
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png'
import usePosts from '../../hooks/usePosts';
import { useEffect, useState } from 'react';
import CreatePost from '../AdminView/CreatePost';

const AdminPostView = () => {
  const { postId } = useParams();
  const { loading, getSinglePost, singlePost: post, toggleHidden } = usePosts();
  const [clickedEdit, setClickedEdit] = useState(false);

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
  }

  const handleDelete = () => {

  }

  return (
    <>
      {
        clickedEdit ?
          <div className='mt-20 flex flex-col items-center gap-4'>
            <button onClick={() => setClickedEdit(false)} className='rounded bg-red-300 p-5 m-4'>
              Salir de modo edicion
            </button>
            <CreatePost editMode={true} postId={postId} toEditPost={post}/>
          </div>

          :

          <div className="container mx-auto mt-[70px] p-8 bg-gray-200 rounded-lg shadow-lg">
            {
              loading ? <p>Cargando...</p> :
                <>
                  <div className='w-full flex flex-row justify-between items-center'>
                    <h2 className="h-fit text-3xl font-semibold mb-4">{post.title}</h2>
                    <button onClick={() => setClickedEdit(true)} className='rounded bg-red-300 p-5 m-4'>
                      Editar
                    </button>
                  </div>

                  <section className='flex flex-row items-center justify-center gap-7 mb-4'>
                    {
                      post.images?.map(image => (
                        <figure key={image} className='h-96 w-3/5 shadow-lg'>
                          <img className="w-full h-full object-cover rounded-lg" src={image} alt='/' />
                        </figure>
                      ))
                    }
                  </section>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-lg font-bold mb-2">Descripción:</p>
                      <p className="text-gray-700">{post.description}</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Precio:</p>
                      <p>${post.price}</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Ubicacion:</p>
                      <p>{post.location}</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Servicio:</p>
                      <p>{post.service}</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Tipo de propiedad</p>
                      <p>{post.type}</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Tamaño del terreno:</p>
                      <p>{post.terrainSize} varas cuadradas</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Tamaño de construccion total:</p>
                      <p>{post.constructionSize} varas cuadradas</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Cuartos:</p>
                      <p>{post.rooms}</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold mb-2">Baños:</p>
                      <p>{post.restrooms}</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold mb-2">Parqueos:</p>
                      <p>{post.parking}</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold mb-2">Contacto:</p>
                      <p>{post.contact}</p>
                    </div>
                    <div>
                      <button
                        onClick={handleContactUs}
                        className="text-lg font-bold bg-white border border-green-500 text-green-500 px-4 py-2 rounded-full transition duration-300 hover:bg-green-500 hover:text-white flex items-center"
                      >
                        <span className="mr-2">
                          <img src={WhatsAppIcon} alt="WhatsApp Icon" className="w-6 h-6" />
                        </span>
                        WhatsApp
                      </button>
                      <button onClick={handleVisibility} style={{
                        background: post.hidden ? '#ddc807' : "rgb(34 197 94)"
                      }} className='w-16 rounded-lg'>
                        {post.hidden ? "Oculto" : "Visible"}
                      </button>
                      <button onClick={handleDelete} className='bg-rose-500 w-16 rounded-lg'>
                        Eliminar Post
                      </button>
                    </div>
                  </div>
                </>
            }
          </div>
      }
    </>
  );
}

export default AdminPostView;