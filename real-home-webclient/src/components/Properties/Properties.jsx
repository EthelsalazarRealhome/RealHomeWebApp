import { useState } from "react";
import Filter from './Filter/Filter'

const Properties = () => {

  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div className="h-[85vh]">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="ml-[50px] text-3xl font-bold mb-6 mt-[50px]">
          NUESTRAS PROPIEDADES DISPONIBLES
        </h2>
        <Filter onSelect={handleFilterSelect} className="mb-6" />
      </div>
    </div>
  );
}

export default Properties;