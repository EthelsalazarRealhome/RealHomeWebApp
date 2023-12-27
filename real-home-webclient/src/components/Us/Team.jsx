import React from "react";
import foto from "../../img/ethel.jpeg";

const Team = () => {
  return (
    <div className="">
    <div className="min-h-screen w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <h2 className="p-6 lg:p-0 text-3xl lg:text-5xl font-bold mb-4 lg:mb-12 font-RubikMonoOne text-[#042b5e]">QUIENES SOMOS</h2>
          <p className="bg-[#042b5e] text-white rounded p-6">
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
