import React from 'react';
import INITIAL_DUMMY_DATA from '../../constants/mocks/dummyData';
import Cards from '../../components/Card';
import './Restaurants.css';

function Restaurants() {
  return (
    <div>
      <ul className="all-cards-container">
        {INITIAL_DUMMY_DATA.map((restaurant) => (
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
