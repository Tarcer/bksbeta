import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../pages/icon grise foncée.png';

function DashboardEntrerpises ({quantite, name, variation, valeur}) {
    const navigate = useNavigate();
    const handleClickButton1 = () => {
      navigate('/Myre');}
      
    return( 
    <tr className="active">
      <td>{name}</td>
      <td className="text-success">{`${parseFloat(variation).toFixed(2)}%`}</td>
      <td>{`${parseFloat(valeur).toFixed(1)}`}</td>
      <td>{`${parseFloat(quantite).toFixed(2)}`}</td>
      <button onClick={()=> handleClickButton1("Myre")}>
       <img src={logo} alt='camera' style={{ width: '42px', height: 'auto' }}></img> 
      </button>
    </tr>
    )
}
export default DashboardEntrerpises;