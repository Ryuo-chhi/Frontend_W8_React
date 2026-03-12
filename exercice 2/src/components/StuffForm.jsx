import { useState } from "react";

export default function StuffForm({ handleAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Banana"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="search"
        placeholder="15"
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />

      <button
        onClick={(e) => {
          handleAdd(name, price);
          e.preventDefault();
        }}
      >
        Add Stuff
      </button>
    </form>
  );
}
