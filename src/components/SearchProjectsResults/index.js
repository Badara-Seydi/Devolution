/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

// Composants
import CardProject from "src/components/CardProject";

// Icons
import { FiSearch } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchProjectsResults({
  projects,
  submitSearchProjects,
  changeSearchProjects,
  getProjects,
  getUsers,
  logged
}) {
  useEffect(getProjects, []);
  useEffect(getUsers, []);

  const history = useHistory();

  const onChangeSearchProjects = (event) => {
    event.preventDefault();
    changeSearchProjects(event.target.value);
  };

  const onSubmitSearchProjects = (event) => {
    event.preventDefault();
    submitSearchProjects(history);
  };

  const Message = ({ projects }) => {
    let text = 'Aucun résultat, veuillez faire une nouvelle recherche';

    if (projects.length === 1) {
      text = 'Un résultat correspond à votre recherche';
    }
    else if (projects.length > 1) {
      text = `${projects.length} résultats correspondent à votre recherche`;
    }
    return (
        {text}
    );
  };

  return (
    <div className={`search__page ${ logged ? 'islog' : ''}`}>

      <div className="search__subpage">

        <div className="search-details__container">
          <form className="search-details__form">
            <input
              className="search-details__input"
              onChange={onChangeSearchProjects}
            />
            <button
              className="search-details__button"
              type="submit"
              onClick={onSubmitSearchProjects}
            >
              <FiSearch size="25px" />
            </button>
          </form>

          <p className="search-details__number-results">
            {/* {Message(projects)} */}
            {" "}
            {projects.length} résultat(s){" "}
          </p>

          <div className="search-details__results">
            {projects.map((project) => (
              <Link key={project.id} to={`/search/projects/${project.id}`}>
                <CardProject key={project.id} {...project} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResults;
