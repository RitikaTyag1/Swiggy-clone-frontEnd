import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Card({
  fullName, Location, costForTwo, restaurantId,
}) {
  const navigate = useNavigate();
  return (
    <div className="each-card">
      <img className="restaurant-image" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80" alt="Restaurant cover" />
      <div className="card-content">
        <div className="inner-divs">
          <p><b>{fullName}</b></p>
          <p>
            ,
            {Location}
          </p>

        </div>
        <div className="inner-divs">
          <button
            className="view-menu-button"
            type="submit"
            onClick={() => navigate(`/restaurants/${restaurantId}`)}
          >
            View Menu
            {' '}

          </button>
          <div className="cost-for-two">
            Cost for two:
            {' '}
            <FaRupeeSign size={14} />
            {costForTwo}
          </div>

        </div>
      </div>
    </div>
  );
}
export default Card;

Card.defaultProps = {
  fullName: 'Sample restaurant',
};

Card.propTypes = {
  fullName: PropTypes.string,
  Location: PropTypes.string.isRequired,
  costForTwo: PropTypes.number.isRequired,
  restaurantId: PropTypes.number.isRequired,
};
