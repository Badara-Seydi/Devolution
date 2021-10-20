import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function About({logged}) {
  return (
    <div className={`about ${logged ? "islog" : ""}`}>
      <h1 className="about__title">L'équipe Devolution</h1>

      <div className="about__profiles">
        <div className="about__profile">
          <img
            className="about__image"
            src="https://i.ibb.co/DkLxnHq/micka.jpg"
            alt="about-micka"
          />
          <p className="about__name">Mickaël Bellion</p>
          <p className="about__function">Lead Dev Front</p>

          <div className="about__external-links">
            <a className="about__external-link" href="https://github.com/MickaelBellion" target="_blank">
              <AiFillGithub size="30px" />
            </a>
            <a className="about__external-link"
              href="https://www.linkedin.com/in/mickael-bellion-0673a2214/"
              target="_blank"
            >
              <FaLinkedin size="30px" />
            </a>
          </div>
        </div>

        <div className="about__profile">
          <img
            className="about__image"
            src="https://i.ibb.co/Jr0c01w/jo.jpg"
            alt="about-jonathan"
          />
          <p className="about__name">Jonathan de Boisvilliers</p>
          <p className="about__function">Git Master</p>

          <div className="about__external-links">
            <a className="about__external-link" href="https://github.com/Dumpinator" target="_blank">
              <AiFillGithub size="30px" />
            </a>
            <a className="about__external-link"
              href="https://www.linkedin.com/in/jdeboisvilliers/"
              target="_blank"
            >
              <FaLinkedin size="30px" />
            </a>
          </div>
        </div>

        <div className="about__profile">
          <img
            className="about__image"
            src="https://i.ibb.co/2MMVc4S/bada.jpg"
            alt="about-badara"
          />
          <p className="about__name">Badara Seydi</p>
          <p className="about__function">Lead Dev Back</p>

          <div className="about__external-links">
            <a className="about__external-link" href="https://github.com/Badara-Seydi" target="_blank">
              <AiFillGithub size="30px" />
            </a>
            <a className="about__external-link"
              href="https://www.linkedin.com/in/badara-seydi-8a4610214/"
              target="_blank"
            >
              <FaLinkedin size="30px" />
            </a>
          </div>
        </div>

        <div className="about__profile">
          <img
            className="about__image"
            src="https://i.ibb.co/wrYW7QT/lea.jpg"
            alt="about-lea"
          />
          <p className="about__name">Léa Baty</p>
          <p className="about__function">Product Owner</p>
          <p className="about__function">Scrum Master</p>

          <div className="about__external-links">
            <a className="about__external-link" href="https://github.com/leabaty" target="_blank">
              <AiFillGithub size="30px" />
            </a>
            <a className="about__external-link"
              href="https://www.linkedin.com/in/l%C3%A9a-baty-2a542375/"
              target="_blank"
            >
              <FaLinkedin size="30px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
