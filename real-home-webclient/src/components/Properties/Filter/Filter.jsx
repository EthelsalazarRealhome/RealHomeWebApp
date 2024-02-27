import React from "react";
const typeOptions = ["casa", "apartamento", "playa", "local/oficina/bodega", "terrenos/fincas", "casas de campo"];
const serviceOptions = ["venta", "alquiler"];

const Filter = ({ setFilter }) => {

  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-7 filter-container">
      <span className="text-lg lg:text-xl font-semibold text-[#042b5e]">Filtrar mi búsqueda por: </span>
      <div className="flex flex-col lg:flex-row gap-7">
        <select className="border border-blue-800 h-7 lg:w-48 rounded-lg pl-3" onChange={(e) => setFilter(prev => ({ ...prev, type: e.target.value }))}>
          <option value="" className="text-xl ">Todos</option>
          {typeOptions.map((option, index) => (
            <option className="text-xl" key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select className="border-blue-900 border  h-7 lg:w-48 rounded-lg pl-3" onChange={(e) => setFilter(prev => ({ ...prev, service: e.target.value }))}>
          <option value="" className="text-xl ">Todos</option>
          {serviceOptions.map((option, index) => (
            <option className="text-xl" key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filter;