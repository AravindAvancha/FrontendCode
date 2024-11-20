// src/component/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, image, path }) => (
  <Link to={path} className="card">
    <div className="card-body">
      <img src={image} alt={title} className="card-img-top" />
      <h5 className="card-title">{title}</h5>
    </div>
  </Link>
);

export default ServiceCard;
