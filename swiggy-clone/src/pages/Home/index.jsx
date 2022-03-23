import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RESTAURANTS_ROUTE } from '../../constants/routes';

function Home() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${RESTAURANTS_ROUTE}`)}
      type="submit"
    >
      View all restaurants
    </button>
  );
}

export default Home;
