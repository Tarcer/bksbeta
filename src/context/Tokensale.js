import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, update, push, onValue, off } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function TokenSale({ onClose, totalBalance }) {
  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  const updateUserTokenBalance = (user, amount) => {
    const userId = user.uid;

    const userTokenBalanceRef = ref(database, `users/${userId}/tokenBalance`);
    const transactionRef = push(ref(database, `transactions/${userId}`)); // Génère une nouvelle clé unique pour chaque transaction

    const newTransaction = {
      amount: -amount, // Vendre le token en soustrayant le montant du solde
      timestamp: Date.now(),
    };

    update(userTokenBalanceRef, {
      balance: -amount, // Mettre à jour le solde du token en soustrayant le montant vendu
    });

    update(transactionRef, newTransaction);
  };

  const calculateTotalBalance = (userId) => {
    const transactionRef = ref(database, `transactions/${userId}`);
    const totalBalanceRef = ref(database, `totalBalance/${userId}`);

    const updateTotalBalance = (snapshot) => {
      const transactions = snapshot.val();
      let totalBalance = 0;

      if (transactions) {
        Object.values(transactions).forEach((transaction) => {
          totalBalance += parseFloat(transaction.amount);
        });
      }

      update(totalBalanceRef, {
        balance: totalBalance,
      });
    };

    onValue(transactionRef, updateTotalBalance);

    return () => {
      off(transactionRef, updateTotalBalance);
    };
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const amount = inputs.current[0].value;
    const paymentMethod = inputs.current[1].value;

    try {
      if (amount === "" || paymentMethod === "") {
        setValidation("Veuillez remplir tous les champs.");
        return;
      }

      if(totalBalance<amount){
        setValidation("Vous ne disposez pas de ces fonds.");
        return;
      }
      const tokenAmount = parseInt(amount);

      updateUserTokenBalance(user, tokenAmount);

      formRef.current.reset();
      setValidation("");

      navigate("/private-home");

      onClose();
    } catch {
      setValidation("Une erreur s'est produite lors de la vente de jetons.");
    }
  };

  useEffect(() => {
    if (user) {
      calculateTotalBalance(user.uid);
    }
  }, [user]);

  const closeModal = () => {
    setValidation("");
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <>
      <div className="position-fixed top-0 start-0 vw-100 vh-100 d-flex align-items-center justify-content-center">
        <div
          onClick={closeModal}
          className="w-100 h-100 bg-dark bg-opacity-75"
        ></div>
        <div
          className="position-absolute top-50 start-50 translate-middle bg-light shadow-lg rounded p-4"
          style={{ zIndex: "1050", maxWidth: "600px", width: "90%" }}
        >
          <h3 className="text-5xl text-Black font-montserrat">Vendre du BKS</h3>
          <form ref={formRef} onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="amount" className="text-5xl text-Black font-montserrat">
                Montant :
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                ref={addInputs}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="paymentMethod" className="text-5xl text-Black font-montserrat">
                Méthode de retrait :
              </label>
              <input
                type="text"
                className="form-control"
                id="paymentMethod"
                ref={addInputs}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="cursor-pointer rounded p-2 m-1 bg-[#81BF73] text-smi text-white">
                Vendre
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="cursor-pointer rounded p-2 m-1 bg-[#EE6B5F] text-smi text-white"
              >
                Annuler
              </button>
            </div>
            {validation && (
              <div className="alert alert-danger mt-3">{validation}</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
