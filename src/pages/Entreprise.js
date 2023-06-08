import React, { useContext} from 'react';
import { UserContext } from "../context/userContext";
import { useNavigate } from 'react-router-dom'



const Entreprise = () => {
  const {currentUser} = useContext(UserContext)
  const handleClickButton1 = () => {
    navigate("/Myre");
  };
  const navigate = useNavigate()
  return (
    <div className="container p-5">
    <h1 className="display-10 text-dark text-center">
        {currentUser ? "La place de marché " : "Bienvenue sur Backstorm"}
      </h1>
      <h6 className="text-dark text-center mt-2">La place de marché de 
Backstorm regroupera tous les secteurs, des boulangeries aux agricultures. Afin 
d’utiliser des leviers pour des opérations importantes et développer le marché des 
Bnf's : </h6>
      <table class="table table-striped text-dark mt-5">
        <tr><th>Id Bnf</th><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th></tr>
        <tr class="active"><td>01</td><td>BKS</td><td className="text-success">+6%</td><td>500€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>  
        <tr><td>02</td><td>Boulangerie</td><td className="text-danger">-3%</td><td>450€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>  
        <tr><td>03</td><td>MYRE</td><td className="text-success">+4%</td><td>400€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>  
        <tr><td>04</td><td>Garage Automobile</td><td className="text-success">+1%</td><td>350€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>
      </table>
    </div>
  );
};

export default Entreprise;