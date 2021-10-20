import { connect } from 'react-redux';
import ProjectModify from 'src/components/ProjectModify';

import { findProject } from "src/selectors/projects";
import { 
  modifyProject, 
  changeProjectTitle, 
  changeProjectStatus, 
  changeProjectStartDate, 
  changeProjectDescription, 
  changeProjectNeeds,
  // changeProjectSpecificities, 
  changeProjectImage,
} from 'src/actions';


const mapStateToProps = (state, ownProps) => ({
  projectTitle: state.projectform.projectTitle,
  projectStatus: state.projectform.projectStatus,
  projectStartDate: state.projectform.projectStartDate,
  projectDescription: state.projectform.projectDescription,
  projectNeeds: state.projectform.projectNeeds,
  // projectSpecificities: state.projectform.projectSpecificities,
  projectImage: state.projectform.projectImage,
  userData : state.user.dataUser,
  logged: state.user.logged,
  project: findProject(state.project.list, Number(ownProps.match.params.id)),
  idProject: Number(ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  
  modifyProjectForm: (id, history) => {
    const action = modifyProject(id, history);
    dispatch(action);
  },
  changeProjectTitleValue: (value) => {
    const action = changeProjectTitle(value);
    dispatch(action);
  },
  changeProjectStatusValue: (value) => {
    const action = changeProjectStatus(value);
    dispatch(action);
  },
  changeProjectStartDateValue: (value) => {
    const action = changeProjectStartDate(value);
    dispatch(action);
  },
  changeProjectDescriptionValue: (value) => {
    const action = changeProjectDescription(value);
    dispatch(action);
  },
  changeProjectNeedsValue: (value) => {
    const action = changeProjectNeeds(value);
    dispatch(action);
  },
  // changeProjectSpecificitiesValue: () => {
  //   const action = changeProjectSpecificities();
  //   dispatch(action);
  // },

  changeProjectImageValue: (value) => {
    const action = changeProjectImage(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModify);
