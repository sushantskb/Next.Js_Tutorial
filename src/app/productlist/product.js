"use client"
import { useState } from "react";
const ProductPrice = ({price})=> {
    const [showPrice, setPrice] = useState(false);
    const style = {
        button:{
            backgroundColor: "#8282f8",
            padding: "10px 10px",
            color: "white",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer"
        },
        price: {
            marginTop: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            letterSpacing: "1.75px"
        }
    }
    const handleClick = () => {
        setPrice(!showPrice);
    }
    return (
        <div>
            <button style={style.button} onClick={handleClick}>
                { showPrice ? "Hide Price" : "Get Price" }
            </button>
            {
                showPrice && <p style={style.price}> Price : ${price} </p>
            }
        </div>
    )
}

export default ProductPrice;