import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFoundSection">
      <h1 className="notFounderror">404</h1>
      <div className="notFoundpage">Oops!!! The page you are looking for is not found</div>
      <Link className="notFoundback-home" to="/">Back to home</Link>
      
    </div>
  );
};

export default NotFound;
