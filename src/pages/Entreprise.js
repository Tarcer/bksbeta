import React from 'react';
import arcticle from "./imgMYRE.jpg";

const Entreprise = () => {
  return (
    <div className="container pt-4 my-3">
      <div className="z-n1 card mb-3">
        <img className="card-img-top" src={arcticle}  alt="Card cap"/> 
        <h5 className="card-title text-center mt-3">Urban Série 5 Avec la MYRE :</h5>
        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/Entreprise" className="btn btn-warning mt-3">Consulter l'article </a>
      </div>
      <div className="card-group">
  <div className="card">
    <img className="card-img-top" src={arcticle} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={arcticle} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={arcticle} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Entreprise;