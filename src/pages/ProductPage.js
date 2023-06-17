import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from 'react-router-dom';
import NavVariation from "../components/NavVariation";


const ProductPage = () => {
  const {currentUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickButton1 = () => {
    navigate("/Myre");
  }


  return (
    <div className="container pt-4 my-3">
        <NavVariation />
    <h1 className="display-10 text-dark text-center">
        {currentUser ? "Liste des CAR" : "Liste des CAR"}
      </h1>
      <p class="font-weight-light text-center" className="textcolor text-center">Le Backstorm Non Fongible BNF est une solution technologique faisant office de contrat à rendement numérique. En effet, il permet aux entreprises de mettre à disposition aux investisseurs des titres de propriété et reverseront en contrepartie de leur investissement un rendement en fonction de leurs bénéfices.</p>
      <table class="table text-dark mt-4">
        <tr><th>Id Bnf</th><th>Nom Entreprise</th><th>Variation</th><th>Valeur</th></tr>
        <tr class="active"><td>01</td><td>BKS</td><td className="text-success">+6%</td><td>500€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-danger btn-sm mb-2">
          V
        </button></tr>  
        <tr><td>02</td><td>Boulangerie</td><td className="text-danger">-3%</td><td>450€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-danger btn-sm mb-2">
          V
        </button></tr>  
        <tr><td>03</td><td>MYRE</td><td className="text-success">+4%</td><td>400€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-danger btn-sm mb-2">
          V
        </button></tr>  
        <tr><td>04</td><td>Garage Automobile</td><td className="text-success">+1%</td><td>350€</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-danger btn-sm mb-2">
          V
        </button></tr>
      </table>
      <div class="row">
  <div class="col-sm-6 mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title text-center">Special title treatment</h5>
        <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title text-center">Special title treatment</h5>
        <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title text-center">Special title treatment</h5>
        <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-5 mb-5">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title text-center">Special title treatment</h5>
        <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/Myre" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductPage;
