/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from 'react-router-dom';

// Composants
import CardUser from "src/components/CardUser";

// Icons
import { FiSearch } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchUsersResults({ users, changeSearchUsers, submitSearchUsers, logged, getSkills }) {

  const history = useHistory();

  const getSkillsWithId = () => {
    getSkills(user.id)
  };

  const onChangeSearchUsers = (event) => {
    event.preventDefault()
    changeSearchUsers(event.target.value)
  };

  const onSubmitSearchUsers = (event) => {
    event.preventDefault()
    submitSearchUsers(history)
  };

  return (
    <div className={`search__page ${logged ? 'islog' : ''}`}>

      <div className="search__subpage">

        <div className="search-details__container">

            <form className="search-details__form">
              <input
                className="search-details__input"
                onChange={onChangeSearchUsers}
              />
              <button className="search-details__button" type="submit" onClick={onSubmitSearchUsers}>
                <FiSearch size="25px"/>
              </button>
            </form>

            <p className="search-details__number-results"> {users.length} résultats </p>

            <div className="search-details__results">
              {users.map((user)=>(
                <Link key={user.id} to={`/search/users/${user.id}` }>
                <CardUser
                  key={user.id}
                  {...user}
                  onClick={getSkillsWithId}
                />
                </Link>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchUsersResults;
