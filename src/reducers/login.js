import {
  CHANGE_FIRSTNAME_VALUE,
  CHANGE_LASTNAME_VALUE,
  CHANGE_USERNAME_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_PASSWORD_CONFIRM_VALUE,
  CHANGE_SIGN_IN_EMAIL_VALUE,
  CHANGE_SIGN_IN_PASSWORD_VALUE, 
  SIGN_UP_MESSAGE,
  CLEAN_LOGIN_FORM,
} from 'src/actions';

// les valeurs par défaut sont stockées dans le state initial
const initialState = {
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword:'',
  signInEmail:'',
  signInPassword:'',
  signUpMessage:''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIRSTNAME_VALUE: {
      return {
        ...state,
        firstname: action.value,
      };
    }
    case CHANGE_LASTNAME_VALUE: {
      return {
        ...state,
        lastname: action.value,
      };
    }
    case CHANGE_USERNAME_VALUE: {
      return {
        ...state,
        pseudo: action.value,
      };
    }
    case CHANGE_EMAIL_VALUE: {
      return {
        ...state,
        email: action.value,
      };
    }
    case CHANGE_PASSWORD_VALUE: {
      return {
        ...state,
        password: action.value,
      };
    }
    case CHANGE_PASSWORD_CONFIRM_VALUE: {
      return {
        ...state,
        confirmPassword: action.value,
      };
    }
    case CHANGE_SIGN_IN_EMAIL_VALUE: {
      return {
        ...state,
        signInEmail:action.value
      };
    }
    case CHANGE_SIGN_IN_PASSWORD_VALUE: {
      return {
        ...state,
        signInPassword:action.value
      };
    }

    case SIGN_UP_MESSAGE: {
      return {
        ...state,
        signUpMessage:action.value
      };
    }

    case CLEAN_LOGIN_FORM: {
      return {
        ...state,
        firstname: '',
        lastname: '',
        pseudo: '',
        email: '',
        password: '',
        confirmPassword:'',
        signInEmail:'',
        signInPassword:'',
        signUpMessage:''
      };
    }

    default:
      return state;
  }
};

export default reducer;
