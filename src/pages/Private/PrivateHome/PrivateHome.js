import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/userContext';
import TokenPurchaseForm from '../../../context/TokenPurchaseFrom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Tokensale from "../../../context/Tokensale";

export default function PrivateHome() {
  const { user } = useContext(UserContext);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const handleClosePurchaseForm = () => {
    setShowPurchaseForm(false);
  };
  const [showSaleForm, setShowSaleForm] = useState(false);
const handleCloseSaleForm = () => {
  setShowSaleForm(false);
};
  const totalBalance = 2850;
  const [resetEmail, setResetEmail] = useState('');
  
  useEffect(() => {
    if (user) {
      const database = getDatabase();
      const userId = user.uid;
      const transactionRef = ref(database, `transactions/${userId}`);

      const unsubscribeTransactions = onValue(transactionRef, (snapshot) => {
        const transactions = snapshot.val();
        const count = transactions ? Object.keys(transactions).length : 0;
        console.log(count)
      });

      const totalBalanceRef = ref(database, `users/${userId}/totalBalance`);
      const unsubscribeTotalBalance = onValue(totalBalanceRef, (snapshot) => {
        const balance = snapshot.val();
        console.log(balance)
        // setTotalBalance(parseFloat(totalBalance)); // Convertir la valeur en nombre
      });

      return () => {
        transactionRef.off('value', unsubscribeTransactions);
        totalBalanceRef.off('value', unsubscribeTotalBalance);
      };
    }
    else{
      console.log('le else')
    }
  }, [user]);

  if (totalBalance === null) {
    return <div>Chargement du solde...</div>;
  }

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
      <h1 className="h-1 text-dark mb-4">Solde du compte</h1>
      <h1 className="fs-3"> € {totalBalance}</h1>
        <button onClick={handleClickButton} className="btn btn-success">
          Acheter du Vbks
        </button>
        <button onClick={handleClickSaleButton} className="btn btn-danger m-2">
          Retirer du Vbks
        </button>
      <h2 className="h-2 rectangle-light text-dark mb-3 mt-5">Liste de vos BNF :</h2>
      <table className="table table-striped text-dark">
        <thead>
          <tr>
            <th>Id Bnf</th>
            <th>Nom Entreprise</th>
            <th>Variation</th>
            <th>Valeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>BKS</td>
            <td className="text-success">+6%</td>
            <td>500€</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Boulangerie</td>
            <td className="text-danger">-3%</td>
            <td>450€</td>
          </tr>
          <tr>
            <td>03</td>
            <td>MYRE</td>
            <td className="text-success">+4%</td>
            <td>400€</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Garage Automobile</td>
            <td className="text-success">+1%</td>
            <td>350€</td>
          </tr>
        </tbody>
      </table>
      <h3 className="h-2 rectangle-light text-dark mb-3 mt-5">
        Mes Transactions :
      </h3>
      <table className="table table-striped text-dark mb-4">
        <thead>
          <tr>
            <th>Id Bnf</th>
            <th>Nom Entreprise</th>
            <th>Prix d'achat</th>
            <th>Valeur Vendue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>BKS</td>
            <td>300€</td>
            <td className="text-success">500€</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Boulangerie</td>
            <td>200€</td>
            <td className="text-success">450€</td>
          </tr>
          <tr>
            <td>03</td>
            <td>MYRE</td>
            <td>270€</td>
            <td className="text-success">400€</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Garage Automobile</td>
            <td>230€</td>
            <td className="text-success">350€</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-3">
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
        <button onClick={handleResetPassword} className="btn btn-secondary me-3">
          Réinitialiser le mot de passe
        </button>
      </div>
      {showPurchaseForm && <TokenPurchaseForm onClose={handleClosePurchaseForm} />}
      {showSaleForm && <Tokensale onClose={handleCloseSaleForm} />}
    </div>
  );
}
