import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, Redirect } from 'react-router-dom';

import './style.scss';

function SignIn ({
  signInEmail,
  signInPassword,
  onChangeSignInInputEmailValue,
  onChangeSignInInputPasswordValue,
  onFormSignInSubmit,
}) {
  const history = useHistory();
  const onChangeSignInEmail = (event) => {
    onChangeSignInInputEmailValue(event.target.value);
  };
  const onChangeSignInPassword = (event) => {
    onChangeSignInInputPasswordValue(event.target.value);
  };
  const onSignInSubmit = (event) => {
    event.preventDefault();
    onFormSignInSubmit(history);
  };

  
  return(
    <div className='signin__component'>
    <h1 className='signin__title'>J'ai déjà un compte</h1>
        <form
          className="signin__form"
        >
          <input
            className="signin__input"
            value={signInEmail}
            onChange={onChangeSignInEmail}
            placeholder="Adresse email"
          />
          <input
            className="signin__input"
            value={signInPassword}
            onChange={onChangeSignInPassword}
            type="password"
            placeholder="Mot de passe"
          />
          {/* {isError && <p className="signin__error">Erreur de connexion</p>} */}
            <button
              className="signin__send"
              onClick={onSignInSubmit}
            >
              Se connecter
            </button>
        </form>
    </div>
  )
}


SignIn.propTypes = {
  // emailValue: PropTypes.string.isRequired,
  // passwordValue: PropTypes.string.isRequired,
  // onEmailChange: PropTypes.func.isRequired,
  // onPasswordChange: PropTypes.func.isRequired,
  // onSignInSubmit: PropTypes.func.isRequired,
};

export default SignIn;
