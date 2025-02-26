import React from 'react';
import './UserCard.css';

const UserCard = ({ name, email, age, backgroundColor }) => {
  return (
    <div 
      className="user-card"
      style={{
        background: backgroundColor || 'linear-gradient(135deg, #6e7dff, #4f5bf0)',
      }}
    >
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
