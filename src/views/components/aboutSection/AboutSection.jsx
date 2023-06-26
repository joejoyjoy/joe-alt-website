import React from 'react'
import Portrait from '@/assets/IMG/PortraitJoe.jpg'
import { SlLocationPin } from 'react-icons/sl'
import './aboutSection.scss'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section__content">
        <div className="about-section__content--header">
          <span>01. </span><h2>About Me</h2>
        </div>
        <div className="about-section__content--body">
          <span>
            Hey! I'm Joe, always deeply passionate about the web. I have been building <b>real-case websites</b> since 2019. I'm thankful to have been working as a <b>freelancer</b> for several years
            creating websites of all kinds, each with different functionalities involved. For example, product filtering and sorting, online payments, and API logistics, among others.
          </span>
          <span>
            After creating several successful websites for different businesses, I started a <a href="https://assemblerinstitute.com" className="marked">Master's program</a> in <b>Full Stack Web Development</b> in 2022 to improve and learn more advanced technologies
            along with implementing <b>Agile methodologies</b> like <b>Scrum</b>.
          </span>
          <span>
            Fast-forward to today, my main focus is building <b>accessible websites</b> for all to further improve my knowledge, experience and my passion. I'm currently searching for a Job position as a
            <b> Full Stack Web Developer</b> or <b>Front-end Web Developer</b> where I can continue to grow.
          </span>
          <span>
            Here are a few technologies I've been working with recently:
          </span>
          <ul className="about-section__content--body__skills-list">
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>SASS</li>
            <li>PHP</li>
            <li>Wix</li>
            <li>Jest Testing</li>
          </ul>
        </div>
      </div>
      <div className="about-section__image">
        <div className="about-section__image--wrapper">
          <img src={Portrait} alt="Portrait Joe" className="about-section__image--wrapper__content" />
          <span className="about-section__image--wrapper__location"><SlLocationPin /> Malaga, Spain</span>
        </div>
      </div>
    </section>
  )
}

export default AboutSection