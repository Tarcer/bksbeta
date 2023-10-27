import React, { useEffect, useState } from 'react';
import { ref, onValue, getDatabase } from "firebase/database";
import DashboardEntrerpises from "../Assets/DashboardEntreprises";

const CAR2 = () => {
  const database = getDatabase();
  const [quantiteBnf,setQuantiteBnf]=useState(0);
  const [variation, setVariation]= useState(0);
  const [lastPrice, setLastPrice]= useState(0);
  const callAllInformations = ref(database, `globalInformation`);
  
  useEffect(() => {
  function unsubscribeInformations () {
    new Promise((resolve) => {
      onValue(callAllInformations, (snapshot) => {
      const informations = snapshot.val();
      setLastPrice(informations.informationArray[0].lastPrice)
      setVariation(informations.informationArray[0].variation)
      setQuantiteBnf(snapshot.val().informationArray[0].quantiteBnf);
      resolve();
    });
  })}

  unsubscribeInformations();
  }, []);
    return (
      <div className="flex justify-center flex-col items-center mb-5" data-aos="fade-up">
            <div className="p-5">
                <section>
                    <span className="m-10 text-[38px]">Entreprise</span>
                    <span className="m-10 text-[38px]">Variation</span>
                    <span className="m-10 text-[38px]">Valeur</span>
                    <span className="m-10 text-[38px]">Quantité</span>
                </section>
            
            <DashboardEntrerpises name={"Myre"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
            <DashboardEntrerpises name={"Bamboo"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
            </div>
      </div>
    );
  };
  
  export default CAR2;