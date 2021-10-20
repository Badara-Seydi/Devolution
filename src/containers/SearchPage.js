import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { changeProjectValue, changeUserValue, getSearchProject, getSearchUser, getAllProjectsSearch, getAllUsers } from 'src/actions';

const mapStateToProps = (state) => ({

    loading: state.project.loading,
    logged: state.user.logged,

});

const mapDispatchToProps = (dispatch) => ({
    changeInputProjectValue: (value) => {
        const action = changeProjectValue(value);
        dispatch(action);
    },
    changeInputUserValue: (value) => {
        const action = changeUserValue(value);
        dispatch(action);
    },
    searchProjectSubmit: (value) => {
        const action = getSearchProject(value);
        dispatch(action);
    },
    searchUserSubmit: (value) => {
        const action = getSearchUser(value);
        dispatch(action);
    },
    searchAllProjectsSubmit: () => {
        const action = getAllProjectsSearch();
        dispatch(action);
    },
    searchAllUsersSubmit: () => {
        const action = getAllUsers();
        dispatch(action);
    },


});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);