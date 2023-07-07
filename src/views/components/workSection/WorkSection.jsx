import React from 'react'
import { useTranslation } from 'react-i18next'
import './workSection.scss'

const WorkSection = () => {
  const { t } = useTranslation();

  return (
    <section id="workLink" className="work-section">
      <div className="work-section__content">
        <div className="work-section__content--header">
          <span>03. </span><h2>{t("workSection_header")}</h2>
        </div>
        <div className="work-section__content--body">
          Nice To Know<br />
          Nice To Know<br />
          Nice To Know<br />
        </div>
      </div>
    </section>
  )
}

export default WorkSection