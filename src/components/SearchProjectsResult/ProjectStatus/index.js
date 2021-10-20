// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

import { AiOutlineCheckCircle, AiOutlineStop } from 'react-icons/ai';

// == Composant
function ProjectStatus({ status }) {
  return (
    <div className="project__status element">
      {status === true ? <p className="project__status-indicator"> <AiOutlineCheckCircle color="green"/> Projet ouvert aux participations</p> : <p className="project__status-indicator"> <AiOutlineStop color="red"/> Projet fermé aux participations</p> }
    </div>
  );
}

// == Export
export default ProjectStatus;
