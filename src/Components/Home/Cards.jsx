import React from "react";
import { FaDesktop, FaBrain, FaCog } from "react-icons/fa";
import "./Cards.css";

const cardsData = [
  {
    icon: <FaDesktop size={40} />,
    title: "Clean Water",
    text: "The sea freight service has grown considerably in recent years. We spend timetting to know your processes to.",
  },
  {
    icon: <FaBrain size={40} />,
    title: "Clean Water",
    text: "The sea freight service has grown considerably in recent years. We spend timetting to know your processes to.",
  },
  {
    icon: <FaCog size={40} />,
    title: "Clean Water",
    text: "The sea freight service has grown considerably in recent years. We spend timetting to know your processes to.",
  },
];

const Cards = () => {
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div
          className={`card ${index === 1 ? "middle-card" : "side-card"}`}
          key={index}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
