import React from 'react'
import './heroSection.scss'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <p className="hero-section__welcome">Hi, my name is</p>
      <h1 className="hero-section__name">Joe Alt.</h1>
      <h2 className="hero-section__position">Full Stack web developer.</h2>
      <p className="hero-section__description">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.
      </p>
      <span className="hero-section__btns">
        <button className="hero-section__btns--action">Get In Touch</button>
        <button className="hero-section__btns--download">My Resume</button>
      </span>
    </section>
  )
}

export default HeroSection