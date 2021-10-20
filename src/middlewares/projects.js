import axios from "axios";
import instance from "./utils/instance";

import {
  GET_ALL_PROJECTS,
  GET_ALL_PROJECTS_SEARCH,
  saveAllProjects,
  saveProjects,
  saveAllProjectsSearch,
  GET_SEARCH_PROJECT,
  PROJECT_SUBMIT,
  ADD_PROJECT_TO_PARTICIPATIONS,
  DELETE_PROJECT_FROM_PARTICIPATIONS,
  DELETE_PROJECT_FROM_CREATIONS,
  MODIFY_PROJECT
} from "src/actions";
import { FINALIZE_PROJECT } from "../actions";

const projects = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS: {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://devolution-api.herokuapp.com/api/v1/projects"
          );
          const actionSaveProjects = saveAllProjects(response.data);
          store.dispatch(actionSaveProjects);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      break;
    }
    case GET_ALL_PROJECTS_SEARCH: {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://devolution-api.herokuapp.com/api/v1/projects"
          );
          const actionSaveProjectsSearch = saveAllProjectsSearch(response.data);
          store.dispatch(actionSaveProjectsSearch);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      break;
    }

    case GET_SEARCH_PROJECT: {
      const { inputSearchProject } = store.getState().search;
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: `/projects/${inputSearchProject}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const actionSaveProjects = saveProjects(response.data);
          store.dispatch(actionSaveProjects);
          action.value.push("/search/projects");
        })
        .catch((error) => console.log(error));
      break;
    }

    case PROJECT_SUBMIT: {
      const {
        projectTitle,
        projectStatus,
        projectStartDate,
        projectDescription,
        projectNeeds,
        projectImage /*projectSpecificities*/,
      } = store.getState().projectform;

      const token = localStorage.getItem("token");

      instance({
        method: "POST",
        url: "/project/create",
        data: {
          name: projectTitle,
          is_available: projectStatus,
          beginning_date: projectStartDate,
          description: projectDescription,
          need_of_the_project: projectNeeds,
          icon: projectImage,
          // projectSpecificities
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // const actionSaveProjects = saveAllProjects(response.data);
          // store.dispatch(actionSaveProjects);

          action.value.push("/myProjects");
        })
        .catch((error) => console.log(error));
      break;
    }

    case ADD_PROJECT_TO_PARTICIPATIONS: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: `/project/${action.id}/addparticipant`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          action.history.push("/myParticipations");
        })
        .catch((error) => console.log(error));
      break;
    }

    case DELETE_PROJECT_FROM_PARTICIPATIONS: {
      const token = localStorage.getItem("token");

      instance({
        method: "DELETE",
        url: `/project/${action.id}/deleteparticipant`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          action.history.push("/myParticipations");
        })
        .catch((error) => console.log(error));
      break;
    }

    case DELETE_PROJECT_FROM_CREATIONS: {
      const token = localStorage.getItem("token");
      instance({
        method: "DELETE",
        url: `/project/${action.id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          action.history.push("/myProjects");
        })
        .catch((error) => console.log(error));
      break;
    }

    case MODIFY_PROJECT: {
      const {
        projectTitle,
        projectStatus,
        projectStartDate,
        projectDescription,
        projectNeeds,
        projectImage,
        /*projectSpecificities*/
      } = store.getState().projectform;

      const token = localStorage.getItem("token");

      instance({
        method: "PUT",
        url: `/project/${action.id}`,
        data :{
          name: projectTitle,
          is_available: projectStatus,
          beginning_date: projectStartDate,
          description: projectDescription,
          need_of_the_project: projectNeeds,
          icon: projectImage,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response);
          action.history.push("/myProjects");
        })
        .catch((error) => console.log(error));
      break;
    }

    default:
      next(action);
  }
};

export default projects;
