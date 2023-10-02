import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import BKS from "../pages/Private/PrivateHome/logo-negative.png";
import deco from "../pages/logodeco.png";
import './version.css';
import { useLocation} from "react-router-dom";

export default function Navbar() {
  const { toggleModals, currentUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    setIsLoggedIn(currentUser !== null);
  }, [currentUser]);

  const navigate = useNavigate();
  const location = useLocation ();
  const handleClickButton1 = () => {
    navigate('/');
  };
  
  const handleClickButton2 = () => {
    navigate('/ProductPage');
  };

  const handleClickButton3 = () => {
    navigate('./Entreprise');
  };

  const showMenu = () => {
    setDisplayMenu(!displayMenu);
  }

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.");
    }
  };
  return (
    <>
          <nav className="z-1 mobile-version navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src={BKS} width="160" height="40" className="d-inline-block align-top" alt="" />
              </Link>
              <button className="navbar-toggler ms-auto" type="button" onClick={showMenu}>
                <i style={{ width: '30px', height: '30px', color: 'white' }} className="fas fa-bars"></i>
              </button>
            </div>
          </nav>
          {displayMenu && (
            <div>
              <div className="bg-dark shadow-3 d-flex flex-column">
              <button onClick={handleClickButton1} 
          className={`btn ${location.pathname === '/' ? 'underline' : ''} btn-dark`}>
            Accueil
         </button>
       <button onClick={handleClickButton2} 
        className={`btn ${location.pathname === '/ProductPage' ? 'underline' : ''} btn-dark`}>
        Les CAR
      </button>
      <button onClick={handleClickButton3} 
       className={`btn ${location.pathname === '/Entreprise' ? 'underline' : ''} btn-dark`}>
       Actualités
       </button>
                <div className="d-flex justify-content-center m-3" role="group" aria-label="Basic example">
                  {isLoggedIn ? (
                    <>
                      <button onClick={() => navigate('/private/private-home')} type="button" className="btn btn-warning text-light m-1">Mon compte</button>
                      <button onClick={logOut} type="button" className="btn btn-danger text-center m-1">
                        <img src={deco} width="20" height="20" className="d-inline-block align-top" alt="" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => toggleModals("signUp")} type="button" className="btn btn-primary">Inscription</button>
                      <button onClick={() => toggleModals("signIn")} type="button" className="btn btn-secondary">Connexion</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        <nav className="z-1 desktop-version navbar navbar-light bg-dark px-4">
          <Link to="/" className="navbar-brand">
            <img src={BKS} width="160" height="40" className="d-inline-block align-top" alt="" />
          </Link>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={handleClickButton1} 
          className={`btn ${location.pathname === '/' ? 'underline' : ''} btn-dark`}>
            Accueil
         </button>
       <button onClick={handleClickButton2} 
        className={`btn ${location.pathname === '/ProductPage' ? 'underline' : ''} btn-dark`}>
        Les CAR
      </button>
      <button onClick={handleClickButton3} 
       className={`btn ${location.pathname === '/Entreprise' ? 'underline' : ''} btn-dark`}>
       Actualités
       </button>
          </div>
          <div className="btn-group" role="group" aria-label="Basic example">
            {isLoggedIn ? (
              <>
                <button onClick={() => navigate('/private/private-home')} type="button" className="btn btn-warning text-light">Mon compte</button>
                <button onClick={logOut} type="button" className="btn btn-danger text-center">
                  <img src={deco} width="20" height="20" className="d-inline-block align-top" alt="" />
                </button>
              </>
            ) : (
              <>
                <button onClick={() => toggleModals("signUp")} type="button" className="btn btn-primary">Inscription</button>
                <button onClick={() => toggleModals("signIn")} type="button" className="btn btn-secondary">Connexion</button>
              </>
            )}
          </div>
        </nav>
    </>
  );
}  