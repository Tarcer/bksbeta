import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import BKS from "../pages/Private/PrivateHome/logo-negative.png";
import deco from "../pages/logodeco.png";

export default function Navbar() {
  const { toggleModals, currentUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(currentUser !== null);
  }, [currentUser]);

  const navigate = useNavigate();

  const handleClickButton1 = () => {
    navigate('/');
  };
  
  const handleClickButton2 = () => {
    navigate('/ProductPage');
  };

  const handleClickButton3 = () => {
    navigate('./Entreprise');
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.");
    }
  };

  return (
    <nav className="navbar navbar-light bg-dark px-4">
      <Link to="/" className="navbar-brand">
        <img src={BKS} width="160" height="40" className="d-inline-block align-top" alt="" />
      </Link>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={handleClickButton1} type="button" className="btn btn-dark">Accueil</button>
        <button onClick={handleClickButton2} type="button" className="btn btn-dark">Les Bnf's</button>
        <button onClick={handleClickButton3} type="button" className="btn btn-dark">Actualités</button>
      </div> 
      <div className="btn-group" role="group" aria-label="Basic example">
        {isLoggedIn ? (
          <>
            <button onClick={logOut} type="button" className="btn btn-danger text-center">
              <img src={deco} width="20" height="20" className="d-inline-block align-top" alt="" />
            </button>
            <button onClick={() => navigate('/private/private-home')} type="button" className="btn btn-warning text-light">Mon compte</button>
          </>
        ) : (
          <>
            <button onClick={() => toggleModals("signUp")} type="button" className="btn btn-primary">Inscription</button>
            <button onClick={() => toggleModals("signIn")} type="button" className="btn btn-secondary">Connexion</button>
          </>
        )}
      </div>
    </nav>
  );
}
