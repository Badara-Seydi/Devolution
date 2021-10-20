import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import "./style.scss"

function Footer(props) {
  return (
    <div className="footer">

      <p className="footer__copyright">Devolution ©2021</p>

      <div className="footer__links">

      <Link to='/about'>
      <p className="footer__link footer__link-left">A propos </p>
      </Link>
      <Link to='/charter'>
      <p className="footer__link">Charte Devolution </p>
      </Link>
      <p className="footer__link">Mentions Légales</p>

      </div>

    </div>
  )
}

Footer.propTypes = {

}

export default Footer
