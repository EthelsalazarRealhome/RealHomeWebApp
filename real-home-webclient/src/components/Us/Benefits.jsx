import React, { useEffect } from "react";
import fondo from '../../img/fondo.jpg'

const Benefits = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="w-full h-full">
                <img className="top-0 left-0 w-full lg:h-screen h-[1200px] object-cover" src={fondo} alt="fondo" />
                <div className="">
                    <div className="flex flex-col justify-center">
                        <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
                            <h3 className="ml-2 mt-[550px] lg:mt-0 text-4xl lg:text-6xl md:text-6xl font-bold">Beneficios de trabajar con nosotros!</h3>
                            <div className="bg-[#042b5e]/40 rounded mx-2 mt-12 text-white font-bold">
                            <p className="text-2xl py-6">Desde la venta y alquiler de propiedades hasta la búsqueda precisa de tu próximo hogar, estamos aquí para transformar cada paso del proceso inmobiliario en una experiencia emocionante y satisfactoria.</p>
                            <div className="mb-2">
                            <p className="flex mb-3"> MISION:
                                Ser constructores de sueños y facilitadores de hogares, superando expectativas con un servicio excepcional, personalizado y transparente para cada cliente.
                            </p>
                            <p className="flex mb-3">VISION:
                                Ser para cada cliente un socio confiable y cercano que transforma las aspiraciones inmobiliarias en vivencias emocionantes y exitosas convirtiéndonos en referentes en la industria,
                            </p>
                            <p className="flex mb-3">
                                VALORES:
                                Integridad: Compromiso absoluto con la honestidad, la ética y la transparencia en todas las interacciones y transacciones.
                                Compromiso con el cliente: Prioridad absoluta en comprender las necesidades individuales de cada cliente y superar constantemente sus expectativas.
                                Excelencia: Búsqueda continua de la calidad en el servicio, la atención al detalle y la mejora constante en todas las áreas de operación.
                                Innovación: Mentalidad proactiva para encontrar soluciones creativas y nuevas formas de abordar los desafíos del mercado inmobiliario.
                                Empatía: Demostrar comprensión, empatía y sensibilidad hacia las situaciones y necesidades únicas de cada cliente y colega.
                            </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Benefits;

