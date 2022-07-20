import React from 'react'
import './Sidebar.scss'
import LogoS from '../assets/images/logo-d.png'
import LogoSubtitle from '../assets/images/logo-img.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={'about-link'}
          activeclassname="active"
          to={'/about'}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={'portfolio-link'}
          activeclassname="active"
          to={'/portfolio'}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={'contact-link'}
          activeclassname="active"
          to={'/contact'}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
