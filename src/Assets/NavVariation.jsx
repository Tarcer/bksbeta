import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, off } from 'firebase/database';
import TableVariation from "./TableVariation";
import "./version.css";

function NavVariation() {
  const [data, setData] = useState('');

  useEffect(() => {
    const database = getDatabase();
    const allInformationsRef = ref(database, 'globalInformation');

    const fetchData = (snapshot) => {
      const stockData = snapshot.val();
      setData(stockData);
      if (stockData) {
        Object.keys(stockData).map((key) => {
          const { name, variation, price } = stockData[key];
          return { name, variation, price };
        });
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

  return (
    <div className="marquee-rtl font-montserrat bg-whitesmoke">
      <span>
        {data?.informationArray?.map((information, index) => (
          <TableVariation
            key={index} // Use a different prop name for the key
            name={information.name}
            variation={`${parseFloat(information.variation).toFixed(2)}%`}
          />
        ))}
      </span>
    </div>
  );
}

export default NavVariation;
