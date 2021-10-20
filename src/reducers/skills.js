import { SET_SKILLS, SAVE_USER_SKILLS } from "src/actions";

export const initialState = {
    skills: [],
    userSkills: [],
};

const skillsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SKILLS:{
            return {
                ...state,
                skills: action.value
            };
        }
        case SAVE_USER_SKILLS: {
        return {
            ...state,
            userSkills: action.userSkills
            };
        }
        default:
            return state;
    }
};

export default skillsReducer;
