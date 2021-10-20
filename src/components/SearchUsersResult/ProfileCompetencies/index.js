// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
import "./style.scss";

// == Composant
function ProfileCompetencies({ userskills }) {

  console.log ("skills :", userskills)

  // const [skills, setskills] = useState();

  // useEffect(() => {
  //   setskills(userskills);
  //   return () => {
  //   }
  // }, [userskills]);

  return (
    <div className="profile__skills element">
      <h3 className="profile__skills__title">Mes compétences</h3>
      <ul className="profile__skills__checkbox ks-cboxtags">
        {userskills ? 
          userskills.map((userskill) =>
          <li key={userskill.id}>
            <input type="checkbox" id={userskill.id} checked readOnly />
            <label htmlFor={userskill.id}>{userskill.label}</label>
          </li>) : null }
      </ul>
    </div>
  );
}

// == Export
export default ProfileCompetencies;
