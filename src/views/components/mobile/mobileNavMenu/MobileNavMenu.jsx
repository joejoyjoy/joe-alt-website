import React, { useContext } from 'react'
import { SiteContext } from '@/context/SiteContext';
import './mobileNavMenu.scss'

const MobileNavMenu = () => {
  const { menuToggle, handleToggle } = useContext(SiteContext);

  return (
    <div className={`mobile-nav-menu${menuToggle ? " mobile-nav-menu--open" : ""}`}>
      MobileNavMenu
    </div>
  )
}

export default MobileNavMenu