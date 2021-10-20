/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Composants
import CardProject from "src/components/CardProject";

// Icons
import { HiOutlineLightBulb } from "react-icons/hi";

// Style
import "./style.scss";

// == Composant
function BoardPageProjectBearer({ fetchProfileData, getProjects, myProjects, logged, emptyProjectState }) {
  useEffect(fetchProfileData, []);
  useEffect(getProjects, []);

  const onClickNewProject = () => {
    emptyProjectState();
  };

  return (
    <div className={`board__page ${logged ? 'islog' : ''}`}>

      <div className="board__subpage">

        <p className="board__title">Espace Porteur de projet</p>

        <div className="board__my-projects">
          <Link to="/myProjects/new">
            <div className="board__new-project"
            onClick={onClickNewProject}>
              <div className="board__new-project-card">
                <p>
                  <HiOutlineLightBulb size="1.2em" /> Déposer un nouveau projet
                </p>
              </div>
            </div>
          </Link>

          <div className="board__component">
            {/* <div className="board__running-projects">
              <p className="board__subtitle">Mes projets en cours</p> */}
              {myProjects.length === 0
                ? "Aucun projet en cours"
                : myProjects.map((project) => (
                  <Link key={project.id} to={`/search/projects/${project.id}`}>
                    <CardProject key={project.id} {...project} />
                  </Link>
                ))}
            {/* </div>

            <div className="board__finalized-projects">
              <p className="board__subtitle">Mes projets clôturés</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default BoardPageProjectBearer;
