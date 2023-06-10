import React from 'react';
import arcticle from "./imgMYRE.jpg";



const Entreprise = () => {
  return (
    <div className="container pt-4 my-3">
      <div class="card mb-3">
        <img class="card-img-top" src={arcticle}  alt="Card cap"/> 
        <h5 class="card-title text-center mt-3">Urban Série 5 Avec la MYRE :</h5>
        <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/Entreprise" class="btn btn-warning mt-3">Consulter l'article </a>
      </div>
    </div>
    
  );
};

export default Entreprise;