import {React, useState } from "react";
export default function ProductShoppingCart({ data }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4 flex justify-center">
          <img
            src={data.image}
            alt=""
            className="w-14 h-14 overflow-hidden"
          />
        </div>
        <div className="pl-4 w-2/4">
          <h3>{data.title}</h3>
          <p></p>
        </div>
        <div className="flex w-1 items-center">
          <input
            type="number"
            className="w-10 p-0 m-0"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <h1 className="font-bold">{data.price}</h1>
        </div>
      </div>
    </>
  );
}
