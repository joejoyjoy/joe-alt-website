import React from 'react'
import './borderComposition.scss'

const BorderComposition = () => {
  return (
    <div className="border-composition">
      <svg height="64" width="324" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" x="2" y="2" height="60" width="320" rx="4px" ry="4px" stroke-linejoin="round" />
      </svg>
      <input type="text" placeholder="Nice to see you" className="input" />
    </div>
  )
}

export default BorderComposition