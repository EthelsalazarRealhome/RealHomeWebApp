import React, {useEffect} from "react";
import foto from "../../img/ethel.jpeg";

const Team = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-8">
      <div className="min-h-screen w-full">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 lg:p-8">
            <h2 className="p-5 lg:p-0 text-2xl lg:text-4xl mb-0 lg:mb-12 text-black">QUIENES SOMOS</h2>
            <p className="text-[#042b5e] lg:text-lg font-semibold py-0 px-6 ">
              En Real Home, estamos liderados por Ethel Salazar, una economista con
              una visión orientada al cliente y madre de cuatro hijos. Nuestro
              equipo se destaca en el mundo inmobiliario por ofrecer un servicio
              excepcional y personalizado. Basamos nuestra filosofía en la
              transparencia y la dedicación, buscando siempre innovar para satisfacer
              las necesidades únicas de nuestros clientes. Desde la búsqueda de la
              propiedad ideal hasta el cierre de transacciones, nos esforzamos por
              convertir cada experiencia en algo extraordinario, convirtiendo sueños
              en realidades habitables.
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 pt-8 px-6">
            <img className="mt-12 lg:mt-16 w-full h-auto lg:h-auto mb-0" src={foto} alt="Imagen del equipo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
