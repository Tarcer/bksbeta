import React, { useEffect, useState } from 'react';
import arcticle from "./imgMYRE.jpg";
import NavVariation from '../components/NavVariation';
import DashboardEntrerpises from '../components/DashboardEntreprises';
import { ref, onValue, getDatabase } from "firebase/database";
import CBD from "../pages/CBD.jpg";

export default function Home() {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="container pt-4 my-3">
      <NavVariation  />
      <h2 className="display-10 text-dark text-center mt-2">Acheter et Trader vos Contrats AR :</h2>
      <p className="font-weight-light text-center textcolor" >Un contrat AR est une valeure mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre. 
      </p>
      <div className="outer-container mt-5">
       <h4 className="h3 text-dark text-center mb-3"> Les CAR en circulation</h4>
      <table className="table text-dark ">
        <tr><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th><th>Quantité</th></tr>
       <DashboardEntrerpises name={"Myre"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
      </table>
      </div>
      <div className="other-container  mt-5">
      <div>
      <h4 className="h3 text-dark text-center" style={{textDecoration: 'underline'}} >Activité du Marché :</h4>
      <table className="table table-dark text-dark mt-3">
       <tr><td className="h6 text-dark">Valeur des transactions</td><td className='textcolor'>1 000 000 €</td></tr>  
       <tr><td className="h6 text-dark">Capitalisation du marché</td><td className='textcolor'>10 000 000 €</td></tr>  
       <tr><td className="h6 text-dark">BNF TOP 30</td><td className='textcolor'>1000 000 €</td></tr>  
       <tr><td className="h6 text-dark">BNF EN VENTE</td><td className='textcolor'>600 000 €</td></tr>
      </table>
      </div>
      </div>
      <h4 className="h3 text-dark text-center mt-5" style={{textDecoration: 'underline'}}>Commencer votre expérience :</h4>
      <div className="z-n1 ratio ratio-16x9 mt-2">
       <iframe src="https://www.youtube.com/embed/gs4Tyh-iPUE" title="YouTube video" allowFullScreen></iframe>
      </div>
      <h4 className="display-10 text-dark text-center mt-5" style={{textDecoration: 'underline'}}>Notre Actualitée :</h4>
      <div className="other-container mt-1">
      <div class="card mb-3">
  <img src={arcticle} class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body">
    <h5 class="card-title">Une grande première dans L'esport</h5>
    <p class="card-text">
      Le Partenariat entre Backstorm et Myre offre une nouvelle opportunitée, afin d'investir dans l'esport français.
    </p>
    <p class="card-text">
      <small class="text-muted">Mis en ligne il y a 15 minutes.</small>
    </p>
  </div>
  </div>
</div>
<div className="other-container mt-4">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">L'approche d'une entreprise dans le secteur du CBD</h5>
    <p class="card-text">
      Backstorm se rapproche d'une entreprise dans le domaine du CBD , avec un nouveau listing.
      L'entreprise Bamboo CBD est en pour parler avec notre groupe.
    </p>
    <p class="card-text">
      <small class="text-muted">Mis en ligne il y a 5 minutes.</small>
    </p>
  </div>
  <img src={CBD} class="card-img-bottom" alt="Camera"/>
  </div>
</div>
    </div>
  )
}
