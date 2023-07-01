import React, { useContext } from 'react'
import { SiteContext } from '@/context/SiteContext'
import './navBackdrop.scss'

const NavBackdrop = () => {
  const { menuToggle, setMenuToggle } = useContext(SiteContext);

  return (
    <div onClick={() => setMenuToggle(false)} className={`nav-backdrop${menuToggle ? " nav-backdrop-active" : ""}`}></div>
  )
}

export default NavBackdrop