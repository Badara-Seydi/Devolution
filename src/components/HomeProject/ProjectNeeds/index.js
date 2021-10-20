// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// == Composant
function ProjectNeeds({ needs }) {
  return (
    <div className="project__needs">
      <h3 className="project__subtitle">Besoins du projet</h3>
      <h3 className="project__text">{needs}</h3>
    </div>
  );
}

// == Export
export default ProjectNeeds;
