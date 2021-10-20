import { connect } from 'react-redux';
import ProfilePage from 'src/components/ProfilePage';
import { getProfileData } from 'src/actions';

const mapStateToProps = (state) => ({
  userData : state.user.dataUser,
  loading: state.user.loading,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  profileData: () => {
    const action = getProfileData()
    dispatch(action)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
