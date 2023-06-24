import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <button onClick={()=> handleClickButton1("Myre")} className="btn btn-outline-success btn-sm mb-2">A</button>
      <button onClick={()=> handleClickButton1("Myre") }className="btn btn-outline-danger btn-sm mb-2">V</button>
    </tr>
    )
}
export default DashboardEntrerpises;