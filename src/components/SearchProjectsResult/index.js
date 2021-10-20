// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

// Composants
import ProjectHeader from "./ProjectHeader";
import ProjectStatus from "./ProjectStatus";
// import ProjectCompetencies from "./ProjectCompetencies";
import ProjectDescription from "./ProjectDescription";
import ProjectNeeds from "./ProjectNeeds";
// import ProjectSpecificities from "./ProjectSpecificities";
import ProjectContact from "./ProjectContact";

// Icons

// Style
import "./style.scss";

// == Composant
function SearchProjectsResult({
  clickParticipationButton,
  clickUnparticipationButton,
  clickDeleteButton,
  project,
  idProject,
  myParticipatedProjects,
  fetchProfileData,
  getProjects,
  saveProjectData,
  logged,
  getUsers,
  projectOwners,
  myUserId,
}) {
  useEffect(getProjects, []);
  useEffect(getUsers, []);
  useEffect(fetchProfileData, []);

  const saveCurrentProjectData = (project) => {
    saveProjectData(project);
  };
  
  saveCurrentProjectData(project);

  const projectOwner = projectOwners.find((searchedUser) => {
    return searchedUser.id === project.owner_id;
  });

  const participateToCurrentProject = myParticipatedProjects.find(
    (searchedParticipation) => {
      return searchedParticipation.id === idProject;
    }
  );

  const history = useHistory();

  const onClickParticipationButton = () => {
    clickParticipationButton(idProject, history);
  };

  const onClickUnparticipationButton = () => {
    clickUnparticipationButton(idProject, history);
  };

  const onClickDeleteButton = () => {
    clickDeleteButton(idProject, history);
  };

  return (
    <div className={`project__page ${logged ? "islog" : ""}`}>
      <div className="project__subpage">
        <div className="project__component">
          <ProjectHeader
            name={project.name}
            pseudo={projectOwner.pseudo}
            icon={project.icon}
          />

          <ProjectStatus status={project.is_available} />

          {participateToCurrentProject ? (
            <ProjectContact
              firstname={projectOwner.firstname}
              lastname={projectOwner.lastname}
              email={projectOwner.email}
              phone={projectOwner.phone}
            />
          ) : null}

          {/* <ProjectCompetencies/> */}

          <div className="project__information element">
            <ProjectDescription description={project.description} />
            <ProjectNeeds needs={project.need_of_the_project} />
            {/* <ProjectSpecificities /> */}
          </div>

          <div className="project__buttons">
            {/*Je participe au projet*/}
            {participateToCurrentProject && (
              <button
                className="project__button-unparticipate"
                onClick={onClickUnparticipationButton}
              >
                Je me retire du projet
              </button>
            )}

            {/*Je ne participe pas au projet, et il est disponible, et je n'en suis pas le propriétaire*/}
            {!participateToCurrentProject &&
            project.is_available /*&& !projectOwner.id === myUserId*/ ? (
              <button
                className="project__button-participate"
                onClick={onClickParticipationButton}
              >
                Je participe !
              </button>
            ) : null}

            {/*Je suis le créateur de ce projet*/}
            {projectOwner.id === myUserId ? (
              <Link
                className="project__button-modify"
                key={project.id}
                to={`/myProjects/modify/${project.id}`}
              >
                <button className="project__button-modify-inside">
                  Modifier ce projet
                </button>
              </Link>
            ) : null}

            {/*Je suis le créateur de ce projet*/}
            {projectOwner.id === myUserId ? (
              <button
                className="project__button-delete"
                onClick={onClickDeleteButton}
              >
                Supprimer ce projet
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResult;
