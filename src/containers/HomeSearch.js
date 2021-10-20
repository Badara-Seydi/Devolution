import { connect } from "react-redux";
import HomeSearch from "src/components/HomeSearch";
import { getAllProjects } from "src/actions";

const mapStateToProps = (state) => ({
    projects: state.project.list,
    loading: state.project.loading,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({

  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearch);
