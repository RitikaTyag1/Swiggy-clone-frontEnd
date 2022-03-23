import React, { useState, useEffect } from 'react';
import './Header.css';
import makeRequest from '../../utils/makeRequest';

function Header() {
  const [searchDish, setSearchDish] = useState('');

  const searchDishHandler = (event) => {
    setSearchDish(event.target.value);
  };

  const queryByDish = () => {

  };

  return (
    <div className="header">
      <img className="swiggy-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="swiggyLogo" />

      <div>
        <input onChange={searchDishHandler} className="search-dish" type="text" placeholder="Search Dishes" />
        <button
          className="submit-button"
          type="submit"
          onClick={queryByDish}
        >
          Search

        </button>

      </div>
    </div>
  );
}

export default Header;
