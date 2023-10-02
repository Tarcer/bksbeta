import React, { useEffect, useState } from "react";
import NavVariation from "../components/NavVariation";
import DashboardEntrerpises from '../components/DashboardEntreprises';
import { ref, onValue, getDatabase } from "firebase/database";
import bnfm from "../pages/imgMYRE.jpg";




const ProductPage = () => {
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

  return (
    <div className="container pt-4 my-3">
        <NavVariation />
    <h1 className="display-10 text-dark text-center">
          Liste des CAR :
      </h1>
      <p className="font-weight-light text-center textcolor">Un contrat AR est une valeure mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre.</p>
      <div className="outer-container mt-5">
      <table className="table text-dark ">
        <tr><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th><th>Quantité</th></tr>
       <DashboardEntrerpises name={"Myre"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
      </table>
      </div>
      <div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Une grande première dans L'esport</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <a href="/Myre" className="btn btn-primary">Consultez l'article</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">L'approche d'une entreprise dans le secteur du CBD</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <a href="/Myre" className="btn btn-primary">Consultez l'article</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Une grande première dans L'esport</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <a href="/Myre" className="btn btn-primary">Consultez l'article</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5 mb-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">L'approche d'une entreprise dans le secteur du CBD</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <a href="/Myre" className="btn btn-primary">Consultez l'article</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductPage;
