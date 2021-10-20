import { connect } from 'react-redux';
import BoardPageParticipant from 'src/components/BoardPageParticipant';
import { getProfileData, getAllProjects } from 'src/actions';

const mapStateToProps = (state) => ({
  projects: state.user.dataUser.participated_projects,
  loading: state.user.loading,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileData: () => {
    // const action = getProfileData()
    dispatch(getProfileData())
  },

  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageParticipant);
