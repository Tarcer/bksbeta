import React from "react";

function MyrTable ({idBnf, variation, price}) {
    return(
        <tr>
            <td>{parseFloat(idBnf).toFixed(3)}</td>
            <td>Myre</td>
            <td className="text-success">{`${parseFloat(variation).toFixed(3)}%`}</td>
            <td>{`${parseFloat(price).toFixed(2)}€`}</td>
          </tr>
    );
}
export default MyrTable;