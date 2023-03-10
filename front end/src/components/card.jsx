import React, { useState } from "react";
import "../style/card.css";
import "../style/images.css";

export const Card = ({
  name = "",
  image = "",
  price = "",
  description = "",
  adding,
  info,
  index = "",
}) => {

  // const [itemname, setitemname] = useState([]);
  // const addtocart = (item) => {
  //   setitemname([...itemname, item]);
  // };

  return (
    <div className="categories">
      <div className="img-container">
        {image === "" ? (
          <div className={`img-${index}`}></div>
        ) : (
          <>
            <img src={image} alt="product" className="product-img" />
            <button
              className="bag-btn"
              data-id="1"
              onClick={() => adding(info)}
            >
              <i className="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </>
        )}
      </div>
      <div className="description-product">
        <h3 className="product-name">{name}</h3>
        {image === "" ? "" : <h4 className="product-price">$ {price}</h4>}
        <p className="specifications">{description}</p>
      </div>
    </div>
  );
};
