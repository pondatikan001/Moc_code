import React from 'react';
import PropTypes from 'prop-types';


function Product({item}) {
  const productImage = require(`../../image/${item.imageURL}`);
    return (
    <li className="Products">
      <a href={`/Detail${item.id}`}>
       <img className="Products__image" src={productImage} alt={item.name}/>
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};

export default Product;
