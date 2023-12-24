import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Filter = ({ onSelect }) => {
  const options = [
    "Casa",
    "Apartamento",
    "Playa",
    "Oficina/Bodega/Local",
    "Terrenos/Fincas",
    "Casas de campo",
  ];

  return (
    <div className="filter-container">
      <span className="text-xl font-semibold text-[#042b5e]">Filtrar mi busqueda por: </span>
      <select className="bg-[#ddc807]/40" onChange={(e) => onSelect(e.target.value)}>
        <option value="" className="text-xl ">Seleccionar</option>
        {options.map((option, index) => (
          <option className="text-xl" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;