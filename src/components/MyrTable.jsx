import React from "react";

function MyrTable ({idBnf}) {
    return(
        <tr>
            <td>{idBnf}</td>
            <td>BKS</td>
            <td className="text-success">+6%</td>
            <td>500€</td>
          </tr>
    );
}
export default MyrTable;