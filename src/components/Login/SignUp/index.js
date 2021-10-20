import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function SignUp({
  onChangeInputFirstnameValue,
  onChangeInputLastnameValue,
  onChangeInputUsernameValue,
  onChangeInputEmailValue,
  onChangeInputPasswordValue,
  onChangeInputPasswordConfirmValue,
  onFormSignUpSubmit,
  firstname,
  lastname,
  username,
  email,
  password,
  confirmPassword
}) {
  const onSignUpSubmit = (event) => {
    event.preventDefault();
    onFormSignUpSubmit();
  };

  const onChangeFirstname = (event) => {
    onChangeInputFirstnameValue(event.target.value);
  };
  const onChangeLastname = (event) => {
    onChangeInputLastnameValue(event.target.value);
  };
  const onChangeUsername = (event) => {
    onChangeInputUsernameValue(event.target.value);
  };
  const onChangeEmail = (event) => {
    onChangeInputEmailValue(event.target.value);
  };
  const onChangePassword = (event) => {
    onChangeInputPasswordValue(event.target.value);
  };
  const onChangePasswordConfirm = (event) => {
    onChangeInputPasswordConfirmValue(event.target.value);
  };
  return (
    <div className="signup__component">
      <h1 className="signup__title">Je crée un compte</h1>
      <form className="signup__form" onSubmit={onSignUpSubmit}>
        <input
          className="signup__input"
          value={firstname}
          onChange={onChangeFirstname}
          placeholder="Prénom"
        />
        <input
          className="signup__input"
          value={lastname}
          onChange={onChangeLastname}
          placeholder="Nom"
        />
        <input
          className="signup__input"
          value={username}
          onChange={onChangeUsername}
          placeholder="Pseudo ou nom d'association"
        />
        <input
          className="signup__input"
          value={email}
          onChange={onChangeEmail}
          placeholder="Adresse email"
        />
        <input
          className="signup__input"
          value={password}
          onChange={onChangePassword}
          type="password"
          placeholder="Mot de passe"
        />
        <input
          className="signup__input"
          value={confirmPassword}
          onChange={onChangePasswordConfirm}
          type="password"
          placeholder="Confirmer le mot de passe"
        />

        <button className="signup__send" type="submit">
          S'enregistrer
        </button>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  // onChangeInputValue: PropTypes.func.isRequired,
  // userNameValue: PropTypes.string.isRequired,
  // emailValue: PropTypes.string.isRequired,
  // passwordValue: PropTypes.string.isRequired,
  // onUserNameChange: PropTypes.string.isRequired,
  // onEmailChange: PropTypes.func.isRequired,
  // onPasswordChange: PropTypes.func.isRequired,
  // onSignUpSubmit: PropTypes.func.isRequired,
};

export default SignUp;
