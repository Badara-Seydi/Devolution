import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from 'react-router-dom';

import CardProject from "src/components/CardProject";
import Footer from "src/components/Footer";

import "./style.scss";

function HomeSearch({
  getProjects,
  projects,
}) {

  useEffect(getProjects, []);

  return (
    <div className="searchDisconnect">
      <h1 className="searchDisconnect__title">Les projets sur Devolution</h1>
      <span className="searchDisconnect__resultNumber">{projects.length} résultat(s)</span>
      <div className="home__cards">
      {projects.map((project) => (
          <Link key={project.id} to={`/more/${project.id}`}>
            <CardProject key={project.id} {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}

HomeSearch.propTypes = {};

export default HomeSearch;
