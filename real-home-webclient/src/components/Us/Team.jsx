
import foto from "../../img/logos/logoblue.jpg";

const Team = () => {
  return (
    <div className="">
    <div className="min-h-screen w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">QUIENES SOMOS</h2>
          <p>
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
        <div className="w-full lg:w-1/2 p-8">
          <img className="mt-8 lg:mt-6 w-full h-auto lg:h-[800px]" src={foto} alt="Imagen del equipo" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
