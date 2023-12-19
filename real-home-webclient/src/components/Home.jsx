import React from "react";
import fondo from "../img/fondopto.jpg"
import img1 from "../img/aren.jpeg";
import img2 from "../img/pisicin.jpeg";
import img3 from "../img/visti.jpeg";
import img4 from "../img/rncho.jpeg";
import img5 from "../img/Pslmers.jpeg";


const Home = () => {

    
    return (
        <div>
        <div className="w-full h-full">

            <img className="top-0 left-0 w-full h-[700px] object-cover" src={fondo} alt="fondo" />
            <div className="bg-black/30 absolute top-0 left-0 w-full h-[700px]" />
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                    <p className="font-bolder py-4">Encuentra tu lugar perfecto </p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Ethel Salazar-Real Home</h1>
                    <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsum debitis fugiat corporis eligendi sapiente, laudantium unde aut dolor molestiae repellat dolorum maiores inventore iure odit cumque deserunt accusantium esse!</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                    <button className="border py-2 px-3 rounded-full mr-2 bg-white text-black">Buscar propiedades</button>
                    <button className="border py-2 px-3 rounded-full bg-black text-white">Contactanos!</button>
                </div>
            </div>

        </div>
          <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
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
              <h3 className="text-5xl md:text-6xl font-bold">Encuentra tu rancho ideal</h3>
              <p className="text-2xl py-6 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta nihil illo quos error harum, illum, aliquid ipsum hic, laboriosam amet! Dolorum possimus fuga autem, vitae non illo culpa ea!</p>
              <p className="pb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis quam corrupti, ad sed et nostrum optio commodi modi rerum debitis earum aut numquam est quod? Assumenda reprehenderit ex laboriosam!</p>
          <div>
              <button className="border py-2 px-3 rounded-full bg-white text-black border-black mr-4 hover:shadow-xl"> Conoce mas</button>
              <button className="border py-2 px-3 rounded-full bg-black text-white border-black hover:shadow-xl"> Contactanos!</button>
          </div>
          </div>
      </div>
      <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
            <p className="text-lg font-bold text-gray-700">Nuestra Mision</p>
            <p className="text-lg font-bold text-gray-700">Contactanos!</p>
            <p className="text-lg font-bold text-gray-700">Nuestro Equipo</p>
        </div>
      </div>
    )
}

export default Home;
