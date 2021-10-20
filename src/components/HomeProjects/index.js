import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import HomeDevolution from "src/containers/HomeDevolution";
import CardProject from "src/components/CardProject";

import "./style.scss";

function HomeProjects({ projects, lastProjectsLoading, logged }) {

  const [limit, setlimit] = useState(3)

  useEffect(lastProjectsLoading, [limit]);

  const handleLimit = () => {
    setlimit(limit+3)
  }
  
  return (
    <div className={`home ${ logged ? 'islog' : '' }`}>
      <HomeDevolution />
      <h2 className="home__title">Les derniers projets</h2>

      <div className="home__cards--container">
        <div className="home__cards">
          {/* for (let index = 0 ; index < 2; index++) {

          } */}
          {
            projects.map((project, index) => {
                
                if (index < limit) {
                  
                  return (
                    <Link key={project.id} to={`/more/${project.id}`}>
                      <CardProject key={project.id} {...project} />
                    </Link>
                  )
                } else return null;
              }
            )
          }
          </div>
        </div>
        <button className="home__button" onClick={handleLimit}>Voir plus de projets</button>
    </div>
  );
}

HomeProjects.propTypes = {};

export default HomeProjects;