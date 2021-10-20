import { connect } from "react-redux";
import { getSearchProject, changeProjectValue, getAllProjects, getAllUsers } from "src/actions";

import SearchProjectsResults from "src/components/SearchProjectsResults";

const mapStateToProps = (state) => ({
  projects: state.search.projects,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchProjects: (value) => {
    const action = changeProjectValue(value);
    dispatch(action);
  },
  submitSearchProjects: (value) => {
    const action = getSearchProject(value);
    dispatch(action);
  },
  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },
  getUsers: () => {
    const action = getAllUsers();
    dispatch(action);
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProjectsResults);
