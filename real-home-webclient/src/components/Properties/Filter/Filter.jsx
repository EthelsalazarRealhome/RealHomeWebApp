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
      <span>Filtrar por:</span>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Seleccionar</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;