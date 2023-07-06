import { useState, useEffect } from 'react'
import { WorkExperience } from '@/assets/JSON/experience'
import './experienceDSection.scss'

const ExperienceDSection = () => {
  const jsonObject = WorkExperience();
  const [active, setActive] = useState(jsonObject[0].id);

  useEffect(() => {
    document.getElementById("tab-indicator").style.top = `calc(${(active - 1) * 42}px)`
  }, [active])

  return (
    <>
      <div className="experience-section-desktop-header">
        <span>02. </span><h2>Where I've Worked</h2>
      </div>
      <nav className="experience-section-desktop-tabs">
        {jsonObject?.map((experience) => {
          const { id, avatar } = experience;
          return (
            <button key={id} onClick={() => setActive(id)} className={`experience-section-desktop-tabs__btn${active === id ? " selected" : ""} `}>{avatar}</button>
          )
        })}
        <span id="tab-indicator"></span>
      </nav>
      <div className="experience-section-desktop-body">
        {jsonObject?.map((experience) => {
          const { id, business, position, duration, description, tools } = experience;
          if (active === id) {
            return (
              <section key={id} className="experience-section-desktop-body__wrap">
                <h4 className="experience-section-desktop-body__wrap--title">{position} <b>@ {business}</b></h4>
                <p className="experience-section-desktop-body__wrap--date">{duration}</p>
                <p>{description}</p>
                <div className="experience-section-desktop-body__wrap--tools">
                  {tools?.map((tool, index) => {
                    return (
                      <span key={index} className="experience-section-desktop-body__wrap--tools__tool">{tool}</span>
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

export default ExperienceDSection