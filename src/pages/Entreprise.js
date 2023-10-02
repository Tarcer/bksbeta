import React from 'react';
import bnfm from "./imgMYRE.jpg";

const Entreprise = () => {
  return (
    <div className="container pt-4 my-3">
      <div className="z-n1 card mb-3">   
      <div className="card-body text-center">
        <h5 className="card-title text-center">Une grande première dans L'esport</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <p className="card-text"> Le Partenariat entre Backstorm et Myre offre une nouvelle opportunitée, afin d'investir dans l'esport français.</p>
        <a href="/Myre" className="btn btn-primary">Consulter l'article</a>
    </div>
      </div>
 <div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Une grande première dans L'esport</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <p className="card-text"> Le Partenariat entre Backstorm et Myre offre une nouvelle opportunitée, afin d'investir dans l'esport français.</p>
      <p className="card-text"><small className="text-muted">Mis en ligne il y a 15 minutes.</small></p>
        <a href="/Myre" className="btn btn-primary">Consulter l'article</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">L'approche d'une entreprise dans le secteur du CBD</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <p className="card-text"> Le Partenariat entre Backstorm et Myre offre une nouvelle opportunitée, afin d'investir dans l'esport français.</p>
      <p className="card-text"><small className="text-muted">Mis en ligne il y a 15 minutes.</small></p>
        <a href="/Myre" className="btn btn-primary">Consulter l'article</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">Une grande première dans L'esport</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <p className="card-text"> Le Partenariat entre Backstorm et Myre offre une nouvelle opportunitée, afin d'investir dans l'esport français.</p>
      <p className="card-text"><small className="text-muted">Mis en ligne il y a 15 minutes.</small></p>
        <a href="/Myre" className="btn btn-primary">Consulter l'article</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5 mb-5">
    <div className="card other-container">
      <div className="card-body text-center">
        <h5 className="card-title text-center">L'approche d'une entreprise dans le secteur du CBD</h5>
        <img className="card-img-top mb-2" src={bnfm} alt="Card cap" />
        <p className="card-text"> Le Partenariat entre Backstorm et Myre offre une nouvelle opportunitée, afin d'investir dans l'esport français.</p>
      <p className="card-text"><small className="text-muted">Mis en ligne il y a 15 minutes.</small></p>
        <a href="/Myre" className="btn btn-primary">Consulter l'article</a>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Entreprise;