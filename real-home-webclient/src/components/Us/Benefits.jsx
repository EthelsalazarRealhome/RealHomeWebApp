import React, { useEffect } from "react";
import img1 from "../../img/ranchos/aren.jpeg";
import img2 from "../../img/ranchos/pisicin.jpeg";
import img3 from "../../img/ranchos/visti.jpeg";
import img4 from "../../img/ranchos/rncho.jpeg";
import img5 from "../../img/ranchos/Pslmers.jpeg";
import { Link } from "react-router-dom";

const Benefits = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mt-[64px]">
            <div className="max-w-[1400px] m-auto py-2 px-4 grid lg:grid-cols-2 gap-4">
                <div className="grid grid-cols-2 grid-rows-6 h-auto">
                    <img className="row-span-3 object-cover w-full h-full p-2 " src={img1} alt="/" />
                    <img className="row-span-2 object-cover w-full h-full p-2 " src={img2} alt="/" />
                    <img className="row-span-2 object-cover w-full h-full p-2 " src={img3} alt="/" />
                    <img className="row-span-3 object-cover w-full h-full p-2 " src={img4} alt="/" />
                    <img className="row-span-2 object-cover w-full h-full p-2 " src={img5} alt="/" />
                </div>
                <div className="flex flex-col h-full justify-center">
                    <h3 className="text-6xl md:text-6xl font-bold">Beneficios de trabajar con nosotros!</h3>
                    <p className="text-3xl py-6">Desde la venta y alquiler de propiedades hasta la búsqueda precisa de tu próximo hogar, estamos aquí para transformar cada paso del proceso inmobiliario en una experiencia emocionante y satisfactoria.</p>
                    <div>
                        <Link to="/Team">
                            <button className="border py-2 px-3 rounded-full bg-white text-black border-black mr-4 hover:shadow-xl">Conoce mas</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;

