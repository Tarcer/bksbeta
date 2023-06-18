import React, {useState} from "react";

function TableVariation({name,variation}) {
    const [colorText,setColorText]=useState("text-success");
    if(variation<0){
        setColorText("text-danger")
    }
    return(
        <>
            <span className="m-3">{name}</span>
            <span className={colorText}>{variation}</span>
        </>
    )
}
export default TableVariation;