import React, { useEffect, useState } from 'react';
import INITIAL_DUMMY_DATA from '../../constants/mocks/dummyData';
import Cards from '../../components/Card';
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
            <Cards
              fullName={restaurant.fullName}
              Location={restaurant.Location}
              costForTwo={restaurant.costForTwo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
