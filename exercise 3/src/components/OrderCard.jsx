import React from "react";
import { useState } from "react";

export default function OrderCard({ order, handleIncrease, handleDecrease }) {

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{order.price}</small>
      </div>

      <div className="order-quantity">
        <div
          className={`order-button ${order.quantity<= 0 ? "disable" : ""}`}
          onClick={() => handleDecrease(order.product)}
        >
          -
        </div>
        <h4>{order.quantity}</h4>
        <div
          className="order-button"
          onClick={() => handleIncrease(order.product)}
        >
          +
        </div>
      </div>
    </div>
  );
}
