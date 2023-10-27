import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import Token2PurchaseForm from '../context/Token2PurchaseFrom';
import TokenSaleForm from '../context/TokenSaleForm';
import Footer from './Footer';
import Chart from './Chart';
import { ref, onValue, getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const Myre = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const database = getDatabase();
    const { toggleModals,currentUser } = useContext(UserContext);
    const [showPurchaseForm, setShowPurchaseForm] = useState(false);
    const [showSaleForm, setShowSaleForm] = useState(false);
    const [price,setPrice]=useState(0);
    const [lastPrice,setLastPrice]=useState(0);
    const [quantiteBnf,setQuantiteBnf]=useState(0);
    const [bnFBalance,setBnFBalance]=useState(0);
    const [totalBalance,setTotalBalance]=useState(0);
    const [noPrices,setNoPrices]=useState(false);
    const K = 0.0005;
    let userId;
    if(user){
      userId=user.uid;
    }
    const callAllInformations = ref(database, `globalInformation`);
    const callTokenTransactions = ref(database, `newTokenTransactions`);
    const newTotalBalanceRef = ref(database, `newTotalBalance/${userId}`);
    const totalBalanceRef = ref(database, `totalBalance/${userId}`);
  
  
  
  
    const handleClosePurchaseForm = () => {
      setShowPurchaseForm(false);
    };
  
    const handleCloseSaleForm = () => {
      setShowSaleForm(false);
    };
  
    const showPurchase = () => {
      if(user){
        setShowPurchaseForm(true);
      }
      else{
        toggleModals("signUp");
      }
    }
  
    const showSale = () => {
      if(user){
        setShowSaleForm(true);
      }
      else{
        toggleModals("signUp");
      }
    }
  
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
            if(snapshot.val() !== null){
              resolve(snapshot.val().balance);
            }
          });
        });
      };
      
      const getBnFBalance = async () => {
        return new Promise((resolve,reject)=>{
          onValue(newTotalBalanceRef, (snapshot)=> {
            if(snapshot.val() !== null){
              resolve(snapshot.val().balance);
            }
          });
        });
      }
  
      const getPrix = async () => {
        return new Promise((resolve, reject) => {
          onValue(callTokenTransactions, async (snapshot) => {
            const tokenTransactions = snapshot.val();
            if (tokenTransactions) {
              const price = await getLastPrice();
              resolve(price);
            } else {
              setNoPrices(true);
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
    }, []);

    return (
      <>
      <div className="bg-whitesmoke flex flex-col items-center font-roboto min-h-screen">
        <div className="my-0">
          <h2 className="text-[40px] text-center">{currentUser ? 'MYRE' : 'MYRE'}</h2>
        </div>
        <div className="my-0">
          <p className="self-stretch p-5 leading-[20px] inline-block font-bold">
            Myre est une structure esportive créée en 2022 par Mark «Markus» Bernardi et Kévin «Rooster» Laforme. Nous voulons donner l’opportunité aux talents d’aujourd’hui de devenir les joueurs de demain. Nous avons l’ambition de devenir une référence connue de tous. Un contrat AR est une valeur mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre.
          </p>
        </div>
        <div className="my-0 items-center mb-5 mt-5">
          {!noPrices && <Chart />}
          <div className="flex justify-center text-center mt-5">
          <button onClick={showPurchase} className="cursor-pointer rounded p-2 m-1 bg-[#81BF73] text-smi text-white">Acheter</button>
            {showPurchaseForm && (
              <Token2PurchaseForm
                onClose={handleClosePurchaseForm}
                totalBalance={totalBalance}
                quantiteBnf={quantiteBnf}
                prix={price}
                lastPrice={lastPrice}
                K={K}
              />
            )}
            <button onClick={showSale} className="cursor-pointer rounded p-2 m-1 bg-[#EE6B5F] text-smi text-white">
              Vendre
            </button>
            {showSaleForm && (
              <TokenSaleForm
                onClose={handleCloseSaleForm}
                newTotalBalance={bnFBalance}
                lastPrice={lastPrice}
                prix={price}
                quantiteBnf={quantiteBnf}
                K={K}
              />
            )}
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Cours de l'action:</h3>
                <b className="text-8xl text-green-400">
                {`${parseFloat(lastPrice).toFixed(2)} €`}
                </b>
                <img
                    className="mx-1 h-[30px] w-[30px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/increase.svg"
                />
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Siège social</h3>
                <b className="text-8xl inline-block text-gray-200">
                Paris, 92 000
                </b>
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Date de création</h3>
                <b className="text-8xl inline-block text-gray-200">
                  01/05/2022
                </b>
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>PDG</h3>
                <b className="text-8xl inline-block text-gray-200">
                  M.Bernardi
                </b>
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Forme Juridique</h3>
                <b className="text-8xl inline-block text-gray-200">
                  SARL
                </b>
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Chiffre d'affaire</h3>
                <b className="text-8xl inline-block text-gray-200">
                  70 000 €
                </b>
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Nombre de BNF en circulation</h3>
                <b className="text-8xl inline-block text-gray-200">
                {`${parseFloat(quantiteBnf).toFixed(3)} / 10 000`}
                </b>
            </div>
            <div className="shadow-2xl p-10 bg-white min-w-[250px] transform hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <h3>Capitalisation</h3>
                <b className="text-8xl inline-block text-gray-200">
                15 000 €
                </b>
            </div>
            

          </div>
        </div>
      </div>
        <Footer />
        </>
    );
  };

  export default Myre;
