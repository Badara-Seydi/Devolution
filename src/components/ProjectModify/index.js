/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// Composants
import Menu from "src/components/Menu";

// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchProjectsResult({
  modifyProjectForm,
  changeProjectTitleValue,
  changeProjectStatusValue,
  changeProjectStartDateValue,
  changeProjectDescriptionValue,
  changeProjectNeedsValue,
  // changeProjectSpecificitiesValue,
  changeProjectImageValue,
  projectTitle,
  projectStatus,
  projectStartDate,
  projectDescription,
  projectNeeds,
  // projectSpecificities,
  userData,
  logged,
  idProject
}) {

  console.log()
  const history = useHistory();

  const onProjectModifySubmit = (event) => {
    event.preventDefault();
    modifyProjectForm(idProject, history);
  };

  const onChangeProjectTitle = (event) => {
    changeProjectTitleValue(event.target.value);
  };

  const onChangeProjectStatus = (event) => {
    changeProjectStatusValue(event.target.value);
  };

  const onChangeProjectStartDate = (event) => {
    changeProjectStartDateValue(event.target.value);
  };

  const onChangeProjectDescription = (event) => {
    changeProjectDescriptionValue(event.target.value);
  };

  const onChangeProjectNeeds = (event) => {
    changeProjectNeedsValue(event.target.value);
  };

  // const onChangeProjectSpecificities = (event) => {
  //   changeProjectSpecificitiesValue(event.target.value);
  // };

  const onClickProjectImage = (event) => {
    changeProjectImageValue(event.target.value);
  };
  
  return (
    <div className={`search__page ${logged ? 'islog' : ''}`}>
    <div className="project__page">

      <div className="project__subpage1">

        <div className="project__component">
          <form className="signup_form" onSubmit={onProjectModifySubmit}>
            <div className="project-form__header">
              <input
                className="project-form__title"
                value={projectTitle}
                onChange={onChangeProjectTitle}
              />
              <p>
                par <a className="project__bearer">{userData.pseudo}</a>
              </p>
            </div>

            <select
              className="project-form__status-indicator"
              value={projectStatus}
              onChange={onChangeProjectStatus}
              id="status"
            >
              <option value={true}>Ouvert aux participants</option>
              <option value={false}>Fermé aux participants</option>
            </select>

            <div className="project__start-date element">
              <h3 className="project-form__small-title">
                Date de début souhaitée
              </h3>
              <input
                className="project-form__start-date"
                type="date"
                id="project-start-date"
                name="project-start-date"
                value={projectStartDate}
                onChange={onChangeProjectStartDate}
              />
            </div>

            <div className="project-form__theme element">
              <h3 className="project-form__small-title">Thématique</h3>

              <div className="project-form__icons">
                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="intergeneration"
                    name="drone"
                    value="https://i.ibb.co/23gbnt6/Happy-senior-people-dancing-at-party-Cartoon-grey-haired-old-men-and-women-enjoying-music-in-club-ha.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="intergeneration">
                    {" "}
                    Intergénérationnel
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/23gbnt6/Happy-senior-people-dancing-at-party-Cartoon-grey-haired-old-men-and-women-enjoying-music-in-club-ha.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="animals"
                    name="drone"
                    value="https://i.ibb.co/GpVMrCb/Friend-walking-with-pets-meeting-and-waving-hello-Women-with-dog-and-cat-outside-flat-vector-illustr.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="animals">
                    {" "}
                    Animaux
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/GpVMrCb/Friend-walking-with-pets-meeting-and-waving-hello-Women-with-dog-and-cat-outside-flat-vector-illustr.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="hobbies"
                    name="drone"
                    value="https://i.ibb.co/vkHMF8G/Happy-tiny-people-listening-spiritual-music-near-huge-headphones-flat-vector-illustration-Young-guy.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="hobbies">
                    {" "}
                    Loisirs
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/vkHMF8G/Happy-tiny-people-listening-spiritual-music-near-huge-headphones-flat-vector-illustration-Young-guy.jpg"
                        onClick={onClickProjectImage}
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="nature"
                    name="drone"
                    value="https://i.ibb.co/DRXBPhH/Kids-planting-tree-in-city-park-Children-with-gardening-tools-working-with-green-plants-outdoors-Vec.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="nature">
                    {" "}
                    Nature
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/DRXBPhH/Kids-planting-tree-in-city-park-Children-with-gardening-tools-working-with-green-plants-outdoors-Vec.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="associative"
                    name="drone"
                    value="https://i.ibb.co/Zgr8Mg4/4293766.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="associative">
                    {" "}
                    Social
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/Zgr8Mg4/4293766.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="groceries"
                    name="drone"
                    value="https://i.ibb.co/Z6j3HX7/Net-paper-and-cotton-shopping-bags-with-grocery-isolated-on-white-background-Vector-cartoon-set-of-r.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="groceries">
                    {" "}
                    Epiceries solidaires
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/Z6j3HX7/Net-paper-and-cotton-shopping-bags-with-grocery-isolated-on-white-background-Vector-cartoon-set-of-r.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="education"
                    name="drone"
                    value="https://i.ibb.co/KLKWfGd/Young-teacher-with-joyful-kids-isolated-flat-vector-illustration-Cartoon-happy-children-in-kindergar.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="education">
                    {" "}
                    Education
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/KLKWfGd/Young-teacher-with-joyful-kids-isolated-flat-vector-illustration-Cartoon-happy-children-in-kindergar.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="environnement"
                    name="drone"
                    value="https://i.ibb.co/894PVRV/59870.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="environnement">
                    {" "}
                    Environnement
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/894PVRV/59870.jpg"
                      />
                    </div>
                  </label>
                </div>

                <div className="project-form__icon-card">
                  <input
                    type="radio"
                    id="sports"
                    name="drone"
                    value="https://i.ibb.co/SRgJpCQ/School-sports-team-abstract-concept-vector-illustration-School-children-club-competitive-team-sports.jpg"
                    onClick={onClickProjectImage}
                  />
                  <label htmlFor="sports">
                    {" "}
                    Sport
                    <div className="project-form__icon-container">
                      <img
                        className="project-form__icon"
                        src="https://i.ibb.co/SRgJpCQ/School-sports-team-abstract-concept-vector-illustration-School-children-club-competitive-team-sports.jpg"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="project__information element">
              <div className="project__description">
                <h3 className="project-form__small-title">Description</h3>
                <p className="project-form__guidelines">
                  La description de votre projet : Qui êtes-vous ? Quel est
                  votre vision ? Quel est le but de votre projet, à quels
                  besoins répond-il ? ...
                </p>
                <textarea
                  className="project-form__description"
                  value={projectDescription}
                  onChange={onChangeProjectDescription}
                  placeholder="Entrez votre description ici... "
                />
              </div>

              <div className="project__needs">
                <h3 className="project-form__small-title">
                  Fonctionnalités et besoins
                </h3>
                <p className="project-form__guidelines">
                  Quelles sont les pages web dont vous avez besoin ? Savez-vous
                  déjà quelles technologies vous souhaitez utiliser ? Quelles
                  sont les fonctionnalités attendues ? Avez-vous déjà des
                  participants au projet, et si oui, qui sont-ils ?
                  Recherchez-vous un profil en particulier ?
                </p>
                <textarea
                  className="project-form__needs"
                  value={projectNeeds}
                  onChange={onChangeProjectNeeds}
                  placeholder="Entrez vos besoins et fonctionnalités souhaitées ici..."
                />
              </div>

              {/* <div className="project__specificities">
            <h3 className="project-form__small-title">Spécificités du projet</h3>
            <textarea
            className="project-form__specificities"
            value={projectSpecificities}
            onChange={onChangeProjectSpecificities}
            placeholder="Une petite bio : Votre parcours, ce qui vous motive, vos centres d'intérêt, ce que vous souhaitez apprendre..."
          />
            </div> */}
            </div>

            <button className="project__button" type="submit">
              Enregistrer les modifications
            </button>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

SearchProjectsResult.propTypes = {};

// == Export
export default SearchProjectsResult;
