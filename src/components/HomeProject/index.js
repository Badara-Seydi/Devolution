// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Composants
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectNeeds from "./ProjectNeeds";

// Icons

// Style
import "./style.scss";

// == Composant
function HomeProject({ project, logged }) {
  return (
    <div className={`profile__page ${ logged ? 'islog' : ''}`}>
      <div className="project-home__component">
        <ProjectHeader name={project.name} icon={project.icon} />

        <div className="project-home__information element">
          <ProjectDescription description={project.description} />
          <ProjectNeeds needs={project.need_of_the_project} />
        </div>

        <div className="project-home__more-detail">
          <Link to="/login">
            <button className="project-home__button-participate">
              Plus de détails
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// == Export
export default HomeProject;
