/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
// import './style.scss';

// == Composant
function ProfileStatus({status}) {

  function UserStatus (status) {
    if (status === "Disponible") {
      return <span className="cardUser__status-available">●</span>;
    }
    else if (status === "Bientôt disponible") {
      return <span className="cardUser__status-soonavailable">●</span>;
    }
    else if (status === "Non disponible") {
      return <span className="cardUser__status-notavailable">●</span>;
    }
    else  {
      return <span>Cet utilisateur n'a pas indiqué de disponibilité.</span>;
    }
  }

  return (
      <div className="profile__status element">
        <p className="profile__status-indicator">{UserStatus(status)} {status}</p>
      </div>
  );
}

// == Export
export default ProfileStatus;
