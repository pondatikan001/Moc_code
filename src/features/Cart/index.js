import React, { useState } from 'react';
import "./styles.css";
import logo from '../../image/werewolf.png';
import data from '../../app/data';

export default function Cart() {
    //const productImage = require(`../../image/${product.imageURL}`);
    const [products, setProducts] = useState(data);
  return (
    <>
 <div className = "container"> 
     {products.map((product) => (
       <div className = "product" key={product.id} >
         <img src={product.imageURL}  />
           <div className = "detail">
           <p class="text">{product.name}</p>
            <button>Detail</button>
            <button>Delete</button>
      </div>
          </div>
        ))} </div>
          </>
          
  );
}
