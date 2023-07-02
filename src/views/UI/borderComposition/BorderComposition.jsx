import React from 'react'
import './borderComposition.scss'

const BorderComposition = ({ style, type }) => {
  return (
    <svg
      height={type === "textarea" ? "calc(2rem + 114px)" : "64"}
      width="454"
      xmlns="http://www.w3.org/2000/svg"
      className="border-composition"
    >
      <rect
        className={
          `border-composition__shape${style ? " filledIn" : ""}${type === "textarea" ? " text-area-type" : ""}`
        }
        x="2"
        y="2"
        height={
          type === "textarea" ? "calc(2rem + 110px)" : "60"
        }
        width="450"
        rx="4px"
        ry="4px"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BorderComposition