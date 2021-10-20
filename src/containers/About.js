import { connect } from "react-redux";
import About from "src/components/About";

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
