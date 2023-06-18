import React, {useEffect,useState} from "react";
import { getDatabase, ref, onValue, off } from 'firebase/database';
import TableVariation from "./TableVariation";
import "./version.css";

function NavVariation () {
    const [data,setData] = useState('')
    useEffect(() => {
        const database = getDatabase();
        const allInformationsRef = ref(database, 'globalInformation');
    
        const fetchData = (snapshot) => {
          const stockData = snapshot.val();
          setData(stockData);
          if (stockData) {
            console.log(stockData, 'laaaa')
            // Convert the data object to an array of objects
            const informationArray = Object.keys(stockData).map((key) => {
              const { name, variation, price } = stockData[key];
              return { name, variation, price };
            });
    
            console.log(informationArray);
            // Store informationArray in a constant or state variable
            // Do further processing or actions based on the result
          }
        };
    
        const handleDataChange = (snapshot) => {
          fetchData(snapshot);
        };
    
        onValue(allInformationsRef, handleDataChange);
    
        // Cleanup the listener when the component unmounts
        return () => {
          off(allInformationsRef, handleDataChange);
        };
      }, []);
    return(
        <div className="marquee-rtl">  
        <span>
            {data?.informationArray?.map((information) => (
                <TableVariation name={information.name} variation={information.variation}/>
            ))}
        </span>
        </div>
    )
}
export default NavVariation;