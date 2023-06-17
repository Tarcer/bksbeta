import React from "react";

function TableVariation({name,variation}) {
    return(
        <>
            <td>{name}</td>
            <td className="text-success">{variation}</td>
        </>
    )
}
export default TableVariation;