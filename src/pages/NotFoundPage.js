import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! The page you're looking for does not exist.</p>
        <Button variant='contained' component={Link} to='/' className="home-link ">Go back to Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
