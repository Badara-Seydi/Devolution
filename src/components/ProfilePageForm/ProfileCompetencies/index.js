/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import skillsdata from './fakedata';
// Style
import "./style.scss";

// == Composant
function ProfileCompetencies({ userData, skills, handleDeleteSkill, handleAddSkill }) {

  const [userSkills, setUserSkills] = useState(userData.users_skills);
  const [allSkills, setAllSkills] = useState(skills.skills);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    return () => {
    }
  }, [userData.users_skills]);

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // AJOUTER UNE COMPETENCE
      handleAddSkill(e.target.id)
    } else {
      // ENLEVER UNE COMPETENCE
      handleDeleteSkill(e.target.id)
    }
  }

  const handleChange = () => {
    setChecked(!checked);
  };


  function checkCheckbox(id) {
    if (userSkills) {
      for (let i = 0; i < userSkills.length; i++) {
        const element = userSkills[i];
        if (element.id === id) {
          return 'checked';
        }
      }
    }
    return '';
  }

  return (
    <div className="profile__skills element">
      <h3 className="profile__skills__title">Mes compétences</h3>
      <ul className="profile__skills__checkbox ks-cboxtags">
        { allSkills.map( ({id, label}) =>

          <li key={id}>
            <input type="checkbox"
              id={id}
              onClick={handleCheckbox}
              defaultChecked={`${checkCheckbox(id)}`}
              onChange={handleChange}
            />
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
