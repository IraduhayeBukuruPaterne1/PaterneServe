import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to PaterneServe</h1>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
};

export default WelcomePage;

