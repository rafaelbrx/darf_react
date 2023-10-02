import React from "react";
import './Feedback.css'
import user from '../../Assets/userFB.png';

const Feedback = () => {
  const feedbackData = [
    {
      name: "Agente 01",
      profileIcon: user,
      text: "Foco confirmado e tratado.",
    },
    {
      name: "Agente 02",
      profileIcon: user,
      text: "Foco não confirmado.",
    },
    {
      name: "Agente 02",
      profileIcon: user,
      text: "Foco tratado.",
    },
    {
      name: "Agente 02",
      profileIcon: user,
      text: "Foco confirmado, aguardando tratamento.",
    },
    {
      name: "Agente 01",
      profileIcon: user,
      text: "Foco confirmado, aguardando tratamento.",
    },
    {
      name: "Agente 02",
      profileIcon: user,
      text: "Foco confirmado e tratado.",
    },
    {
      name: "Agente 02",
      profileIcon: user,
      text: "Foco confirmado e tratado.",
    },
    {
      name: "Agente 02",
      profileIcon: user,
      text: "Foco não confirmado",
    },
  ];

  const FeedbackCard = ({ name, profileIcon, text }) => {
    return (
      <div className="feedback-card">
        <div className="profile-info">
          <div className="profile-icon">
            <img src={profileIcon} alt={name} />
          </div>
          <div className="agent-name">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="feedback-info">
          <p>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="feedback-page">
      <h2>Feedback dos agentes de saúde</h2>
      <div className="feedback-cards-container">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard
            key={index}
            name={feedback.name}
            profileIcon={feedback.profileIcon}
            text={feedback.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;