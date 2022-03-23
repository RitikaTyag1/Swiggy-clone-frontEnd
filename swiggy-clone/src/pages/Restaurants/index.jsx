import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './Restaurants.css';
import Header from '../../components/Header';
import { GET_RESTAURANTS_ENDPOINT } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';

function Restaurants() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    makeRequest(GET_RESTAURANTS_ENDPOINT).then((restaurantData) => {
      setResponseData(restaurantData);
    });
  }, []);

  return (
    <div>
      <Header setResponseData={setResponseData} />
      <ul className="all-cards-container">
        {responseData.map((restaurant) => (
          <li key={restaurant.id}>
            <Card
              fullName={restaurant.fullName}
              Location={restaurant.Location}
              costForTwo={restaurant.costForTwo}
              restaurantId={restaurant.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
