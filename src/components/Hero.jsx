import React from "react";

const Hero = () => {
    return (
        <>
        <div className="flex flex-col justify-center pl-24 gap-[13px] h-100">
            <div className="text-70xl text-lightcoral font-montserrat max-w-[824px] max-h-[203px] flex flex-col items-start justify-start">
                <i className="font-bold">
                    <span>Acheter </span>
                    <span className="text-black">et</span>
                    <span> Trader</span>
                </i>
                <i className="font-bold text-black mt-[-13px]">
                    vos Contrats AR :
                </i>
                </div>
                <div className="h-32 text-xl text-black">
                <i className="self-stretch p-5 leading-[29px] inline-block font-bold">
                    Un contrat AR est une valeure mobilière qui représente une fraction
                    des bénéfices générés par l’entreprise listée sur Backstorm, sa
                    valeur évoluera en fonction de l’offre et la demande mais aussi de
                    la rentabilité du titre. Le versement des bénéfices s’effectue
                    chaque trimestre.
                </i>
                </div>
      </div>
        </>
    );
  };
  
  export default Hero;