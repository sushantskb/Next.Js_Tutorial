"use client";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log(data);
      setProduct(data.products);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      {
        product.map((item) => (
            <div key={item._id}><h3>Name : {item.title}</h3><h3>Price : {item.price}</h3><hr /></div>
        ))
      }
    </>
  );
};

export default ProductList;
