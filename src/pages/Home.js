import React from 'react';
import { useNavigate } from 'react-router-dom';
import arcticle from "./imgMYRE.jpg";

export default function Home() {
  
  const navigate = useNavigate();
  const handleClickButton1 = () => {
    navigate('/Myre');}

  return (
    <div className="container pt-4 my-3">
    <table class="table table-bordered ">  
        <tr><td>BKS</td><td className="text-success">+5%</td><td>BLG</td><td className="text-danger">-3%</td><td>MYRE</td><td className="text-success">+4%</td><td>GAR</td><td className="text-success">+1%</td></tr>  
      </table>
      <h2 className="h3 text-dark text-center mt-2">Acheter et Trader vos Contrats AR</h2>
      <p class="font-weight-light text-center" className="textcolor text-center">Un contrat AR est une valeure mobilière qui représente une fraction des bénéfices générés par l’entreprise listée sur Backstorm, sa valeur évoluera en fonction de l’offre et la demande mais aussi de la rentabilité du titre. Le versement des bénéfices s’effectue chaque trimestre. 
      </p>
      <table class="table text-dark mt-5">
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
      <h4 className="h3 text-dark text-center mt-5"> Vérifier mon compte</h4>
      <p class="font-weight-light text-center" className="textcolor text-center"> Vérifier votre compte Backstorm pour accéder à nos services. Les informations collectées respectent le cadre de loi RGPD européennes sur la confidentialité. Vos informations privées sont protégées.</p>
      <div class="row h-50 justify-content-center align-items-center">
      <boutton className="btn btn-warning btn-sm btn-bloc mt-3">Vérifier maintenant</boutton>
      </div>
      <div>
      <h4 className="h5 text-dark text-center mt-5">ACTIVITE DU MARCHE</h4>
      <table class="table text-dark mt-2">
       <tr><td>Valeur des transactions</td><td>1 000 000 €</td></tr>  
       <tr><td>Capitalisation du marché</td><td>10 000 000 €</td></tr>  
       <tr><td>BNF TOP 30</td><td>1000 000 €</td></tr>  
       <tr><td>BNF EN VENTE</td><td>600 000 €</td></tr>
      </table>
      </div>
      <h5 className="text-dark text-center mt-5">Commencer votre expérience</h5>
      <div class="ratio ratio-16x9 mt-3">
       <iframe src="https://www.youtube.com/embed/gs4Tyh-iPUE" title="YouTube video" allowfullscreen></iframe>
      </div>
      <h4 className="text-dark text-center mt-5">Choisisser votre CAR :</h4><div class="row">
      
      <div class="row">
  <div class="col-sm-4 mt-2">
    <div class="card border-light bg-light">
      <div class="card-body text-center">
        <tr class="active text-center"><td>MRE/BKS</td><td className="text-success">+6%</td></tr>
        <tr class="active"><strong>531.6</strong></tr> 
        <tr class="active"><td>510 €</td></tr>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-2">
    <div class="card border-light bg-light">
      <div class="card-body text-center">
      <tr class="active text-center"><td>MRE/BKS</td><td className="text-success">+6%</td></tr>
        <tr class="active"><strong>531.6</strong></tr> 
        <tr class="active"><td>510 €</td></tr>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4 mt-2">
    <div class="card border-light bg-light">
      <div class="card-body text-center">
      <tr class="active text-center"><td>MRE/BKS</td><td className="text-success">+6%</td></tr>
        <tr class="active"><strong>531.6</strong></tr> 
        <tr class="active"><td>510 €</td></tr>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-2">
    <div class="card border-light bg-light">
      <div class="card-body text-center">
      <tr class="active text-center"><td>MRE/BKS</td><td className="text-success">+6%</td></tr>
        <tr class="active"><strong>531.6</strong></tr> 
        <tr class="active"><td>510 €</td></tr>
      </div>
    </div>
  </div>
</div>
  
</div>
      <h4 className="text-dark text-center mt-5">Notre actualitée :</h4>
      <div class="card mb-3">
        <img class="card-img-top" src={arcticle}  alt="Card cap"/> 
        <h5 class="card-tittle text-center mt-3">Urban Série 5 Avec la MYRE :</h5>
        <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/Entreprise" class="btn btn-warning mt-3">Consulter l'article </a>
      </div>
    </div>
  )
}
