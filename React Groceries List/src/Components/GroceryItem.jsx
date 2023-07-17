import React, { useState } from "react";
import CartButton from "./CartButton";

const GroceryItem = ({ props }) => {
  const { image, name, price } = props;
  console.log(name, image, price);

  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  }

  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h5>{price}</h5>
      {quantity === 0 ? (
        <button data-cy="add_to_cart" onClick={handleAddToCart}>Add to cart</button>
      ) : (
        <CartButton quantity={quantity} setQuantity={setQuantity}/>
      )}
    </div>
  );
};

export default GroceryItem;
