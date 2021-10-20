import { connect } from "react-redux";

import SearchUsersResults from "src/components/SearchUsersResults";

import { changeUserValue, getSearchUser } from "src/actions";

const mapStateToProps = (state) => ({
  users: state.search.users,
  logged: state.user.logged,
  userSkills: state.skills.userSkills
});

const mapDispatchToProps = (dispatch) => ({
    changeSearchUsers: (value) => {
    const action = changeUserValue(value);
    dispatch(action);
  },
  submitSearchUsers: (value) => {
    const action = getSearchUser(value);
    dispatch(action);
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersResults);
