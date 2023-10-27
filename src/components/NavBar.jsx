import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/userContext";
import { useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import BKS from "../Assets/Images/logo-color.png";

const NavBar = () => {
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
      <nav className="bg-whitesmoke flex flex-col lg:flex-row justify-between text-2xl text-darkgray font-montserrat">
      <div className="flex items-center lg:w-1/2">
        <Link to="/" className="navbar-brand">
          <img src={BKS} width="160" height="40" className="lg:m-10" alt="Logo Backstorm" />
        </Link>
      </div>
      <div className="lg:w-1/2 lg:flex lg:justify-end lg:space-x-5">
        <Link to="/" className="no-underline text-darkgray mt-10">
          <span className="m-5 cursor-pointer">
            Accueil
          </span>
        </Link>
        <Link to="/Productpage" className="no-underline text-darkgray mt-10">
        <span className="m-5 ml-5 cursor-pointer">
          Les CAR
        </span>
        </Link>
        <Link to="/Entreprise" className="no-underline text-darkgray mt-10">
        <span className="m-5 ml-5 cursor-pointer">
          Actualités
        </span>
        </Link>
        <button className="cursor-pointer rounded mt-6 m-3 my-10 text-2xl bg-[#DA6B7A] font-medium font-montserrat text-white"
          onClick={() => toggleModals("signIn")}>
          S’identifier
        </button>
      </div>
    </nav>
    );
  };
  
  export default NavBar;