// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Images
// import CodeIcon from './code-white.svg';


// Style
import './style.scss';

// == Composant
const Menu = ({}) => (
    <div className="menu__component">

        <div className="menu__container">
        <div className="menu__logobutton">
            <img className="menu__logoicon" src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png" alt="Logo Devolution" />
        </div>

        <div className="menu__buttons">
            <Link to='/search'>
              <div className="menu__searchbutton">
                  <img className="menu__searchicon" src="https://cdn.discordapp.com/attachments/874922784298528786/877661543209242714/search_-_transparent_white.png" alt="Search Icon" />
              </div>
            </Link>

            <Link to='/myProjects'>
              <div className="menu__creatorbutton">
                  <img className="menu__creatoricon" src="https://cdn.discordapp.com/attachments/874922784298528786/877661552369614858/idea_-_transparent_white.png" alt="Idea Icon"/>
              </div>
            </Link>

            <Link to='/myParticipations'>
              <div className="menu__participantbutton">
                  <img className="menu__participanticon" src="https://cdn.discordapp.com/attachments/874922784298528786/877661549194530856/code_-_transparent_white.png" alt="Participant Icon"/>
              </div>
            </Link>

            {/* <div className="menu__participantbutton">
                <img className="menu__participanticon" src={CodeIcon} alt="Participant Icon"/>
                <CodeIcon/>
            </div> */}

        </div>
        </div>
    </div>
  );

// == Export
export default Menu;
