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
      <div class="card-group">
  <div class="card">
    <img class="card-img-top" src={arcticle} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={arcticle} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={arcticle} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Entreprise;