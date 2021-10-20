import axios from "axios";
import instance from "./utils/instance";

import {
  SIGN_UP_SUBMIT,
  SIGN_IN_SUBMIT,
  saveUser,
  GET_PROFILE_DATA,
  LOAD_PROFILE_DATA,
  saveProfileData,
  GET_SEARCH_USER,
  GET_ALL_USERS,
  saveUsers,
  CLEAN_LOCAL_STORAGE,
  GET_ALL_SKILLS,
  setSkills,
  DELETE_SKILL,
  ADD_SKILL,
  MODIFY_PROFILE_SUBMIT,
  signUpMessage,
  GET_SKILLS_USER,
  saveUserSkills, 
} from "src/actions";

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP_SUBMIT: {
      const { firstname, lastname, pseudo, email, password, confirmPassword } =
        store.getState().login;
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        pseudo: pseudo,
        email: email,
        password: password,
        repeat_password: confirmPassword,
      };
      const createUser = async () => {
        try {
          const response = await axios.post(
            "https://devolution-api.herokuapp.com/api/v1/user/create",
            newUser
          );
          const actionMessage = signUpMessage(response.data.message);
          store.dispatch(actionMessage)
        } catch (error) {
          console.log(error);
        }
      };

      createUser();
      break;
    }

    case SIGN_IN_SUBMIT: {
      const { signInEmail, signInPassword } = store.getState().login;
      instance({
        method: "POST",
        url: "/login",
        data: {
          login: signInEmail,
          password: signInPassword,
        },
      })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);

            instance.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

            const actionSaveUser = saveUser(response.data);

            store.dispatch(actionSaveUser);
            action.value.push("/profile");
          }
        })

        .catch((error) => console.log(error));
      break;
    }

    case CLEAN_LOCAL_STORAGE: {
      localStorage.setItem("token", "");
      break;
    }

    case GET_PROFILE_DATA: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: "/me",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const dataProfile = response.data;
          const actionSaveProfileData = saveProfileData(dataProfile);
          store.dispatch(actionSaveProfileData);
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_ALL_USERS: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: "/users",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const Users = response.data;
          const actionSaveUsers = saveUsers(Users);
          store.dispatch(actionSaveUsers);
        })
        .catch((error) => console.log(error));
      break;
    }

    case MODIFY_PROFILE_SUBMIT: {
      const {
        profileSubtitle,
        profileStatus,
        profileFirstname,
        profileLastname,
        profilePhone,
        profileEmail,
        profileCity,
        profileBehance,
        profileLinkedIn,
        profileGitHub,
        profileBio,
        profilePortfolio,
        profileImage,
        // profilePassword,
        // profileNewPassword,
        // profileNewPasswordConfirm,
        dataUser,
      } = store.getState().user;

      const token = localStorage.getItem("token");

      instance({
        method: "PUT",
        url: `/user/${dataUser.id}`,
        data: {
          email: profileEmail,
          // password: profileNewPassword,
          image_url : profileImage,
          description: profileBio,
          user_status: profileStatus,
          user_function: profileSubtitle,
          lastname: profileLastname,
          firstname: profileFirstname,
          phone: profilePhone,
          city: profileCity,
          linkedin: profileLinkedIn,
          portfolio: profilePortfolio,
          github: profileGitHub,
          twitter: profileBehance,
          // facebook :
          // experience :
        },

        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          action.value.push("/profile");
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_SEARCH_USER: {
      const { inputSearchUser } = store.getState().search;
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: `/users/${inputSearchUser}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const Users = response.data;
          const actionSaveUserData = saveUsers(Users);
          store.dispatch(actionSaveUserData);
          action.value.push("/search/users");
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_SKILLS_USER: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: `/user/${action.value}/skills`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const userSkills = response.data.users_skills;
          console.log("User Skills dans le MW", userSkills)
          
          const actionSaveUserSkills = saveUserSkills(userSkills);
          store.dispatch(actionSaveUserSkills);
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_ALL_SKILLS: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: `/skills`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const allSkills = response.data;
          console.log("allSkills : ", allSkills);
          const actionGetSkills = setSkills(allSkills);
          store.dispatch(actionGetSkills);
        })
        .catch((error) => console.log(error));
      break;
    }

    case DELETE_SKILL: {
      const token = localStorage.getItem("token");
      instance({
        method: "DELETE",
        url: `/skill/${action.id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const res = response.data;
          console.log("response : ", res);
        })
        .catch((error) => console.log(error));
      break;
    }

    case ADD_SKILL: {
      const token = localStorage.getItem("token");
      instance({
        method: "POST",
        url: `/skill/${action.id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const res = response.data;
          console.log("response : ", res);
        })
        .catch((error) => console.log(error));
      break;
    }

    default:
      next(action);
  }
};

export default users;
