import { useState } from "react";
import Filter from './Filter/Filter';
import { Link } from "react-router-dom";
import img from '../../img/ranchos/pisicin.jpeg';
import img2 from '../../img/slides/slide8.jpeg';

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div>
      <div className="max-w-7xl mx-10 mt-5 p-4">
        <h2 className="text-4xl font-bold mb-6 mt-12 font-merriweather">
          NUESTRAS PROPIEDADES DISPONIBLES
        </h2>
        <Filter onSelect={handleFilterSelect} className="mb-[80px]" />
      </div>

      
      <div className="mx-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-4">

        <div className="max-w-md bg-gray-100 rounded-md overflow-hidden shadow-md p-2 cursor-pointer">
          <Link to='/PostView'>
            <img src={img} className="w-full h-auto object-cover rounded-md mb-4"/>
            <div className="flex-grow p-4 flex flex-col">
              <div className="flex mb-2">
                <div className="w-[50%] pr-2">
                  <p className="text-3xl font-semibold mb-2 font-anton">Rancho en venta en San Blas</p>
                  <p className="text-lg font-bold text-green-500 mb-2">
                    Precio: $250.000
                  </p>
                </div>
                <div className="w-[50%] pl-2">
                  <p className="bg-[#ddc807] text-center rounded-md text-white font-bold text-xl mb-2">Venta</p>
                  <p className="bg-[#042b5e] text-center rounded-md text-white font-semibold text-xl">Playa</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-md bg-gray-100 rounded-md overflow-hidden shadow-md p-2 cursor-pointer">
          <Link to='/PostView'>
            <img src={img2} className="w-full h-auto object-cover rounded-md mb-4"/>
            <div className="flex-grow p-4 flex flex-col">
              <div className="flex mb-2">
                <div className="w-[50%] pr-2">
                  <p className="text-3xl font-semibold mb-2 font-anton">Apartamento lujoso en San Benito</p>
                  <p className="text-lg font-bold text-green-500 mb-2">
                    Precio: $250.000
                  </p>
                </div>
                <div className="w-[50%] pl-2">
                  <p className="bg-[#ddc807] text-center rounded-md text-white font-bold text-xl mb-2">Alquiler</p>
                  <p className="bg-[#042b5e] text-center rounded-md text-white font-semibold text-xl">Apartamento</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
    
  );
};

export default Properties;
