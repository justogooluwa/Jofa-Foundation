import React from "react";
import { FaWallet, FaGavel, FaCog } from "react-icons/fa";
import "./Cards.css";

const cardsData = [
  {
    icon: <FaGavel size={40} />,
    title: "Governance",
    text: "The Chief Executive Officer And Director Directs The Activities of JOFA Foundation As Laid Down By The Board of Trustees As Well As Enforces The Rules Guiding The Policies, Processes, Rules, And Regulations.",
  },
  {
    icon: <FaWallet size={40} />,
    title: "Finance",
    text: "JOFA Foundations Are Funded Through Lawful And Credible Individuals And Bodies.The Organization Shall Have Account With Any Bank In Nigeria",
  },
  {
    icon: <FaCog size={40} />,
    title: "Institution Planning",
    text: "There shall be Annual General Meeting, Quarterly Meeting, Monthly Meeting and Emergency Meeting of The Foundation. For Effective Administration Of The Association.",
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
