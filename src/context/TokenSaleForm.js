import React, { useContext, useRef, useState, useEffect } from "react";
import { UserContext } from "./userContext";
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

export default function NewTokenSaleForm({ onClose }) {
  //const { signIn } = useContext(UserContext);
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
  //const [newTokenBalance, setNewTokenBalance] = useState(0); // Ajout de l'état newTokenBalance

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
      amount: amount * 500,
      timestamp: Date.now(),
    };

    update(userTokenBalanceRef, {
      balance: amount * 500,
    });

    update(transactionRef, newTransaction);
  };

  const updateNewTokenBalance = (user, amount) => {
    const userId = user.uid;

    const newTokenBalanceRef = ref(database, `users/${userId}/newTokenBalance`);
    const newTokenTransactionRef = push(ref(database, `newTokenTransactions/${userId}`)); // Génère une nouvelle clé unique pour chaque transaction du nouveau token

    const newTransaction = {
      amount: -amount,
      timestamp: Date.now(),
    };

    update(newTokenBalanceRef, {
      balance: -amount,
    });

    update(newTokenTransactionRef, newTransaction);
  };

  const createNewTotalBalance = (user) => {
    const userId = user.uid;

    const newTotalBalanceRef = ref(database, `newTotalBalance/${userId}`);
    const newTokenTransactionRef = ref(database, `newTokenTransactions/${userId}`);

    const updateNewTotalBalance = () => {
      onValue(newTokenTransactionRef, (snapshot) => {
        const transactions = snapshot.val();
        let newTotalBalance = 0;

        if (transactions) {
          Object.values(transactions).forEach((transaction) => {
            newTotalBalance += parseFloat(transaction.amount);
          });
        }

        update(newTotalBalanceRef, {
          balance: newTotalBalance,
        });
      });
    };

    updateNewTotalBalance();

    return () => {
      off(newTokenTransactionRef, updateNewTotalBalance);
    };
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

  useEffect(() => {
    if (user) {
      calculateTotalBalance(user.uid);
      createNewTotalBalance(user);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const userTokenBalanceRef = ref(database, `users/${user.uid}/newTokenBalance`);

      onValue(userTokenBalanceRef, (snapshot) => {
        const balance = snapshot.val();
        if (balance) {
          setNewTokenBalance(balance);
        }
      });

      return () => {
        off(userTokenBalanceRef);
      };
    }
  }, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    const amount = inputs.current[0].value;

    try {
      if (amount === "") {
        setValidation("Veuillez entrer un montant.");
        return;
      }

      const newTokenAmount = parseInt(amount);
      const newTokenBalanceRequired = 1;

      if (newTokenAmount < newTokenBalanceRequired) {
        setValidation("Vous devez vendre au moins 1 Bnf.");
        return;
      }

      updateUserTokenBalance(user, newTokenAmount);
      updateNewTokenBalance(user, newTokenAmount);

      formRef.current.reset();
      setValidation("");

      navigate("/private/private-home");

      onClose();
    } catch {
      setValidation("Une erreur s'est produite lors de la vente des Bnf's.");
    }
  };

  const closeModal = () => {
    setValidation("");
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <>
      <div className="position-fixed top-0 start-0 vw-100 vh-100 d-flex align-items-center justify-content-center">
        <div onClick={closeModal} className="w-100 h-100 bg-dark bg-opacity-75"></div>
        <div
          className="position-absolute top-50 start-50 translate-middle bg-light shadow-lg rounded p-4"
          style={{ zIndex: "1050", maxWidth: "600px", width: "90%" }}
        >
          <h3 className="text-center mb-4">Vendre NewTokenBalance</h3>
          <form ref={formRef} onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Montant :
              </label>
              <input
                ref={addInputs}
                type="number"
                className="form-control"
                id="amount"
                placeholder="Entrez le montant de Bnf"
                min="1"
                required
              />
            </div>
            {validation && <p className="text-danger">{validation}</p>}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary me-2">
                Vendre
              </button>
              <button type="button" onClick={closeModal} className="btn btn-secondary">
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
