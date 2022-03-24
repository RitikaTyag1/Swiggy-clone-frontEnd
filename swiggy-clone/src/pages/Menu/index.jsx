/* eslint-disable no-use-before-define */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dish from "../../components/Dish";
import { getRestaurantMenuEndpoint } from "../../constants/apiEndpoints";
// import { RESTAURANT_MENU_PARAM } from "../../constants/routes";
import makeRequest from "../../utils/makeRequest";
import "./Menu.css";

function Menu() {
  const { restaurantId } = useParams();
  console.log(restaurantId);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    makeRequest(getRestaurantMenuEndpoint(restaurantId)).then((dish) => {
      console.log(dish);
      setDishes(() => dish);
    });
  }, []);

  return (
    <>
      <div className="header">
        <img
          className="swiggy-logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
          alt="swiggyLogo"
        />
      </div>
      <div className="all-dishes-container">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <h1 id="menu-title">Menu for Restaurant {restaurantId}</h1>
        {dishes?.map((dish) => (
          <Dish dish={dish} key={dish.id} />
        ))}
      </div>
    </>
  );
}

export default Menu;
