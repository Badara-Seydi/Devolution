import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeFirstnameValue,
  changeLastnameValue,
  changeUsernameValue,
  changeEmailValue,
  changePasswordValue,
  changePasswordConfirmValue,
  signUpSubmit,
  signInSubmit,
  changeSignInEmailValue,
  changeSignInPasswordValue,
} from 'src/actions';

const mapStateToProps = (state, ownProps) => ({
  firstname: state.login.firstname,
  lastname: state.login.lastname,
  username: state.login.pseudo,
  email: state.login.email,
  password: state.login.password,
  confirmPassword: state.login.confirmPassword,
  signInEmail: state.login.signInEmail,
  signInPassword: state.login.signInPassword,
  logged: state.user.logged,
  message: state.login.signUpMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputFirstnameValue: (value) => {
    const action = changeFirstnameValue(value);
    dispatch(action);
  },
  changeInputLastnameValue: (value) => {
    const action = changeLastnameValue(value);
    dispatch(action);
  },
  changeInputUsernameValue: (value) => {
    const action = changeUsernameValue(value);
    dispatch(action);
  },
  changeInputEmailValue: (value) => {
    const action = changeEmailValue(value);
    dispatch(action);
  },
  changeInputPasswordValue: (value) => {
    const action = changePasswordValue(value);
    dispatch(action);
  },
  changeInputPasswordConfirmValue: (value) => {
    const action = changePasswordConfirmValue(value);
    dispatch(action);
  },
  formSignUpSubmit: () => {
    const action = signUpSubmit();
    dispatch(action);
  },
  formSignInSubmit: (value) => {
    const action = signInSubmit(value);
    dispatch(action);
  },
  changeSignInInputEmailValue: (value) => {
    const action = changeSignInEmailValue(value);
    dispatch(action);
  },
  changeSignInInputPasswordValue: (value) => {
    const action = changeSignInPasswordValue(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
