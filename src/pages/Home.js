import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arcticle from "./imgMYRE.jpg";
import NavVariation from '../components/NavVariation';
import DashboardEntrerpises from '../components/DashboardEntreprises';
import { ref, onValue, getDatabase } from "firebase/database";

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
    console.log(variation,lastPrice)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
    const handleClickbutton2 = () => {
    navigate("/Entreprise")
  }
  return (
    <div className="container pt-4 my-3">
      <NavVariation  />
      <h2 className="h3 text-dark text-center mt-2">Acheter et Trader vos Contrats AR</h2>
      <p className="font-weight-light text-center textcolor" >Un contrat AR est une valeure mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre. 
      </p>
      <table className="table text-dark mt-5">
        <tr><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th><th>Quantité</th></tr>
       <DashboardEntrerpises name={"Myre"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
      </table>
      <h4 className="h3 text-dark text-center mt-5"> Vérifier mon compte</h4>
      <p className="font-weight-light text-center textcolor" > Vérifier votre compte Backstorm pour accéder à nos services. Les informations collectées respectent le cadre de loi RGPD européennes sur la confidentialité. Vos informations privées sont protégées.</p>
      <div className="row h-50 justify-content-center align-items-center">
      <button className="btn btn-secondary btn-sm btn-bloc mt-3">Vérifier maintenant</button>
      </div>
      <div className="container pt-4 my-3">
      <h4 className="h3 text-dark text-center mt-4">Activité du Marché</h4>
      <table className="table text-dark mt-3">
       <tr><td className="h6 text-dark">Valeur des transactions</td><td className='textcolor'>1 000 000 €</td></tr>  
       <tr><td className="h6 text-dark">Capitalisation du marché</td><td className='textcolor'>10 000 000 €</td></tr>  
       <tr><td className="h6 text-dark">BNF TOP 30</td><td className='textcolor'>1000 000 €</td></tr>  
       <tr><td className="h6 text-dark">BNF EN VENTE</td><td className='textcolor'>600 000 €</td></tr>
      </table>
      </div>
      <h4 className="h3 text-dark text-center mt-5">Commencer votre expérience</h4>
      <div className="ratio ratio-16x9 mt-4">
       <iframe src="https://www.youtube.com/embed/gs4Tyh-iPUE" title="YouTube video" allowFullScreen></iframe>
      </div>
      <div className="container pt-4 my-3">
      <h4 className="text-dark text-center mt-2">Choisisser votre CAR :</h4><div className="row">
      <table className="table text-dark mt-2">
        <tr><th>Bnf</th><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th></tr>
        <DashboardEntrerpises name={"Myre"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
      </table>
      </div>
      </div>
      <h4 className="text-dark text-center mt-4">Notre actualitée :</h4>
      <div className="card mb-3">
        <img className="card-img-top" src={arcticle}  alt="Card cap"/> 
        <h5 className="card-tittle text-center mt-3">Urban Série 5 Avec la MYRE :</h5>
        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button 
        onClick={()=> handleClickbutton2("Entreprise") }
        className="btn btn-warning mt-3">
          Consulter l'article
        </button>
      </div>
    </div>
  )
}
