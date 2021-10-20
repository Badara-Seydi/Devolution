// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
import "./style.scss";

// == Composant
function ProjectHeader({ name, pseudo, icon }) {
  return (
    <div className="project__header">

      <div>
        <h1 className="project__title">{name}</h1>
        <p> par <a className="project__bearer">{pseudo}</a> </p>
      </div>

      <img className="project__icon" src={icon} alt="icône du projet" />

    </div>
  );
}

// == Export
export default ProjectHeader;
