import React, { useState } from 'react'
import './Layout.scss'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <Sidebar setShowNav={setShowNav} showNav={showNav} />
      <div className="page" onClick={() => setShowNav(false)}>
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  )
}

export default Layout
