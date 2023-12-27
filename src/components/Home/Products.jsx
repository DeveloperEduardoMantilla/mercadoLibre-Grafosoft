import React, { useEffect, useState } from "react";
import Product from "../Home/Product.jsx";
import { Avatar} from "@nextui-org/react";
import ShoppingCart from "./ShoppingCart.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [onload, setOnload] = useState(false);
  const [productSelect, setProductSelect] = useState([]);

  const fetchData = async () => {
    const response = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    setProducts(response);
  };

  useEffect(() => {
    fetchData();
    setOnload(true);
  }, []);

  useEffect(() => {
  }, [productSelect]);

  const productsSelect = (dataChildren) => {
    setProductSelect([...productSelect, dataChildren]);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center pt-8">
        <div className="flex w-4/5 flex-col justify-between">        
          <div className="w-full flex justify-end">
              <ShoppingCart data={productSelect}/>
          </div>
          <div className="flex flex-wrap justify-between">
            {onload ? (
              products.map((item, index) => (
                <Product
                  productsSelect={productsSelect}
                  data={item}
                  key={index}
                />
              ))
            ) : (
              <h2>Cargando...</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
