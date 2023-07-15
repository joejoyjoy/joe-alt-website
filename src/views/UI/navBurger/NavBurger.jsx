import React, { useContext } from 'react'
import { SiteContext } from '@/context/SiteContext';
import './navBurger.scss'

const NavBurger = () => {
  const { menuToggle, handleToggle } = useContext(SiteContext);

  return (
    <div className="mobile-nav-bar">
      <button onClick={() => handleToggle()} className="mobile-nav-bar__btn" aria-label="Mobile Menu Burger"></button>
      <div className="mobile-nav-bar__hamburger">
        <div className={`mobile-nav-bar__hamburger--figure${menuToggle ? " active-mobile-nav-burger" : ""}`}></div>
      </div>
    </div>
  )
}

export default NavBurger