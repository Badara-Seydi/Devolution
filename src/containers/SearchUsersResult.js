import { connect } from "react-redux";
import SearchUsersResult from 'src/components/SearchUsersResult';
import { getSkillsUser } from 'src/actions';

import { findUser } from 'src/selectors/users';

const mapStateToProps = (state, ownProps) => {

  return{
    user: findUser(state.search.users, Number(ownProps.match.params.id)),
    logged: state.user.logged,
    userSkills: state.skills.userSkills
  }
};

const mapDispatchToProps = (dispatch) => ({
  getSkills: (value) => {
    console.log('étape container')
    const action = getSkillsUser(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersResult);
