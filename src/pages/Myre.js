import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../context/userContext";
import { Chart, registerables } from 'chart.js';
import Mry from '../pages/LOGO_ORANGE.png';
import Token2PurchaseForm from '../context/Token2PurchaseFrom';
import TokenSaleForm from '../context/TokenSaleForm';
import bnfm from "../pages/BNFMYRE2.png";

Chart.register(...registerables);

const Myre = () => {
  const { currentUser } = useContext(UserContext);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showSaleForm, setShowSaleForm] = useState(false);

  const handleClosePurchaseForm = () => {
    setShowPurchaseForm(false);
  };

  const handleCloseSaleForm = () => {
    setShowSaleForm(false);
  };

  useEffect(() => {
    createChart();
  }, []);

  const createChart = () => {
    const ctx = document.getElementById('myChart').getContext('2d');

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Bnf 01',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: 'rgba(152,107,172,1)',
          borderColor: 'rgba(234,98,120,1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  };

  return (
    <div className="d-flex flex-column align-items-center" style={{ minHeight: '100vh' }}>
      <div className="d-flex align-items-center">
        <h2 className="text-dark mt-5 mb-4">
          {currentUser ? "MYRE" : "MYRE"}
        </h2>
        <img src={Mry} width="90" height="90" className="d-inline-block align-top" alt="" />
      </div>
      <div className="container p-5">
        <p className="display-09 text-dark text-center">
          Myre est une structure esportive créée en 2022 par Mark «Markus» Bernardi et Kévin «Rooster» Laforme.
          Nous voulons donner l’opportunité aux talents d’aujourd’hui de devenir les joueurs de demain.
          Nous avons l’ambition de devenir une référence connue de tous.
        </p>
      </div>
      <boutton type="bouton" className="btn btn-warning btn-lg btn-bloc">Le projet</boutton>
      <div className="container p-5 align-items-center mb-4">
        <div className="d-flex flex-column text-light">
          <canvas id="myChart" width="450" height="300"></canvas>
        </div>
        <div className="ml-4 d-flex flex-column mt-5">
          <div className="d-flex align-items-center">
            <strong className="px-2">Cours de l'action :</strong>
            <span>51.6</span>
          </div>
          <div className="d-flex align-items-center">
            <strong className="px-2 mt-3">Siège social:</strong>
            <span className="mt-3">Paris</span>
          </div>
          <div className="d-flex align-items-center">
            <strong className="px-2 mt-3">Date de création:</strong>
            <span className="mt-3">01/05/2022</span>
          </div>
          <div className="d-flex align-items-center">
            <strong className="px-2 mt-3">PDG:</strong>
            <span className="mt-3">M.Bernardi</span>
          </div>
          <div className="d-flex align-items-center">
            <strong className="px-2 mt-3">Forme juridique:</strong>
            <span className="mt-3">SARL</span>
          </div>
          <div className="d-flex align-items-center">
            <strong className="px-2 mt-3">Chiffre d'affaire:</strong>
            <span className="mt-3">70 k€</span>
          </div>
          <div className="d-flex align-items-center">
            <strong className="px-2 mt-3">Nombre de Bnf:</strong>
            <span className="mt-3">150 / 800</span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <button
          onClick={() => setShowPurchaseForm(true)}
          className="btn btn-success ms-3"
        >
          Acheter Le BNF
        </button>
        {showPurchaseForm && <Token2PurchaseForm onClose={handleClosePurchaseForm} />}
        <button
          onClick={() => setShowSaleForm(true)}
          className="btn btn-danger ms-3"
        >
          Vendre le BNF
        </button>
        {showSaleForm && <TokenSaleForm onClose={handleCloseSaleForm} />}
      </div>
      <div className="container p-5 mt-2"></div>
      <div className="card mb-3">
        <img className="card-img-top" src={bnfm} alt="Card cap" />
      </div>
    </div>
  );
};

export default Myre;
