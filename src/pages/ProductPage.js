import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const {currentUser} = useContext(UserContext)
  const handleClickButton1 = () => {
    navigate("/Myre");}
    const navigate = useNavigate()

  return (
    <div className="container pt-4">
    <table class="table table-bordered ">  
        <tr><td>BKS</td><td className="text-success">+5%</td><td>BLG</td><td className="text-danger">-3%</td><td>MYRE</td><td className="text-success">+4%</td><td>GAR</td><td className="text-success">+1%</td></tr>  
      </table>
    <h1 className="display-10 text-dark text-center">
        {currentUser ? "Liste des Bnf's" : "Bienvenue sur Backstorm"}
      </h1>
      <p class="font-weight-light text-center" className="textcolor text-center">Le Backstorm Non Fongible BNF est une solution technologique faisant office de contrat à rendement numérique. En effet, il permet aux entreprises de mettre à disposition aux investisseurs des titres de propriété et reverseront en contrepartie de leur investissement un rendement en fonction de leurs bénéfices.</p>
      <table class="table table-bordered text-dark mt-5">
        <tr><th>Id Bnf</th><th>Nom Entreprise</th><th>Variation</th><th>Nombre de Titre</th></tr>
        <tr class="active"><td>01</td><td>BKS</td><td className="text-success">+6%</td><td>150 / 800</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>
        <tr><td>02</td><td>Boulangerie</td><td className="text-danger">-3%</td><td>200 / 1500</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>
        <tr><td>03</td><td>MYRE</td><td className="text-success">+4%</td><td>150 / 760</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
        </button></tr>  
        <tr><td>04</td><td>Garage Automobile</td><td className="text-success">+1%</td><td>230 / 1460</td><button 
        onClick={()=> handleClickButton1("Myre") }
        className="btn btn-outline-success btn-sm mb-2">
          A
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
