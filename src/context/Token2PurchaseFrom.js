import React, { useRef, useState, useEffect } from "react";
// import { UserContext } from "./userContext";
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

export default function NewTokenPurchaseForm({ onClose }) {
  // const { signIn } = useContext(UserContext);
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
  const [newTokenBalance, setNewTokenBalance] = useState(0);

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
      amount: -amount, // Montant négatif pour déduire du solde total existant
      timestamp: Date.now(),
    };

    update(userTokenBalanceRef, {
      balance: -amount, // Montant négatif pour déduire du solde total existant
    });

    update(transactionRef, newTransaction);
  };

  const updateNewTokenBalance = (user, amount) => {
    const userId = user.uid;

    const userTokenBalanceRef = ref(database, `users/${userId}/tokenBalance`);
    const newTokenBalanceRef = ref(database, `users/${userId}/newTokenBalance`);
    const newTokenTransactionRef = push(ref(database, `newTokenTransactions/${userId}`)); // Génère une nouvelle clé unique pour chaque transaction du nouveau token
  

    const newTransaction = {
      amount: 1,
      timestamp: Date.now(),
    };

    update(userTokenBalanceRef, {
      balance: -500,
    });

    update(newTokenBalanceRef, {
      balance: newTokenBalance + 1,
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

      const tokenAmount = parseInt(amount);
      const token1AmountRequired = 500;

      if (tokenAmount < token1AmountRequired) {
        setValidation("Vous devez acheter au moins 500 tokens pour pouvoir acheter le nouveau token.");
        return;
      }

      updateUserTokenBalance(user, tokenAmount);
      updateNewTokenBalance(user, tokenAmount);

      formRef.current.reset();
      setValidation("");

      navigate("/private/private-home");

      onClose();
    } catch {
      setValidation("Une erreur s'est produite lors de l'achat de tokens.");
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
        <div
          onClick={closeModal}
          className="w-100 h-100 bg-dark bg-opacity-75"
        ></div>
        <div
          className="position-absolute top-50 start-50 translate-middle bg-light shadow-lg rounded p-4"
          style={{ zIndex: "1050", maxWidth: "600px", width: "90%" }}
        >
          <h3 className="text-center mb-4">Acheter Token 1</h3>
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
                placeholder="Entrez le montant de tokens"
                min="500"
                step="500"
                required
              />
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary me-2">
                Acheter
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Annuler
              </button>
            </div>
          </form>
          {validation && (
            <div className="alert alert-danger mt-4" role="alert">
              {validation}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
