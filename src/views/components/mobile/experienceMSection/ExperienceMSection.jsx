import { useState } from 'react'
import { WorkExperience } from '@/assets/JSON/experience'
import './experienceMSection.scss'

const ExperienceMSection = () => {
  const jsonObject = WorkExperience();
  const [active, setActive] = useState(jsonObject[0].id);

  return (
    <>
      <div className="experience-section-mobile-header">
        <span>02. </span><h2>Where I've Worked</h2>
      </div>
      <nav className="experience-section-mobile-tabs">
        {jsonObject?.map((experience) => {
          const { id, avatar, short, year } = experience;
          return (
            <button key={id} onClick={() => setActive(id)} className={`experience-section-mobile-tabs__btn${active === id ? " selected" : ""}`}>
              {active === id ? avatar :
                <>
                  {short}
                  <b>{year}</b>
                </>
              }
            </button>
          )
        })}
      </nav>
      <div className="experience-section-mobile-body">
        {jsonObject?.map((experience) => {
          const { id, business, position, duration, description, tools } = experience;
          if (active === id) {
            return (
              <section key={id} className="experience-section-mobile-body__wrap">
                <h4 className="experience-section-mobile-body__wrap--title">{position} <b>@ {business}</b></h4>
                <p className="experience-section-mobile-body__wrap--date">{duration}</p>
                <p>{description}</p>
                <div className="experience-section-mobile-body__wrap--tools">
                  {tools?.map((tool, index) => {
                    return (
                      <span key={index} className="experience-section-mobile-body__wrap--tools__tool">{tool}</span>
                    )
                  })}
                </div>
              </section>
            )
          }
        })}
      </div>
    </>
  )
}

export default ExperienceMSection