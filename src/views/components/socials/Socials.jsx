import React from 'react'
import { FiGithub, FiLinkedin, FiAtSign } from 'react-icons/fi'
import { PiWhatsappLogo } from 'react-icons/pi'
import './socials.scss'

const Socials = () => {
  return (
    <section className="socials-bar">
      <a href="https://github.com/joejoyjoy" aria-label="Github" className="socials-bar__icon" target="_blank"><FiGithub size={23} /></a>
      <a href="https://www.linkedin.com/in/joe-alt" aria-label="LinkedIn" className="socials-bar__icon" target="_blank"><FiLinkedin size={23} /></a>
      <a href="mailto:joejoyalt@gmail.com" aria-label="Email address" className="socials-bar__icon" target="_blank"><FiAtSign size={23} /></a>
      <a href="https://wa.me/+34644653974" aria-label="WhatsApp" className="socials-bar__icon" target="_blank"><PiWhatsappLogo size={25} /></a>
      <hr size="1" className="socials-bar__hr" />
    </section>
  )
}

export default Socials