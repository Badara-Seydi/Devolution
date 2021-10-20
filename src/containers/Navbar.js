import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
import {logout, cleanLocalStorage, cleanLoginForm} from 'src/actions'

const mapStateToProps = (state) => ({
    logged: state.user.logged
});

const mapDispatchToProps = (dispatch) => ({
    setLogout: () => {
        const action = logout();
        dispatch(action);
    },
    cleanLs: () => {
        const action = cleanLocalStorage();
        dispatch(action);
    },

    cleanLogin: () => {
        const action = cleanLoginForm();
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
