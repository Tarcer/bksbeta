import React, {useState} from "react";

function TableVariation({name,variation}) {
    const [colorText,setColorText]=useState("text-[#62C354]");
    if(variation<0){
        setColorText("text-red-400")
    }
    return(
        <>
            <span className="m-3">{name}</span>
            <span className={colorText}>{variation}</span>
        </>
    )
}
export default TableVariation;
