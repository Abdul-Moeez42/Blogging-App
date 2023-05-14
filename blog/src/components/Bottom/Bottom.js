import React from 'react';
import Wiz from './Wiz.jpg';
import "./Bottom.css";

const BottomColumns = ({ imageUrl, heading, text }) => {
  return (
    <div className="id">
    <div className="image-text-container">
      <div className="image-container">
        <img src={Wiz} alt={Wiz} />
      </div>
      <div className="text-container">
        <h1 className='ma'> Successful Student  </h1>
        <h2 className='mb'> Feedback</h2>
        <p classname='md'>The course was informative and well-structured, with engaging lectures and relevant assignments.The professor was knowledgeable and approachable, and provided helpful feedback on our work.
Overall, I feel that the course provided me with valuable skills and knowledge that will be useful in my future career. </p>
    <h4> Written by: Abdul Moeez</h4>
    </div>
    </div>
    </div>
  );
};

export default BottomColumns;
