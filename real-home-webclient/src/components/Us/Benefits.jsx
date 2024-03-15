import React, { useEffect } from "react";
import fondo from '../../img/fondo.jpg'

const Benefits = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                            <h3 className="text-4xl lg:text-5xl font-bold mb-3 mt-[50px]">Beneficios de trabajar con nosotros!</h3>
                            <div className="mt-4 text-black">
                                <p className="text-3xl py-6">Desde la venta y alquiler de propiedades hasta la búsqueda precisa de tu próximo hogar, estamos aquí para transformar cada paso del proceso inmobiliario en una experiencia emocionante y satisfactoria.</p>
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
