import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROOT_ROUTE, RESTAURANTS_ROUTE } from './constants/routes';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={ROOT_ROUTE} element={<Home />} />
          <Route path={RESTAURANTS_ROUTE} element={<Restaurants />} />
          <Route path="*" element={<div>Not found!</div>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
