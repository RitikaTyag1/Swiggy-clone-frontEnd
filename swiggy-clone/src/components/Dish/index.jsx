/* eslint-disable react/prop-types */

import React from "react";
import "./Dish.css";

function Dish({ dish }) {
  return (
    <div className="outer-menu-container">
      <div className="menu-content-container">
        <div id="dish-name">{dish.name}</div>
        <div id="dish-price">
          Rs.
          {dish.price}
        </div>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <div id="dish-rating">{dish.rating} stars</div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}

export default Dish;
