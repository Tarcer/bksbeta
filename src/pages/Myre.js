import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../context/userContext";
import Mry from '../pages/LOGO_ORANGE.png';
import Token2PurchaseForm from '../context/Token2PurchaseFrom';
import TokenSaleForm from '../context/TokenSaleForm';
import bnfm from "../pages/imgMYRE.jpg";
import Chart from '../components/Chart';
import { ref, onValue, getDatabase } from "firebase/database";
import NavVariation from '../components/NavVariation';

const Myre = () => {
  const database = getDatabase();
  const { currentUser } = useContext(UserContext);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showSaleForm, setShowSaleForm] = useState(false);
  const [price,setPrice]=useState(0);
  const [lastPrice,setLastPrice]=useState(0);
  const [quantiteBnf,setQuantiteBnf]=useState(0);

  const handleClosePurchaseForm = () => {
    setShowPurchaseForm(false);
  };

  const handleCloseSaleForm = () => {
    setShowSaleForm(false);
  };
  
  const callAllInformations = ref(database, `globalInformation`);
  const callTokenTransactions = ref(database, `newTokenTransactions`);

  useEffect(() => {
    const getLastPrice = async () => {
      return new Promise((resolve, reject) => {
        onValue(callAllInformations, (snapshot) => {
          resolve(snapshot.val().informationArray[0].lastPrice);
        });
      });
    };
  
    const getPrix = async () => {
      return new Promise((resolve, reject) => {
        onValue(callTokenTransactions, async (snapshot) => {
          const tokenTransactions = snapshot.val();
          if (Object.values(tokenTransactions).length > 1) {
            const price = await getLastPrice();
            resolve(price);
          } else {
            resolve(500);
          }
        });
      });
    };
    
    const getQuantiteBnf = async () => {
      return new Promise((resolve, reject)=> {
        onValue(callAllInformations,(snapshot)=>{
          resolve(snapshot.val().informationArray[0].quantiteBnf)
        });
      });
    };

    // Utilisation de la fonction asynchrone dans useEffect
    const fetchData = async () => {
      setPrice(await getPrix());
      setLastPrice(await getLastPrice());
      setQuantiteBnf(await getQuantiteBnf());
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="d-flex flex-column align-items-center" style={{ minHeight: '100vh' }}>
    <div className="container pt-4 my-0">
      <NavVariation />
      </div>
      <div className="d-flex align-items-center">
        <h2 className="text-dark mt-0">
          {currentUser ? "MYRE" : "MYRE"}
        </h2>
        <img src={Mry} width="60" height="60" className="d-inline-block align-top ml-2" alt="" />
      </div>
      <div className="container pt-0 my-0">
      <p class="font-weight-light text-center" className="textcolor text-center">Myre est une structure esportive créée en 2022 par Mark «Markus» Bernardi et Kévin «Rooster» Laforme. Nous voulons donner l’opportunité aux talents d’aujourd’hui de devenir les joueurs de demain. Nous avons l’ambition de devenir une référence connue de tous. Un contrat AR est une valeure mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre. 
      </p>
      </div>
      <div className="container pt-0 my-0 align-items-center mb-4">
          <Chart />
        <div className="d-flex justify-content-center text-center mt-5">
        <button
          onClick={() => setShowPurchaseForm(true)}
          className="btn btn-success ms-3"
        >
          Acheter Le BNF
        </button>
        {showPurchaseForm && <Token2PurchaseForm onClose={handleClosePurchaseForm} quantiteBnf={quantiteBnf} prix={price} lastPrice={lastPrice}/>}
        <button
          onClick={() => setShowSaleForm(true)}
          className="btn btn-danger ms-3"
        >
          Vendre le BNF
        </button>
        {showSaleForm && <TokenSaleForm onClose={handleCloseSaleForm} />}
      </div>
        <div className="ml-4 d-flex flex-column mt-5">
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Cours de l'action:</strong></td>
          <td class="text-end" className="textcolor text-end">{`${parseFloat(lastPrice).toFixed(2)} €`}</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Siège Social:</strong></td>
          <td class="text-end" className="textcolor text-end">Paris</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Date de Création:</strong></td>
          <td class="text-end" className="textcolor text-end">01/05/2022</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>PDG:</strong></td>
          <td class="text-end" className="textcolor text-end">M.Bernardi</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Forme Juridique:</strong></td>
          <td class="text-end" className="textcolor text-end">SARL</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Chiffre d'affaire:</strong></td>
          <td class="text-end" className="textcolor text-end"> 70 K€</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Nombre de Bnf:</strong></td>
          <td class="text-end" className="textcolor text-end">{`${parseFloat(quantiteBnf).toFixed(3)} / 10 000`}</td>
          </tr>
          </table>
          <table class="table table-bordered">
           <tr>
           <td class="text-start"><strong>Capitalisation:</strong></td>
          <td class="text-end" className="textcolor text-end">15 000 €</td>
          </tr>
          </table>
        </div>
      </div>
      <div className="card mb-3 mt-2" style={{ position: "relative" }}>
        <img className="card-img-top" src={bnfm} alt="Card cap" />
        <button type="buton" className="btn btn-outline-dark btn-lg btn-block mt-3 d-block" style={{ position: "absolute", bottom: "50%", left: "50%", transform: "translateX(-50%)" }}>Le projet</button>
      </div>
    </div>
  );
};

export default Myre;
