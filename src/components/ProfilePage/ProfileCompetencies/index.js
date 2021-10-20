/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import skillsdata from './fakedata';
// Style
import "./style.scss";

// == Composant
function ProfileCompetencies({ userData }) {

  const [skills, setskills] = useState();

  useEffect(() => {
    setskills(userData.users_skills);
    return () => {
    }
  }, [userData.users_skills]);

  return (
    <div className="profile__skills element">
      <h3 className="profile__skills__title">Mes compétences</h3>
      <ul className="profile__skills__checkbox ks-cboxtags">
        { skills?.map( ({id, label}) =>
          // ?. check si c'est pas null et si oui; fait le reste après le map
          <li key={id}>
            <input type="checkbox" id={id} checked readOnly />
            <label htmlFor={id}>{label}</label>
          </li>

          )
        }
      </ul>
    </div>
  );
}

// == Export
export default ProfileCompetencies;
