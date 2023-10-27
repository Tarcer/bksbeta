import React from "react";

const Activite = () => {
  return (
    <section className="flex justify-center flex-col mb-16" data-aos="fade-up">
        <b className="flex justify-center mb-16 text-[70px]">Activités du Marché</b>
        <div className="flex justify-around text-dimgray-100">
            <div className="shadow-2xl p-8 bg-white min-w-[250px] h-[130px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Valeur des transactions</h3>
                <b className="text-8xl text-green-400">
                1 000 000 €
                </b>
                <img
                    className="mx-3 h-[30px] w-[30px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/increase.svg"
                />
            </div>
            <div className="shadow-2xl p-8 bg-white min-w-[250px] h-[130px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Capitalisation du marché</h3>
                <b className="text-8xl inline-block text-gray-200">
                10 000 000 €
                </b>
            </div>
            <div className="shadow-2xl p-8 bg-white min-w-[250px] h-[130px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>BNF Top 30</h3>
                <b className="text-8xl inline-block text-gray-200">
                1 000 000 €
                </b>
            </div>
            <div className="shadow-2xl p-8 bg-white min-w-[250px] h-[130px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>BNF en Vente</h3>
                <div className="flex">
                <b className="text-8xl inline-block text-red-400">
                400 000 
                </b>
                <img
                    className="m-0 h-[30px] w-[30px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/decrease.svg"
                />
                <div className="flex ml-10 flex-col">
                    <button className="cursor-pointer rounded p-2 m-1 bg-[#81BF73] text-smi text-white">Acheter</button>
                    <button className="cursor-pointer rounded p-2 m-1 bg-[#EE6B5F] text-smi text-white">Vendre</button>
                </div>
                </div>
            </div>
            
        </div>
        
    </section>
  );
};

export default Activite;
