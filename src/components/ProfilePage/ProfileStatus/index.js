/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
// import './style.scss';

// == Composant
function ProfileStatus({ userData }) {
  const { user_status } = userData;

  function UserStatus (user_status) {
    if (user_status === "Disponible") {
      return <span className="cardUser__status-available">●</span>;
    }
    else if (user_status === "Bientôt disponible") {
      return <span className="cardUser__status-soonavailable">●</span>;
    }
    else if (user_status === "Non disponible") {
      return <span className="cardUser__status-notavailable">●</span>;
    }
    else  {
      return <span>Oh oh, votre profil semble bien vide... Remplissez-le en cliquant sur le bouton "Modifier mon profil !"</span>;
    }
  }

  return (
      <div className="profile__status element">
        <p className="profile__status-indicator">{UserStatus(user_status)} {user_status}</p>
      </div>
  );
}

// == Export
export default ProfileStatus;
