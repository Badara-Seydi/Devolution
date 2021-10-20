import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function CardUser({pseudo, user_function, image_url, user_status}) {

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
    return null;
  }
}

  return (
    <div className="cardUser">
      <p className="cardUser__name">{pseudo}</p>
      <p className="cardUser__undertitle">{user_function}</p>
      <img className="cardUser__picture" src={image_url} alt="Profile picture" />
      <div className="cardUser__status">
      <p>{UserStatus(user_status)} {user_status}</p>
      </div>
    </div>
  )
}

CardUser.propTypes = {
  // name: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
}

export default CardUser;

