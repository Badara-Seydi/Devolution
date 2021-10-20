// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
import "./style.scss";

// == Composant
function ProjectHeader({ name, pseudo, icon }) {
  return (
    <div className="project-home__header">
      <div>
        <h1 className="project-home__title">{name}</h1>
      </div>

      <img className="project-home__icon" src={icon} alt="icône du projet" />
    </div>
  );
}

// == Export
export default ProjectHeader;
