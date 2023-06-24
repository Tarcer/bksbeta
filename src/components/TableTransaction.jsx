import React from "react";

function TableTransaction ({Bnf,name,date,valeur}) {
    return(
        <tr>
        <td className={Bnf.slice(0,1)==='-'? 'text-danger' : 'text-success'}>{Bnf}</td>
        <td>{name.toUpperCase()}</td>
        <td className={Bnf.slice(0,1)==='-'? 'text-danger' : 'text-success'}>{valeur}€</td>
        <td>{date}</td>
        </tr>
    )
}
export default TableTransaction;


// valeur.slice(0,1)==='-'