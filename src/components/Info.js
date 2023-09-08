import React from 'react'
import './Info.scss'

const Info = () => {
  return (
    <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-title">Daud Gul</div>
          <div className="letter-context">
            <p>+91-9012261447</p>
            <p>mohd.daudgul@gmail.com</p>
            <p>244901, Rampur, U.P, India</p>
          </div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default Info
