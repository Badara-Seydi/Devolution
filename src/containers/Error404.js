import { connect } from "react-redux";
import Error404 from "src/components/Error404";

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Error404);
