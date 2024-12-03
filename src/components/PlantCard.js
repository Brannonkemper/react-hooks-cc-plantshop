import React, { useState } from "react";

function PlantCard({ plant }) {
  // State to track whether the plant is in stock
  const [isInStock, setIsInStock] = useState(true);

  // Toggle the stock status when the button is clicked
  const handleStockToggle = () => {
    setIsInStock((prevStatus) => !prevStatus);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button className={isInStock ? "primary" : ""} onClick={handleStockToggle}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;


