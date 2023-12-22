import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminFilter = ({ onSelect }) => {
  const options = [
    "Oculto",
    "Visible",
  ];

  return (
    <div className="filter-container">
      <span className="text-xl font-semibold text-[#042b5e]">ESTADO DE LA PUBLICACION: </span>
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

export default AdminFilter;