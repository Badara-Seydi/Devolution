/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineBehance,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

// Style
import "./style.scss";

import { log } from "async";

// == Composant
function ProfileCityLinks({ userData }) {
  const { city, facebook, github, linkedin, twitter } = userData;
  return (
    <div className="profile__city element">
      <p className="profile__city--icon">
        <BiMap /> {city}
      </p>

      <div className="profile__links">
        {/* <Link className={`profile__link${ facebook == null ? '--off' : ''}`} to={facebook} target="_blank" alt="Facebook logo">
          <AiFillFacebook size="30px"/>
        </Link>
        <Link className={`profile__link${ twitter == null ? '--off' : ''}`} to="/profile" target="_blank" alt="Twitter logo">
          <AiFillTwitterCircle size="30px" />
        </Link> */}
        <a
          className={`profile__link${github == null ? "--off" : ""}`}
          href={github}
          target="_blank"
          alt="Github logo"
        >
          <AiFillGithub size="30px" />
        </a>
        <a
          className={`profile__link${twitter == null ? "--off" : ""}`}
          href={twitter}
          target="_blank"
          alt="Behance logo"
        >
          <AiOutlineBehance size="30px" />
        </a>
        <a
          className={`profile__link${linkedin == null ? "--off" : ""}`}
          href={linkedin}
          target="_blank"
          alt="Linkedin logo"
        >
          <AiFillLinkedin size="30px" />
        </a>
      </div>
    </div>
  );
}

// == Export
export default ProfileCityLinks;
