import { connect } from "react-redux";
import HomeDevolution from "src/components/HomeDevolution";
import { changeProjectValue, getSearchProject } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputHome: (value) => {
    const action = changeProjectValue(value);
    dispatch(action);
  },
  submitHomeInput: (value) => {
    const action = getSearchProject(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDevolution);
