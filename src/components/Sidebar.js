import React, { useState } from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-d.png'
import LogoSubtitle from '../assets/images/logo-img.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ showNav, setShowNav }) => {
  console.log(showNav ? 'helo' : 'bi')

  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'} onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav className={showNav ? 'show' : 'en'}>
        <NavLink
          exact="true"
          activeclassname="active"
          to={'/'}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={'about-link'}
          activeclassname="active"
          to={'/about'}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={'portfolio-link'}
          activeclassname="active"
          to={'/portfolio'}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={'contact-link'}
          activeclassname="active"
          to={'/contact'}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/daud-gul-a2a340245/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://angel.co/u/daud-gul"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faAngellist} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Daudgul" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="mobile-link"
      />
    </div>
  )
}

export default Sidebar
