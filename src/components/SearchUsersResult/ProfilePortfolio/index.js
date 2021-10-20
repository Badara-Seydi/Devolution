/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Icons
import { FiExternalLink } from 'react-icons/fi';

// Style
// import "./style.scss";

// == Composant
function ProfilePortfolio({portfolio}) {
  return (
    <div className="profile__portfolio element">
      <h3 className="profile__category-title">Mon portfolio</h3>
      <a className="profile__portfolio-link" href={portfolio} alt="Portfolio Link">
        <p> <FiExternalLink size="30px"/> </p>
      </a>
    </div>
  );
}

// == Export
export default ProfilePortfolio;
