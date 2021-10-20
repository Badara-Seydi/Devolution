import { connect } from "react-redux";

import ProfilePageForm from "src/components/ProfilePageForm";

import {
  modifyProfileSubmit,
  changeProfileSubtitle,
  changeProfileStatus,
  changeProfileFirstname,
  changeProfileLastname,
  changeProfilePhone,
  changeProfileEmail,
  changeProfileCity,
  changeProfileBehance,
  changeProfileLinkedIn,
  changeProfileGitHub,
  changeProfileBio,
  changeProfilePortfolio,
  changeProfilePassword,
  changeProfileNewPassword,
  changeProfileNewPasswordConfirm,
  getAllSkills,
  deleteSkill,
  addSkill
} from "src/actions";

const mapStateToProps = (state) => ({
  skills: state.skills,
  userData: state.user.dataUser,
  loading: state.user.loading,
  logged: state.user.logged,
  profileSubtitle: state.user.profileSubtitle,
  profileStatus: state.user.profileStatus,
  profileFirstname: state.user.profileFirstname,
  profileLastname: state.user.profileLastname,
  profilePhone: state.user.profilePhone,
  profileEmail: state.user.profileEmail,
  profileCity: state.user.profileCity,
  profileBehance: state.user.profileBehance,
  profileLinkedIn: state.user.profileLinkedIn,
  profileGitHub: state.user.profileGitHub,
  profileBio: state.user.profileBio,
  profilePortfolio: state.user.profilePortfolio,
  profileImage: state.user.profileImage,
  // profilePassword: state.user.profilePassword,
  // profileNewPassword: state.user.profileNewPassword,
  // profileNewPasswordConfirm: state.user.profileNewPasswordConfirm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  modifyProfileSubmitForm: (value) => {
    const action = modifyProfileSubmit(value);
    dispatch(action);
  },
  changeProfileSubtitleValue: (value) => {
    const action = changeProfileSubtitle(value);
    dispatch(action);
  },
  changeProfileStatusValue: (value) => {
    const action = changeProfileStatus(value);
    dispatch(action);
  },
  changeProfileFirstnameValue: (value) => {
    const action = changeProfileFirstname(value);
    dispatch(action);
  },
  changeProfileLastnameValue: (value) => {
    const action = changeProfileLastname(value);
    dispatch(action);
  },
  changeProfilePhoneValue: (value) => {
    const action = changeProfilePhone(value);
    dispatch(action);
  },
  changeProfileEmailValue: (value) => {
    const action = changeProfileEmail(value);
    dispatch(action);
  },
  changeProfileCityValue: (value) => {
    const action = changeProfileCity(value);
    dispatch(action);
  },
  changeProfileBehanceValue: (value) => {
    const action = changeProfileBehance(value);
    dispatch(action);
  },
  changeProfileLinkedInValue: (value) => {
    const action = changeProfileLinkedIn(value);
    dispatch(action);
  },
  changeProfileGitHubValue: (value) => {
    const action = changeProfileGitHub(value);
    dispatch(action);
  },
  changeProfileBioValue: (value) => {
    const action = changeProfileBio(value);
    dispatch(action);
  },
  changeProfilePortfolioValue: (value) => {
    const action = changeProfilePortfolio(value);
    dispatch(action);
  },
  changeProfilePasswordValue: (value) => {
    const action = changeProfilePassword(value);
    dispatch(action);
  },
  changeProfileNewPasswordValue: (value) => {
    const action = changeProfileNewPassword(value);
    dispatch(action);
  },
  changeProfileNewPasswordConfirmValue: (value) => {
    const action = changeProfileNewPasswordConfirm(value);
    dispatch(action);
  },
  allSkills: () => {
    const action = getAllSkills();
    dispatch(action);
  },
  handleDeleteSkill: (id) => {
    const action = deleteSkill(id);
    dispatch(action);
  },
  handleAddSkill: (id) => {
    const action = addSkill(id);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageForm);
