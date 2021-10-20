import { connect } from "react-redux";
import Charter from "src/components/Charter";

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Charter);
