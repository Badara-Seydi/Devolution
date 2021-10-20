import { connect } from 'react-redux';
import HomeProjects from 'src/components/HomeProjects';
import { getAllProjects } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
  loading: state.project.loading,
  projects:state.project.list,
  logged: state.user.logged
});

const mapDispatchToProps = (dispatch) => ({
  lastProjectsLoading: () => {
    const action = getAllProjects();
    dispatch(action)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeProjects);
