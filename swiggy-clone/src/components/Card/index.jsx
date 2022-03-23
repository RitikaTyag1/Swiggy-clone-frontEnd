import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { FaRupeeSign } from 'react-icons/fa';

function Cards({ fullName, Location, costForTwo }) {
  return (
    <div className="each-card">
      <img className="restaurant-image" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80" alt="Restaurant cover" />
      <div className="card-content">
        <p><b>{fullName}</b></p>
        <p>{Location}</p>
      </div>
      <div className="cost-for-two">
        Cost for two:
        {' '}
        <FaRupeeSign size={14} />
        {costForTwo}
      </div>
    </div>
  );
}
export default Cards;

Cards.defaultProps = {
  fullName: 'Sample restaurant',
};

Cards.propTypes = {
  fullName: PropTypes.string,
  Location: PropTypes.string.isRequired,
  costForTwo: PropTypes.number.isRequired,
};
