import React, { useEffect } from "react";

const Benefits = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="">
            <div className="min-h-[70px] w-full">
            </div>
            <div className="flex justify-center items-center">
                <div className="max-w-2xl mx-4 text-left">
                    <h3 className="text-4xl lg:text-5xl font-bold mb-1 mt-[50px] text-[#042b5e] ">Beneficios de trabajar con nosotros!</h3>
                    <div className="mt-1">
                        <p className="text-3xl py-6 text-[#042b5e]/80">Desde la venta y alquiler de propiedades hasta la búsqueda precisa de tu próximo hogar, estamos aquí para transformar cada paso del proceso inmobiliario en una experiencia emocionante y satisfactoria.</p>
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


    );
};


export default Benefits;
