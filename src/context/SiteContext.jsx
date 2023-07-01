import React, { useState, createContext } from "react";
import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import { responsiveDesktopBreak } from '@/utils/componentsConstants'

export const SiteContext = createContext()

export default function SiteContextProvider(props) {
  const screenWidth = useWindowSizeReport();
  const [menuToggle, setMenuToggle] = useState(false)

  const handleToggle = () => {
    setMenuToggle(!menuToggle)
  }

  if (menuToggle && screenWidth < responsiveDesktopBreak) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const value = { menuToggle, setMenuToggle, handleToggle }

  return (
    <SiteContext.Provider value={value}>
      {props.children}
    </SiteContext.Provider>
  )
}
