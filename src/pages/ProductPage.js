import React, { useEffect, useState } from "react";
import NavVariation from "../components/NavVariation";
import DashboardEntrerpises from '../components/DashboardEntreprises';
import { ref, onValue, getDatabase } from "firebase/database";


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
          Liste des Bnf's
      </h1>
      <p className="font-weight-light text-center textcolor">Le Backstorm Non Fongible BNF est une solution technologique faisant office de contrat à rendement numérique. En effet, il permet aux entreprises de mettre à disposition aux investisseurs des titres de propriété et reverseront en contrepartie de leur investissement un rendement en fonction de leurs bénéfices.</p>
      <table className="table text-dark mt-4">
        <tr><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th><th>Quantité</th></tr>
        <DashboardEntrerpises name={"Myre"} quantite={quantiteBnf} variation={variation} valeur={lastPrice} />
      </table>
      <div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Special title treatment</h5>
        <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5">
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Special title treatment</h5>
        <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Special title treatment</h5>
        <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5 mb-5">
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Special title treatment</h5>
        <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductPage;
