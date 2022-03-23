import React, { useState, useEffect } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { getByDishEndpoint } from '../../constants/apiEndpoints';

function Header({ setResponseData }) {
  const [searchDish, setSearchDish] = useState('');

  const searchDishHandler = (event) => {
    setSearchDish(event.target.value);
  };

  const queryByDish = () => {
    makeRequest(getByDishEndpoint(searchDish)).then((res) => {
      setResponseData(res);
      setSearchDish('');
    });
  };

  return (
    <div className="header">
      <img className="swiggy-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="swiggyLogo" />

      <div>
        <input
          onChange={searchDishHandler}
          className="search-dish"
          type="text"
          placeholder="Search Dishes"
          value={searchDish}
        />
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
Header.propTypes = {
  setResponseData: PropTypes.func.isRequired,
};

export default Header;
