// ACTION TYPES
// --- Sign Up
export const CHANGE_FIRSTNAME_VALUE = "CHANGE_FIRSTNAME_VALUE";
export const CHANGE_LASTNAME_VALUE = "CHANGE_LASTNAME_VALUE";
export const CHANGE_USERNAME_VALUE = "CHANGE_USERNAME_VALUE";
export const CHANGE_EMAIL_VALUE = "CHANGE_EMAIL_VALUE";
export const CHANGE_PASSWORD_VALUE = "CHANGE_PASSWORD_VALUE";
export const CHANGE_PASSWORD_CONFIRM_VALUE = "CHANGE_PASSWORD_CONFIRM_VALUE";
export const SIGN_UP_SUBMIT = "SIGN_UP_SUBMIT";
export const SIGN_UP_MESSAGE = "SIGN_UP_MESSAGE";

// --- Sign In
export const CHANGE_SIGN_IN_EMAIL_VALUE = "CHANGE_SIGN_IN_EMAIL_VALUE";
export const CHANGE_SIGN_IN_PASSWORD_VALUE = "CHANGE_SIGN_IN_PASSWORD_VALUE";
export const SIGN_IN_SUBMIT = "SIGN_IN_SUBMIT";
export const SAVE_USER = "SAVE_USER";
export const LOGOUT = "LOGOUT";
export const CLEAN_LOCAL_STORAGE = "CLEAN_LOCAL_STORAGE";
export const CLEAN_LOGIN_FORM = "CLEAN_LOGIN_FORM";

// -- Projects
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
export const GET_ALL_PROJECTS_SEARCH = "GET_ALL_PROJECTS_SEARCH";
export const SAVE_ALL_PROJECTS = "SAVE_ALL_PROJECTS";
export const SAVE_ALL_PROJECTS_SEARCH = "SAVE_ALL_PROJECTS_SEARCH";
export const SAVE_PROJECTS = "SAVE_PROJECTS";
export const ADD_PROJECT_TO_PARTICIPATIONS = "ADD_PROJECT_TO_PARTICIPATIONS";
export const DELETE_PROJECT_FROM_PARTICIPATIONS = "DELETE_PROJECT_FROM_PARTICIPATIONS";
export const DELETE_PROJECT_FROM_CREATIONS = "DELETE_PROJECT_FROM_CREATIONS";
export const MODIFY_PROJECT = "MODIFY_PROJECT";
export const SAVE_ONE_PROJECT = "SAVE_ONE_PROJECT";
export const EMPTY_PROJECT_FORM = "EMPTY_PROJECT_FORM";

// -- Users
export const GET_SKILLS_USER = "GET_SKILLS_USER";
export const SAVE_USER_SKILLS = "SAVE_USER_SKILLS";

// --- ProfilePage
export const GET_PROFILE_DATA = "GET_PROFILE_DATA";
export const SAVE_PROFILE_DATA = "SAVE_PROFILE_DATA";
export const GET_ALL_SKILLS = "GET_ALL_SKILLS";
export const SET_SKILLS = "SET_SKILLS";
export const DELETE_SKILL = "DELETE_SKILL";
export const ADD_SKILL = "ADD_SKILL";

// --- SearchPage
export const CHANGE_PROJECT_VALUE = "CHANGE_PROJECT_VALUE";
export const CHANGE_USER_VALUE = "CHANGE_USER_VALUE";
export const GET_SEARCH_PROJECT = "GET_SEARCH_PROJECT";
export const GET_SEARCH_USER = "GET_SEARCH_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const SAVE_ALL_USERS = "SAVE_ALL_USERS";

// --- New Project
export const PROJECT_SUBMIT = "PROJECT_SUBMIT";
export const CHANGE_PROJECT_TITLE = "CHANGE_PROJECT_TITLE";
export const CHANGE_PROJECT_STATUS = "CHANGE_PROJECT_STATUS";
export const CHANGE_PROJECT_START_DATE = "CHANGE_PROJECT_START_DATE";
export const CHANGE_PROJECT_DESCRIPTION = "CHANGE_PROJECT_DESCRIPTION";
export const CHANGE_PROJECT_NEEDS = "CHANGE_PROJECT_NEEDS";
export const CHANGE_PROJECT_SPECIFICITIES = "CHANGE_PROJECT_SPECIFICITIES";
export const CHANGE_PROJECT_IMAGE = "CHANGE_PROJECT_IMAGE";

export const MODIFY_PROFILE_SUBMIT = "MODIFY_PROFILE_SUBMIT";
export const CHANGE_PROFILE_SUBTITLE = "CHANGE_PROFILE_SUBTITLE";
export const CHANGE_PROFILE_STATUS = "CHANGE_PROFILE_STATUS";
export const CHANGE_PROFILE_FIRSTNAME = "CHANGE_PROFILE_FIRSTNAME";
export const CHANGE_PROFILE_LASTNAME = "CHANGE_PROFILE_LASTNAME";
export const CHANGE_PROFILE_PHONE = "CHANGE_PROFILE_PHONE";
export const CHANGE_PROFILE_EMAIL = "CHANGE_PROFILE_EMAIL";
export const CHANGE_PROFILE_CITY = "CHANGE_PROFILE_CITY";
export const CHANGE_PROFILE_DRIBBBLE = "CHANGE_PROFILE_DRIBBBLE";
export const CHANGE_PROFILE_LINKEDIN = "CHANGE_PROFILE_LINKEDIN";
export const CHANGE_PROFILE_GITHUB = "CHANGE_PROFILE_GITHUB";
export const CHANGE_PROFILE_BIO = "CHANGE_PROFILE_BIO";
export const CHANGE_PROFILE_PORTFOLIO = "CHANGE_PROFILE_PORTFOLIO";
export const CHANGE_PROFILE_PASSWORD = "CHANGE_PROFILE_PASSWORD";
export const CHANGE_PROFILE_NEW_PASSWORD = "CHANGE_PROFILE_NEW_PASSWORD";
export const CHANGE_PROFILE_NEW_PASSWORD_CONFIRM =
  "CHANGE_PROFILE_NEW_PASSWORD_CONFIRM";

// ACTION CREATORS
// --- Sign Up
export const changeFirstnameValue = (value) => ({
  type: CHANGE_FIRSTNAME_VALUE,
  value,
});

export const changeLastnameValue = (value) => ({
  type: CHANGE_LASTNAME_VALUE,
  value,
});

export const changeUsernameValue = (value) => ({
  type: CHANGE_USERNAME_VALUE,
  value,
});

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value,
});

export const changePasswordValue = (value) => ({
  type: CHANGE_PASSWORD_VALUE,
  value,
});

export const changePasswordConfirmValue = (value) => ({
  type: CHANGE_PASSWORD_CONFIRM_VALUE,
  value,
});

export const signUpSubmit = () => ({
  type: SIGN_UP_SUBMIT,
});

export const signUpMessage = (value) => ({
  type: SIGN_UP_MESSAGE,
  value,
});

// --- Sign In
export const changeSignInEmailValue = (value) => ({
  type: CHANGE_SIGN_IN_EMAIL_VALUE,
  value,
});

export const changeSignInPasswordValue = (value) => ({
  type: CHANGE_SIGN_IN_PASSWORD_VALUE,
  value,
});

export const signInSubmit = (value) => ({
  type: SIGN_IN_SUBMIT,
  value,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const cleanLocalStorage = () => ({
  type: CLEAN_LOCAL_STORAGE,
});

export const cleanLoginForm =() => ({
  type : CLEAN_LOGIN_FORM,
})
// --- Projects
export const getAllProjects = () => ({
  type: GET_ALL_PROJECTS,
});

export const getAllProjectsSearch = () => ({
  type: GET_ALL_PROJECTS_SEARCH,
});

export const saveAllProjects = (projects) => ({
  type: SAVE_ALL_PROJECTS,
  projects,
});

export const saveAllProjectsSearch = (projects) => ({
  type: SAVE_ALL_PROJECTS_SEARCH,
  projects,
});

export const saveProjects = (projects) => ({
  type: SAVE_PROJECTS,
  projects,
});

export const addProjectToParticipations = (id, history) => ({
  type: ADD_PROJECT_TO_PARTICIPATIONS,
  id,
  history,
});

export const deleteProjectFromParticipations = (id, history) => ({
  type: DELETE_PROJECT_FROM_PARTICIPATIONS,
  id,
  history,
});

export const deleteProjectFromCreations = (id, history) => ({
  type: DELETE_PROJECT_FROM_CREATIONS,
  id,
  history,
});

export const modifyProject = (id, history) => ({
  type: MODIFY_PROJECT,
  id,
  history,
});

export const saveOneProject = (project) => ({
  type: SAVE_ONE_PROJECT,
  project,
});


// --- User
export const getSkillsUser = (value) => ({
  type: GET_SKILLS_USER,
  value,
});

export const saveUserSkills = (userSkills) => ({
  type: SAVE_USER_SKILLS,
  userSkills,
});

// --- ProfilePage

export const getProfileData = () => ({
  type: GET_PROFILE_DATA,
});

export const saveProfileData = (dataProfile) => ({
  type: SAVE_PROFILE_DATA,
  dataProfile,
});

export const getAllSkills = () => ({
  type: GET_ALL_SKILLS,
});
export const setSkills = (value) => ({
  type: SET_SKILLS,
  value,
});
export const deleteSkill = (id) => ({
  type: DELETE_SKILL,
  id,
});
export const addSkill = (id) => ({
  type: ADD_SKILL,
  id,
});

// --- SearchPage
export const changeProjectValue = (value) => ({
  type: CHANGE_PROJECT_VALUE,
  value,
});

export const changeUserValue = (value) => ({
  type: CHANGE_USER_VALUE,
  value,
});

export const getSearchProject = (value) => ({
  type: GET_SEARCH_PROJECT,
  value,
});

export const getSearchUser = (value) => ({
  type: GET_SEARCH_USER,
  value,
});

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_ALL_USERS,
  users,
});

// --- Create a new project

export const projectSubmit = (value) => ({
  type: PROJECT_SUBMIT,
  value,
});

export const changeProjectTitle = (value) => ({
  type: CHANGE_PROJECT_TITLE,
  value,
});

export const changeProjectStatus = (value) => ({
  type: CHANGE_PROJECT_STATUS,
  value,
});

export const changeProjectStartDate = (value) => ({
  type: CHANGE_PROJECT_START_DATE,
  value,
});

export const changeProjectDescription = (value) => ({
  type: CHANGE_PROJECT_DESCRIPTION,
  value,
});

export const changeProjectNeeds = (value) => ({
  type: CHANGE_PROJECT_NEEDS,
  value,
});

// export const changeProjectSpecificities = (value) => ({
//   type: CHANGE_PROJECT_SPECIFICITIES,
//   value,
// });

export const changeProjectImage = (value) => ({
  type: CHANGE_PROJECT_IMAGE,
  value,
});

export const emptyProjectForm = () => ({
  type: EMPTY_PROJECT_FORM,
});

// --- Modify an existing User

export const modifyProfileSubmit = (value) => ({
  type: MODIFY_PROFILE_SUBMIT,
  value,
});
export const changeProfileSubtitle = (value) => ({
  type: CHANGE_PROFILE_SUBTITLE,
  value,
});
export const changeProfileStatus = (value) => ({
  type: CHANGE_PROFILE_STATUS,
  value,
});
export const changeProfileFirstname = (value) => ({
  type: CHANGE_PROFILE_FIRSTNAME,
  value,
});
export const changeProfileLastname = (value) => ({
  type: CHANGE_PROFILE_LASTNAME,
  value,
});
export const changeProfilePhone = (value) => ({
  type: CHANGE_PROFILE_PHONE,
  value,
});
export const changeProfileEmail = (value) => ({
  type: CHANGE_PROFILE_EMAIL,
  value,
});
export const changeProfileCity = (value) => ({
  type: CHANGE_PROFILE_CITY,
  value,
});
export const changeProfileBehance = (value) => ({
  type: CHANGE_PROFILE_DRIBBBLE,
  value,
});
export const changeProfileLinkedIn = (value) => ({
  type: CHANGE_PROFILE_LINKEDIN,
  value,
});
export const changeProfileGitHub = (value) => ({
  type: CHANGE_PROFILE_GITHUB,
  value,
});
export const changeProfileBio = (value) => ({
  type: CHANGE_PROFILE_BIO,
  value,
});
export const changeProfilePortfolio = (value) => ({
  type: CHANGE_PROFILE_PORTFOLIO,
  value,
});
export const changeProfilePassword = (value) => ({
  type: CHANGE_PROFILE_PASSWORD,
  value,
});
export const changeProfileNewPassword = (value) => ({
  type: CHANGE_PROFILE_NEW_PASSWORD,
  value,
});
export const changeProfileNewPasswordConfirm = (value) => ({
  type: CHANGE_PROFILE_NEW_PASSWORD_CONFIRM,
  value,
});
