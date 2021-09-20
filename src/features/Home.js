import React, { useState } from 'react';

import data from '../app/data';
import Product from './Product';

export default function Home() {
  const [products, setProducts] = useState(data);

  return (
    <div>
      <h1>Board Game</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
}