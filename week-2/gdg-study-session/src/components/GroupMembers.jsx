import React from 'react';

function GroupMembers() {
  const members = [
    'Dagmawit Tibebu Terefe',
    'Winta Atsbha',
    'Senay Bihon',
    'Dagmawit Alemayehu Tilahun',
    'Mekdes Lemessa Negash',
    'Munira Abdulkerim',
    'Mihret Tesfaye',
    'Dagmawit Yoseph',
    'Kenenisa Belete',
    'Mekdelawit Abadina Kassa',
    'Suad Abrar',
    'Bezawit Denbeze',
    'Misgana Betselot Hailu',
  ];

  return (
    <div>
      <h1>GDG section 8 React Group Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default GroupMembers;
