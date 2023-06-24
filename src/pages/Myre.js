import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../context/userContext";
import Mry from '../pages/LOGO_ORANGE.png';
import Token2PurchaseForm from '../context/Token2PurchaseFrom';
import TokenSaleForm from '../context/TokenSaleForm';
import bnfm from "../pages/imgMYRE.jpg";
import Chart from '../components/Chart';
import { ref, onValue, getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const Myre = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const database = getDatabase();
  const { currentUser } = useContext(UserContext);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showSaleForm, setShowSaleForm] = useState(false);
  const [price,setPrice]=useState(0);
  const [lastPrice,setLastPrice]=useState(0);
  const [quantiteBnf,setQuantiteBnf]=useState(0);
  const [bnFBalance,setBnFBalance]=useState(0);
  const [totalBalance,setTotalBalance]=useState(0)

  const handleClosePurchaseForm = () => {
    setShowPurchaseForm(false);
  };

  const handleCloseSaleForm = () => {
    setShowSaleForm(false);
  };
  const userId = user.uid;
  const callAllInformations = ref(database, `globalInformation`);
  const callTokenTransactions = ref(database, `newTokenTransactions`);
  const newTotalBalanceRef = ref(database, `newTotalBalance/${userId}`);
  const totalBalanceRef = ref(database, `totalBalance/${userId}`);

  useEffect(() => {
    const getLastPrice = async () => {
      return new Promise((resolve, reject) => {
        onValue(callAllInformations, (snapshot) => {
          resolve(snapshot.val().informationArray[0].lastPrice);
        });
      });
    };
    
    const getTotalBalance = async () => {
      return new Promise((resolve, reject) => {
        onValue(totalBalanceRef, (snapshot) => {
          resolve(snapshot.val().balance);
        });
      });
    };
    
    const getBnFBalance = async () => {
      return new Promise((resolve,reject)=>{
        onValue(newTotalBalanceRef, (snapshot)=> {
          resolve(snapshot.val().balance);
        });
      });
    }

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
      setBnFBalance(await getBnFBalance());
      setTotalBalance(await getTotalBalance());
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="d-flex flex-column align-items-center" style={{ minHeight: '100vh' }}>
    <div className="container pt-4 my-0">
    <table className="table table-bordered">  
        <tr><td>BKS</td><td className="text-success">+5%</td><td>BLG</td><td className="text-danger">-3%</td><td>MYRE</td><td className="text-success">+4%</td><td>GAR</td><td className="text-success">+1%</td></tr>  
      </table>
      </div>
      <div className="d-flex align-items-center">
        <h2 className="text-dark mt-0">
          {currentUser ? "MYRE" : "MYRE"}
        </h2>
        <img src={Mry} width="60" height="60" className="d-inline-block align-top ml-2" alt="" />
      </div>
      <div className="container pt-0 my-0">
      <p className="font-weight-light text-center textcolor">Myre est une structure esportive créée en 2022 par Mark «Markus» Bernardi et Kévin «Rooster» Laforme. Nous voulons donner l’opportunité aux talents d’aujourd’hui de devenir les joueurs de demain. Nous avons l’ambition de devenir une référence connue de tous. Un contrat AR est une valeure mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre. 
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
        {showPurchaseForm && <Token2PurchaseForm onClose={handleClosePurchaseForm} totalBalance={totalBalance} quantiteBnf={quantiteBnf} prix={price} lastPrice={lastPrice}/>}
        <button
          onClick={() => setShowSaleForm(true)}
          className="btn btn-danger ms-3"
        >
          Vendre le BNF
        </button>
        {showSaleForm && <TokenSaleForm onClose={handleCloseSaleForm} newTotalBalance={bnFBalance} lastPrice={lastPrice} />}
      </div>
        <div className="ml-4 d-flex flex-column mt-5">
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Cours de l'action:</strong></td>
          <td className="text-end textcolor" >{`${parseFloat(lastPrice).toFixed(2)} €`}</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Siège Social:</strong></td>
          <td className="text-end textcolor" >Paris</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Date de Création:</strong></td>
          <td className="text-end textcolor" >01/05/2022</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>PDG:</strong></td>
          <td className="text-end textcolor" >M.Bernardi</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Forme Juridique:</strong></td>
          <td className="text-end textcolor" >SARL</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Chiffre d'affaire:</strong></td>
          <td className="text-end textcolor" > 70 K€</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Nombre de Bnf:</strong></td>
          <td className="text-end textcolor" >{`${parseFloat(quantiteBnf).toFixed(3)} / 10 000`}</td>
          </tr>
          </table>
          <table className="table table-bordered">
           <tr>
           <td className="text-start"><strong>Capitalisation:</strong></td>
          <td className="text-end textcolor" >15 000 €</td>
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
