import React from "react";

function TableTransaction ({Bnf,name,date,valeur}) {
    return(
        <tr>
        <td className={Bnf.slice(0,1)==='-'? 'text-[#FF0000]' : 'textbg-[#81BF73]'}>{Bnf}</td>
        <td>{name.toUpperCase()}</td>
        <td className={Bnf.slice(0,1)==='-'? 'text-[#FF0000]' : 'text-[#81BF73]'}>{valeur}€</td>
        <td>{date}</td>
        </tr>
    )
}
export default TableTransaction;
