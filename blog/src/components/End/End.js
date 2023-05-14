import React from 'react';
import "./End.css";

const End = ({ imageUrl, heading, text }) => {
  return (
    <div class="contact-info">
      <h1>Contact Information</h1>
      <p><i class="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA</p>
      <p><i class="fas fa-phone"></i> (123) 456-7890</p>
      <p><i class="fas fa-envelope"></i> info@myblog.com</p>
    </div>
  );
  };

  export default End;