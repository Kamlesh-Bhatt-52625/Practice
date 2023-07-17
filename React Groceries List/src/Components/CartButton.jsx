import React from "react";

const CartButton = ({ quantity, setQuantity }) => {
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="change_quantity_container">
      {/* use className and data-cy as given in problem */}
      <button data-cy="dec_btn" onClick={handleDecrement}>
        -
      </button>
      <p className="quantity">{quantity}</p>
      <button data-cy="inc_btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CartButton;
