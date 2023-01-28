import React, { useEffect } from "react";
import "../style/styles.css";

export const Card = ({
  name = "",
  image = "",
  price = "",
  description = "",
}) => {
  return (
    <div className="products-center">
      <div className="categories">
        <div className="img-container">
          <img src={image} alt="product" className="product-img" />
          <button className="bag-btn" data-id="1">
            <i className="fas fa-shopping-cart"></i>
            add to bag
          </button>
        </div>
        <div className="description-product">
          <h3 className="product-name">{name}</h3>
          <h4 className="product-price">$ {price}</h4>
          <p className="specifications">{description}</p>
        </div>
      </div>
    </div>
  );
};
