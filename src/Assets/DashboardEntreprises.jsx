import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardEntrerpises ({quantite, name, variation, valeur}) {
    const navigate = useNavigate();
    const handleBuy = () => {
      navigate('/Myre');
    }
    
    return( 
<section className="flex cursor-pointer justify-around mt-10 p-5 bg-white w-full shadow-2xl transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
      <span className="m-10 text-[28px] w-[100px]">{name}</span>
      <div className='flex mt-10 ml-28'>
      <span className="text-[28px] text-[#62C354]">{`${parseFloat(variation).toFixed(2)}%`}</span>                
      <img
        className="mt-1 h-[30px] w-[30px]"
        alt="increase"
        src="/increase.svg"
      />
      </div>
      <div className='flex mt-10 ml-24'>
      <span className="text-[28px] text-[#62C354]">{`${parseFloat(valeur).toFixed(1)}`}</span>
      <img
        className="mt-1 h-[30px] w-[30px]"
        alt="increase"
        src="/increase.svg"
      />
      </div>
      <span className="m-10 ml-24 text-[28px]">{`${parseFloat(quantite).toFixed(2)}`}</span>
          <div className="flex flex-col">
          <button className="cursor-pointer rounded p-2 mt-7 bg-[#81BF73] text-smi text-white" onClick={handleBuy}>Acheter</button>
          <button className="cursor-pointer rounded p-2 mt-1 bg-[#EE6B5F] text-smi text-white" onClick={handleBuy}>Vendre</button>
          </div>
    </section>
    )
}
export default DashboardEntrerpises;