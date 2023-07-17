import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

const Grocerydetails = () => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`
      );
      const jsonData = await res.json();
      setData(jsonData.data);
      setIsVisible(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <div>
      {/* map data to grocery item use className and data-cy as given in problem description  */}
      <h1>Groceries</h1>
      {!isVisible && (
        <button className="get-groceries" onClick={fetchData}>
          Get Groceries
        </button>
      )}
      {
        isVisible && (
          <div data-cy="container">
          {data.map((elem) => (
            <GroceryItem key={elem.id} props={elem}/>
          ))}
          </div>
        )
      }
    </div>
  );
};

export default Grocerydetails;
