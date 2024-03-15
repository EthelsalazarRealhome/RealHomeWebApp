import React, { useEffect } from "react";
import fondo from "../img/fondopto.jpg";
import img1 from "../img/ranchos/aren.jpeg";
import img2 from "../img/ranchos/pisicin.jpeg";
import img3 from "../img/ranchos/visti.jpeg";
import img4 from "../img/ranchos/rncho.jpeg";
import img5 from "../img/ranchos/Pslmers.jpeg";
import { Link, useNavigate } from "react-router-dom";
import propertie1 from '../img/prueba1.jpeg';
import phonesvg from '../img/postsvgs/phone.svg.png';
import Video from '../components/Video';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    const handleGoProperties = () => {
        navigate("/Properties");
    };

    const handleContactUs = () => {
        const whatsappLink =
            'https://api.whatsapp.com/send?phone=%2B50378287736&data=ARBdc2tNAjVnLT0Tg_YPi0WgleGqbrv1e77VyM9PaQc1UEQBZzvdVWqB533gILDdyCvR-brfwVDmWvMjtEr98UeBnElA9PJaEtuf6h7On7Lu_xarA3AHU0OVpclr5jVFnX2sp4y8u7F_oeuKmRkV9TktJg&source=FB_Page&app=facebook&entry_point=page_cta';

        window.open(whatsappLink, '_blank');
    };

    const handleOurServices = () => {
        navigate("/OurServices");
    };

    const handleTeam = () => {
        navigate("/Team");
    };

    const handleBenefits = () => {
        navigate("/Benefits");
    };

    const handleContactUsMessage = () => {
        const message = 'https://wa.link/53yqsh';
        window.open(message, '_blank');
    };

    return (
        <div>
        <div>
            <div className="w-full h-full">
                <img className="top-0 left-0 w-full h-[750px] object-cover" src={fondo} alt="fondo" />
                <div className="bg-black/30 absolute top-0 left-0 w-full h-[750px]" />
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                    <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                        <p className="font-bolder text-2xl py-4">Tenemos lo que necesitas!</p>
                        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Ethel Salazar-Real Home</h1>
                        <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl mt-1"> Bienvenido a Real Home, donde convertimos sueños en hogares y necesidades en realidades. Somos más que una empresa de bienes raíces, somos constructores de experiencias habitables. Con un equipo de expertos dedicados a superar expectativas, ofrecemos un servicio excepcional, transparente y personalizado para cada cliente.</p>
                        <button className="mt-1 border py-2 px-3 rounded-full mr-2 bg-white text-black hover:opacity-80 transition duration-300 ease-in-out"
                            onClick={handleGoProperties}> Buscar propiedades
                        </button>
                        <button onClick={handleContactUs} className="mt-1 border-2 py-2 px-3 rounded-full bg-black text-white hover:opacity-80 transition duration-300 ease-in-out">Contactanos!</button>
                    </div>
                </div>

            </div>

            <div className="mt-5 mb-4 bg-[#042b5e]">
                <div className="max-w-[900px] m-auto px-4 py-3 flex flex-wrap justify-between">
                    <button onClick={handleOurServices} className="text-xl font-bold text-gray-700 bg-[#ddc807] rounded p-4">Nuestros Servicios </button>
                    <button onClick={handleTeam} className="text-xl bg-[#042b5e] rounded p-4 text-white font-bold">Quienes Somos/Nuestro Equipo</button>
                    <button onClick={handleBenefits} className="text-xl font-bold text-gray-700 bg-[#ddc807] rounded p-4">Conoce los beneficios!</button>
                </div>
            </div>

            <div className="max-w-[1400px] m-auto py-2 px-4 grid lg:grid-cols-2 gap-4">
                {/*left side*/}
                <div className="grid grid-cols-2 grid-rows-6 h-auto">
                    <img className="row-span-3 object-cover w-full h-full p-2 " src={img1} alt="/" />
                    <img className="row-span-2 object-cover w-full h-full p-2 " src={img2} alt="/" />
                    <img className="row-span-2 object-cover w-full h-full p-2 " src={img3} alt="/" />
                    <img className="row-span-3 object-cover w-full h-full p-2 " src={img4} alt="/" />
                    <img className="row-span-2 object-cover w-full h-full p-2 " src={img5} alt="/" />
                </div>
                {/*right side*/}
                <div className="flex flex-col h-full justify-center">
                    <h3 className="text-6xl md:text-6xl font-bold">Encuentra tu rancho ideal</h3>
                    <p className="text-3xl py-6 "> Desde la venta y alquiler de propiedades hasta la búsqueda precisa de tu próximo hogar, estamos aquí para transformar cada paso del proceso inmobiliario en una experiencia emocionante y satisfactoria. Descubre cómo podemos hacer realidad tus objetivos inmobiliarios hoy mismo.</p>
                    <div>
                        <Link to="/Properties" state={{ from: "playa" }} className="text-2xl md:text-xl lg:text-2xl border py-3 px-4 rounded-full bg-[#042b5e] text-white font-bold hover:text-white hover:bg-[#ddc807] transition duration-300 ease-in-out mr-4 hover:shadow-xl">
                            <span className="hidden lg:inline">Conoce mas sobre nuestros ranchos disponibles!</span>
                            <span className=" sm:inline lg:hidden">Quiero conocer mas!</span>
                        </Link>
                    </div>
                </div>
            </div>

            <hr></hr>
            
            <div className="flex flex-col justify-center items-center max-w-screen-md w-full p-5 mx-auto">
                <p className="mb-5 font-merriweather text-4xl font-bold"></p>
                <Video />
            </div>

            <hr></hr>

            <div className='mt-12 mb-10 flex items-center justify-center'>
                <section className="flex flex-col w-[1600px] h-full lg:flex-row lg:h-96">
                    <div className="inline-flex flex-col justify-center w-full px-4 py-12 bg-[#ddc807] md:px-12 lg:w-1/2">
                        <h3 className="mb-4 text-4xl font-bold font-anton tracking-wide 2xl:text-4xl ">Trabaja con nosotros hoy mismo!</h3>
                        <p className="mb-8 tracking-wide font-semibold font-anton text-black text-xl"> Obtén orientación individualizada para preparar y presentar tu propiedad de manera atractiva en el mercado, destacando sus mejores características y valor.
                        </p>
                        <div>
                            <a onClick={handleContactUsMessage}
                                className="inline-flex items-center px-3 py-3 text-white transition-all duration-300 ease-in-out rounded-md 2xl:px-6 2xl:py-3 bg-green-500 hover:bg-white hover:text-green-600 cursor-pointer">
                                <span className="pr-4 font-semibold tracking-wide">Contactanos!</span>
                                <img src={phonesvg} alt="phone icon" className="w-6 h-6 mr-2" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src={propertie1} alt="" className="object-cover w-full h-full"></img>
                    </div>
                </section>
            </div>
        </div>
    </div>
    )
}

export default Home;
