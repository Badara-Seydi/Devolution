import React from "react";
import PropTypes from "prop-types";

import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";

import "./style.scss";

function CardProject({ name, is_available, icon, description }) {
  return (
    <div className="cardProject">
      <p className="cardProject__title">{name}</p>

      <div className="cardProject__status">
        {is_available === true ? (
          <p>
            {" "}
            <AiOutlineCheckCircle color="green" /> Ouvert{" "}
          </p>
        ) : (
          <p>
            {" "}
            <AiOutlineStop color="red" /> Fermé{" "}
          </p>
        )}
      </div>

      {/* 
      <p className="cardProject__pseudo">{author}</p> */}

      <div className="cardProject__image-container">
        <img className="cardProject__image" src={icon} alt="Image projet" />
      </div>

      <div className="cardProject__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  // name: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default CardProject;
