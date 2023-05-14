import React from 'react';
import Miz from './Miz.jpg';
import "./Middle.css";

const TwoColumns = ({ imageUrl, heading, text }) => {
  return (
    <div className="id">
    <div className="image-text-container">
      <div className="image-container">
        <img src={Miz} alt={Miz} />
      </div>
      <div className="text-container">
        <h3> " Become Master "  </h3>
        <p classname='md'>Learn new Skills from one of the <br></br>Best Courses Online </p>
        <div className="button-container">
    <button className="button">Read More</button>
    <button className="button">Get a Quote</button>
  </div>
      </div>
    </div>
    </div>
  );
};

export default TwoColumns;
