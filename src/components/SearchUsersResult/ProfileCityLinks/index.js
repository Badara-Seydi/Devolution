/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Icons
import { AiFillGithub, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

// Style
import "./style.scss";

// == Composant
function ProfileCityLinks({city}) {
  return (
    <div className="profile__city-links element">

      <p className="profile__city"> <BiMap/> {city} </p>

      <div className="profile__links">
        
      <a className="profile__behance" alt="Behance Link">
      <AiFillBehanceCircle size="30px"/> 
      </a>

      <a className="profile__linkedin" alt="LinkedIn Link">
      <AiFillLinkedin size="30px"/>
      </a>

      <a className="profile__github" alt="GitHub Link">
      <AiFillGithub size="30px"/>
      </a>

      </div>

    </div>
  );
}

// == Export
export default ProfileCityLinks;
