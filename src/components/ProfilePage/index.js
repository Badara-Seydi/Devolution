/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from 'react-router-dom';

// Composants
import Menu from "src/components/Menu";
import ProfileStatus from "./ProfileStatus";
import ProfileContact from "./ProfileContact";
import ProfileCityLinks from "./ProfileCityLinks";
import ProfileCompetencies from "./ProfileCompetencies";
import ProfileBio from "./ProfileBio";
import ProfilePortfolio from "./ProfilePortfolio";

// Style
import "./style.scss";

// == Composant
function ProfilePage({ profileData, userData, logged }) {
  useEffect(profileData, []);
  const { firstname, user_function } = userData;

  return (
    <div className={`profile__page ${ logged ? 'islog' : '' }`}>

      <div className="profile__component">
        <div className="profile__greeting">
          <div>
            <h1 className="profile__title">Hello, { firstname } !</h1>
            <h2 className="profile__undertitle">{ user_function }</h2>
          </div>

          <img className="profile__picture" src="https://i.ibb.co/vwbw2TF/User-Icon-Flat-Isolated-on-White-Background-User-Symbol-Vector-Illustration.jpg" alt="Profile picture" />
        </div>

        <ProfileStatus userData={userData} />

        <ProfileContact userData={userData} />

        <ProfileCityLinks userData={userData} />

        <ProfileCompetencies userData={userData} />

        <ProfileBio userData={userData} />

        <ProfilePortfolio userData={userData} />

        <div className="profile__buttons">
            <Link to='/modifyprofile'>
              <button
                className="profile__modify"
                type="submit"
              >
                Modifier mon profil
              </button>
            </Link>

            <Link to=''>
              <button
                className="profile__delete"
                type="submit"
              >
                Supprimer mon profil
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

// == Export
export default ProfilePage;
