import React from "react";

function MyrTable ({idBnf, variation, price}) {
    return(
        <tr>
            <td>{idBnf}</td>
            <td>Myre</td>
            <td className="text-success">{variation}</td>
            <td>{`${price}€`}</td>
          </tr>
    );
}
export default MyrTable;