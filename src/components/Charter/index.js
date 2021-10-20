import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import devolutionIcon from "src/assets/images/devolution-white.svg";
import { BsCheckCircle } from "react-icons/bs";

import "./style.scss";

function Charter({ logged }) {
  
  return (
    <div className={`charter ${logged ? "islog" : ""}`}>
      <h1 className="charter__title">Charte Devolution</h1>
      <img
        className="charter__logo"
        src={devolutionIcon}
        alt="logo devolution"
      />

      <div className="charter__description">
        <p>
          En vous inscrivant sur Devolution, vous vous engagez à respecter les
          règles suivantes :
        </p>
      </div>

      <div className="charter__component">
        <div className="charter__bearer">
          <p className="charter__subtitle">
            En tant que porteur projet, je m'engage à...
          </p>
          <ul className="charter__list">
            <li className="charter__list-item">
              <BsCheckCircle /> Proposer un ou des projets qui n’ont pas de but
              lucratif, qui ont un impact bénéfique pour la société, l’écologie
              ou mon environnement direct,
            </li>
            <li className="charter__list-item">
              <BsCheckCircle /> Rester flexible sur les fonctionnalités et des
              délais de mise en place du site que je souhaite, en fonction des
              compétences et du niveau de mes participants,
            </li >
            <li className="charter__list-item">
              <BsCheckCircle /> Gérer la coordination de l’équipe et le
              calendrier en accord avec les participants,
            </li>
            <li className="charter__list-item">
              <BsCheckCircle /> Clôturer le projet lorsque celui-ci a atteint le
              nombre de participants nécessaires à son élaboration,
            </li>
            <li className="charter__list-item">
              <BsCheckCircle /> Garder à jour mon profil, notamment mes
              compétences et indiquer au moins un moyen de contact (email ou
              téléphone).
            </li>
          </ul>
        </div>

        <div className="charter__participant">
          <p className="charter__subtitle">
            En tant que participant, je m'engage à...
          </p>
          <ul className="charter__list">
            <li className="charter__list-item">
              <BsCheckCircle /> Honorer mes participations, en contactant
              directement le porteur de projet à chaque fois que je clique sur
              le bouton « participer »,
            </li>
            <li className="charter__list-item">
              <BsCheckCircle /> M’accorder avec les autres participants sur les
              tâches à faire,
            </li>
            <li className="charter__list-item">
              <BsCheckCircle /> Donner un préavis de rétraction d’au moins 2
              semaines, si je souhaite me rétracter du projet, et essayer de
              trouver une solution avec les autres participants et le porteur de
              projet pour veiller à mon remplacement,
            </li>
            <li className="charter__list-item">
              <BsCheckCircle /> Garder à jour mon profil, notamment mes
              compétences et indiquer au moins un moyen de contact (email ou
              téléphone).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Charter.propTypes = {};

export default Charter;
