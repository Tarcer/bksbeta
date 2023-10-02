import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/userContext';
import TokenPurchaseForm from '../../../context/TokenPurchaseFrom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Tokensale from "../../../context/Tokensale";
import MyrTable from '../../../components/MyrTable';
import TableTransaction from '../../../components/TableTransaction';
import moment from 'moment';

export default function PrivateHome() {
  const user = useContext(UserContext);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const handleClosePurchaseForm = () => {
    setShowPurchaseForm(false);
  };
  const [showSaleForm, setShowSaleForm] = useState(false);
const handleCloseSaleForm = () => {
  setShowSaleForm(false);
};
  const [newTotalBalance, setNewTotalBalance]= useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [resetEmail, setResetEmail] = useState('');
  const [lastPrice, setLastPrice]= useState(0);
  const [variation, setVariation]= useState(0);
  const [tokenTransactions,setTokenTransactions]=useState([])

  
  useEffect(() => {
    if (user) {
      const database = getDatabase();
      const userId = user.currentUser.uid;
      const totalBalanceRef = ref(database, `totalBalance/${userId}/balance`);
      const newTotalBalanceRef = ref(database, `newTotalBalance/${userId}`);
      const allInformationsRef = ref(database,`globalInformation`);
      const newTokenTransactionRef = ref(database, `newTokenTransactions/${userId}`); // newTokenTransaction > amount qui correspond aux BnF
  
      const unsubscribePromises = [];
  
      new Promise((resolve) => {
        const unsubscribeTransactions = onValue(newTokenTransactionRef, (snapshot) => {
          const TokenTransactions = snapshot.val();
          setTokenTransactions(TokenTransactions);
          resolve();
        });
        unsubscribePromises.push(unsubscribeTransactions);
      });

      new Promise((resolve) => {
        const unsubscribeInformations = onValue(allInformationsRef, (snapshot) => {
          const informations = snapshot.val();
          setLastPrice(informations.informationArray[0].lastPrice)
          setVariation(informations.informationArray[0].variation)
          resolve();
        });
        unsubscribePromises.push(unsubscribeInformations);
      })

      new Promise((resolve) => {
        const unsubscribeTotalBalance = onValue(totalBalanceRef, (snapshot) => {
          const balance = snapshot.val();
          setTotalBalance(balance);
          resolve();
        });
        unsubscribePromises.push(unsubscribeTotalBalance);
      });
  
      new Promise((resolve) => {
        const unsubscribenewTokenBalance = onValue(newTotalBalanceRef, (snapshot) => {
          setNewTotalBalance(snapshot.val());
          resolve();
        });
        unsubscribePromises.push(unsubscribenewTokenBalance);
      });
  
      Promise.all(unsubscribePromises).then(() => {
        console.log('All unsubscribed');
      });
  
      return () => {
        unsubscribePromises.forEach((unsubscribe) => {
          unsubscribe();
        });
      };
    }
  }, [user]);


  const handleClickButton = () => {
    setShowPurchaseForm(true);
  };
  const handleClickSaleButton = () => {
    setShowSaleForm(true);
  };

  const handleResetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        alert('Un e-mail de réinitialisation a été envoyé à votre adresse e-mail.');
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur s'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.");
      });
  };

  return (
    <div className="container pt-4 my-3">
      <h1 className="h3 text-dark mb-2">Solde du compte</h1>
      {totalBalance&& <h1 className="fs-1">{`${parseFloat(totalBalance).toFixed(2)}€`}</h1>}
        <button onClick={handleClickButton} className="btn btn-success">
          Dépôt
        </button>
        <button onClick={handleClickSaleButton} className="btn btn-danger m-2">
          Retrait
        </button>
      <h2 className="h-2 rectangle-light text-dark mb-3 mt-5">Liste de vos BNF :</h2>
      <table className="table table-striped text-dark">
        <thead>
          <tr>
            <th>Nombre de Bnf</th>
            <th>Nom Entreprise</th>
            <th>Variation</th>
            <th>Valeur</th>
          </tr>
        </thead>
        <tbody>
           {newTotalBalance&& <MyrTable idBnf={newTotalBalance.balance} price={lastPrice} variation={variation} />}
        </tbody>
      </table>
      <h3 className="h-2 rectangle-light text-dark mb-3 mt-5">
        Mes Transactions :
      </h3>
      <table className="table table-striped text-dark mb-2">
        <thead>
          <tr className='text-center'>
            <th>Nombre de Bnf</th>
            <th>Nom Entreprise</th>
            <th>Valeur</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className='text-center'>
         {tokenTransactions && Object.values(tokenTransactions).toReversed().map((transaction, index) => (
           <TableTransaction key={index} Bnf={parseFloat(transaction.amount).toFixed(2)} name={'Myre'} valeur={parseFloat(transaction.lastPrice).toFixed(2)} date={moment(transaction.timestamp).format('lll')}/>
        ))}
        </tbody>
      </table>
      <div className="outer-container mb-3 mt-5">
        <div className="mb-3">
          <label htmlFor="resetEmail" className="form-label">
            Adresse e-mail :
          </label>
          <input
            type="email"
            id="resetEmail"
            className="form-control"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
        </div>
        <div></div>
        <button onClick={handleResetPassword} className="btn btn-secondary me-3">
          Réinitialiser le mot de passe
        </button>
      </div>
      {showPurchaseForm && <TokenPurchaseForm onClose={handleClosePurchaseForm} />}
      {showSaleForm && <Tokensale onClose={handleCloseSaleForm} totalBalance={totalBalance} />}
    </div>
  );
}
