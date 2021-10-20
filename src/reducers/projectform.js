import {
  CHANGE_PROJECT_TITLE,
  CHANGE_PROJECT_STATUS,
  CHANGE_PROJECT_START_DATE,
  CHANGE_PROJECT_DESCRIPTION,
  CHANGE_PROJECT_NEEDS,
  // CHANGE_PROJECT_SPECIFICITIES,
  CHANGE_PROJECT_IMAGE,
  SAVE_ONE_PROJECT,
  EMPTY_PROJECT_FORM,
} from 'src/actions';

const initialState = {
  projectTitle: '',
  projectStatus: true,
  projectStartDate: '',
  projectDescription: '',
  projectNeeds: '',
  // projectSpecificities:'',
  projectImage:''
};


const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case CHANGE_PROJECT_TITLE: {
      return {
        ...state,
        projectTitle: action.value,
      };
    }
    case CHANGE_PROJECT_STATUS: {
      return {
        ...state,
        projectStatus: action.value,
      };
    }
    case CHANGE_PROJECT_START_DATE: {
      return {
        ...state,
        projectStartDate: action.value,
      };
    }
    case CHANGE_PROJECT_DESCRIPTION: {
      return {
        ...state,
        projectDescription: action.value,
      };
    }
    case CHANGE_PROJECT_NEEDS: {
      return {
        ...state,
        projectNeeds: action.value,
      };
    }
    // case CHANGE_PROJECT_SPECIFICITIES: {
    //   return {
    //     ...state,
    //     projectSpecificities: action.value,
    //   };
    // }
    case CHANGE_PROJECT_IMAGE: {
      return {
        ...state,
        projectImage: action.value,
      };
    }

    case SAVE_ONE_PROJECT: {
      return {
        ...state,
        projectTitle: action.project.name,
        projectStatus: action.project.is_available,
        projectStartDate: action.project.beginning_date,
        projectDescription: action.project.description,
        projectNeeds: action.project.need_of_the_project,
        // projectSpecificities:'',
        projectImage: action.project.icon,
      };
    }

    case EMPTY_PROJECT_FORM: {
      return {
        ...state,
        projectTitle: '',
        projectStatus: '',
        projectStartDate: '',
        projectDescription: '',
        projectNeeds: '',
        // projectSpecificities:'',
        projectImage: '',
      };
    };

    default:
      return state;
  }
};

export default reducer;
