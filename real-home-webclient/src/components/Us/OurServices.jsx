import React from "react";
import fondo from '../../img/services3.webp';

const OurServices = () => {
  return (
    <div className="">
      <div className="min-h-[800px] w-full">
        <div className="min-h-[800px] flex flex-col w-full">
          <img className="top-[64px] left-0 w-full h-[200px] object-cover mt-[64px]" src={fondo} alt="fondo" />
          <div className="bg-black/30 absolute top-0 left-0 w-full h-[200px] mt-[64px]" />
          <div className="absolute top-[128px] w-full h-full flex flex-col justify-center text-white">

          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-2xl mx-4 text-left">
              <h2 className="text-3xl font-bold mb-6 mt-[50px]">SERVICIOS</h2>
              <p className="mb-6">
                Venta o Alquiler de tu Propiedad: Te ofrecemos asesoramiento experto y una estrategia personalizada para la venta o alquiler de tu propiedad, asegurando un proceso eficiente y efectivo desde el inicio hasta el cierre.
              </p>
              <p className="mb-0">
                Venta o Alquiler de Propiedades del Catálogo: Contamos con un variado catálogo de propiedades cuidadosamente seleccionadas para la venta o alquiler. Cada opción ha sido evaluada minuciosamente para asegurar la calidad de oportunidades inmobiliarias.
              </p>
              <p>
                Búsqueda Personalizada de Propiedades: Nos especializamos en la búsqueda personalizada de propiedades, trabajando estrechamente contigo para entender tus requisitos específicos, preferencias y necesidades. Nuestro enfoque dedicado garantiza encontrar la propiedad ideal que se adapte perfectamente a tu estilo de vida y expectativas.
              </p>
            </div>
          </div>
</div>
      </div>
    </div>
  );
}

export default OurServices;

