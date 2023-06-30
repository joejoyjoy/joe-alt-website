import React, { useContext } from 'react'
import { SiteContext } from '@/context/SiteContext'
import './navBackdrop.scss'

const NavBackdrop = () => {
  const { menuToggle } = useContext(SiteContext);

  return (
    <div className={`nav-backdrop${menuToggle ? " nav-backdrop-active" : ""}`}></div>
  )
}

export default NavBackdrop