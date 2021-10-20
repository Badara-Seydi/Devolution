
import {
  SAVE_ALL_PROJECTS, SAVE_ALL_USERS
} from 'src/actions';
import { EMPTY_PROJECT_FORM } from '../actions';

export const initialState = {
    list: [],
    owners: []
  };
  
  const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_ALL_PROJECTS:
        return {
          ...state,
          list: action.projects,
        };

        case SAVE_ALL_USERS: {
          return {
            ...state,
            owners: action.users,
          };
        };
        
      default:
        return state;
    }
  };
  
  export default projectReducer;
  

