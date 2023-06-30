import React, { useState, createContext } from "react";

export const SiteContext = createContext()

export default function SiteContextProvider(props) {
  const [menuToggle, setMenuToggle] = useState(false)

  const handleToggle = () => {
    setMenuToggle(!menuToggle)
  }

  if (menuToggle) {
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
