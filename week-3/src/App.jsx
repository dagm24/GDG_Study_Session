import React from "react";
import UserCard from "./components/UserCard"; 
import "./App.css"; 

const App = () => {
  return (
    <div className="cards-container">
      <UserCard name="Dagmawit Tibebu" email="tibebudag07@gmail.com" age={28} />
      <UserCard name="Abebe kebede" email="abe24@gmail.com" age={32} backgroundColor="lightblue"/>
      <UserCard name="Alex Habtsh" email="alexhabt@gmail.com" age={24} backgroundColor="lightgreen"/>
    </div>
  );
};

export default App;
