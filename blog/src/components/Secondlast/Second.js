import React from 'react';
import Niz from './Niz.png';
import "./Second.css";

const Second = ({ imageUrl, heading, text }) => {
  return (
    <div className="imd">
    <div className="image-text-container">
      <div className="image-container">
        <img src={Niz} alt={Niz} />
      </div>
      <div className="text-container">
        <h1>  Get every <br></br>information you want!   </h1>
        <div className="button-container">
        <label htmlFor="email"></label>
      <input type="email" id="email" name="email" />
    <button className="button">Subscribe</button>
  </div>
      </div>
    </div>
    </div>
  );
};

export default Second;
