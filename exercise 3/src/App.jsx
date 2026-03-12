import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function calculate() {
    return orders.reduce((acc, order) => acc + order.quantity * order.price, 0);
  }

  function increase(product) {
    setOrders(
      orders.map((order) => {
        if (order.product === product) {
          return { ...order, quantity: order.quantity + 1 };
        }else
          return order;
      }),
    );
  }

  function decrease(product) {
    setOrders(
      orders.map((order) => {
        if (order.product === product) {
          return { ...order, quantity: order.quantity - 1 > 0 ? order.quantity - 1 : 0};
        }else
          return order;
      }),
    );
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} handleIncrease={increase} handleDecrease = {decrease}></OrderCard>
        ))}
      </div>

      <CheckoutButton total={calculate()}></CheckoutButton>
    </>
  );
}
