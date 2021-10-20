import { connect } from 'react-redux';
import HomeProject from 'src/components/HomeProject';
import { getAllProjects } from 'src/actions';

import { findProject } from 'src/selectors/projects';

const mapStateToProps = (state, ownProps) => ({
    project: findProject(state.project.list, Number(ownProps.match.params.id)),
    loading: state.project.loading,
    logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  lastProjectsLoading: () => {
    const action = getAllProjects();
    dispatch(action)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeProject);