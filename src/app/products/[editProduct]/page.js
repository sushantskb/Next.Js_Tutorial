"use client"
import { useEffect, useState } from "react";
import "./style.css";
export default function Page(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [company, setCompany] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
      // console.log(props.params.editProduct);
      getProductDetail();
    }, [])

    const  getProductDetail = async ()=>{
      // console.log(props.params.editProduct);
      let id = props.params.editProduct;
      let productData = await fetch("http://localhost:3000/api/products/" + id);
      productData = await  productData.json();
      if(productData.success){
        let result = productData.result;
        setName(result.name);
        setPrice(result.price);
        setColor(result.color);
        setCategory(result.category);
        setCompany(result.company);
      }
      console.log(productData);
    }
  return (
    <div>
      <h1>Update Products</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" className="input" />
      <input type="text"  value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" className="input" />
      <input type="text"  value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Product Color" className="input" />
      <input type="text"  value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" className="input" />
      <input type="text"  value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" className="input" />
      <button className="btn">Update Product</button>
    </div>
  );
}
