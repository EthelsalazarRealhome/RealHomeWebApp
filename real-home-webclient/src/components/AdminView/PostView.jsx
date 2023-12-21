import img from '../../img/ranchos/pisicin.jpeg'
import React from "react";
import WhatsAppIcon from '../../img/WhatsAppLogo.svg.png'

const PostView = () => {

  const handleContactUs = () => {
    const whatsappLink =
      'https://api.whatsapp.com/send?phone=%2B50378287736&data=ARBdc2tNAjVnLT0Tg_YPi0WgleGqbrv1e77VyM9PaQc1UEQBZzvdVWqB533gILDdyCvR-brfwVDmWvMjtEr98UeBnElA9PJaEtuf6h7On7Lu_xarA3AHU0OVpclr5jVFnX2sp4y8u7F_oeuKmRkV9TktJg&source=FB_Page&app=facebook&entry_point=page_cta';

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="container mx-auto mt-[70px] p-8 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Rancho en venta en playa San Blas</h2>
      <img className="w-full h-auto object-cover mb-4" src={img} alt='/' />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg font-bold mb-2">Descripción:</p>
          <p className="text-gray-700">Rancho full equipado y listo para ir a pasar vacaciones y fines de semana en familia, posee aire acondicionado en todas habitaciones, piscina climatizada y mucho mas!</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Precio:</p>
          <p>$250.000</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Ubicacion:</p>
          <p>Res. Isla de San Blas, La Libertad, El Salvador</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Servicio:</p>
          <p>Venta</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Tipo de propiedad</p>
          <p>Playa</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Tamaño del terreno:</p>
          <p>100 varas cuadradas</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Tamaño de construccion total:</p>
          <p>80 varas cuadradas</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Cuartos:</p>
          <p>3</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Baños:</p>
          <p>2</p>
        </div>
        <div>
          <p className="text-lg font-bold mb-2">Parqueos:</p>
          <p>4</p>
        </div>
        <div>
          <p className="text-lg font-bold mb-2">Contacto:</p>
          <p>7828-7736</p>
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
        </div>


      </div>
    </div>
  )
}

export default PostView;