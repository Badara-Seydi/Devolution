/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Icons
import { AiOutlineUser } from 'react-icons/ai';
import { FiMail, FiPhone } from 'react-icons/fi';
// Style
// import "./style.scss";


// == Composant
function ProfileContact({firstname, lastname, email, phone}) {
  return (
    <div className="profile__contact-info element">

      <p className="profile__name"> <AiOutlineUser /> {firstname} {lastname}  </p>
      <p className="profile__email"> <FiMail /> {email} </p>
      <p className="profile__phone"> <FiPhone />{phone}</p>

    </div>
  );
}

// == Export
export default ProfileContact;
