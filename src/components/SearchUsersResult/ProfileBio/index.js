/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
// import './style.scss';

// == Composant
function ProfileBio({bio}) {
  return (

      <div className="profile__bio element">
        <h3 className="profile__category-title">Ma bio</h3>
        <p className="profile__description">{bio}</p>
      </div>

  );
}

// == Export
export default ProfileBio;
