import React from 'react'
import { WorkExperience } from '@/assets/JSON/experience'
import './experienceSection.scss'

const ExperienceSection = () => {
  const jsonObject = WorkExperience();

  return (
    <section id="experienceLink" className="experience-section">
      <div className="experience-section__content">
        <div className="experience-section__content--header">
          <span>02. </span><h2>Where I've Worked</h2>
        </div>
        <div className="experience-section__content--sidebar">
          {jsonObject?.map((experience, index) => {
            return (
              <button key={index}>{experience.avatar}</button>
            )
          })
          }
        </div>
        <div className="experience-section__content--body">
          {jsonObject?.map((experience, index) => {
            return (
              <div>
                <span key={index}>{experience.position}</span>
                <span key={index}>{experience.business}</span>
              </div>
            )
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection