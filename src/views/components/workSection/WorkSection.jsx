import React from 'react'
import { useTranslation } from 'react-i18next'
import { WorkCases } from '@/assets/JSON/Work'
import CaseStudy from '../../UI/caseStudy/CaseStudy';
import './workSection.scss'

const WorkSection = () => {
  const { t } = useTranslation();
  const jsonObject = WorkCases();

  return (
    <section id="workLink" className="work-section">
      <div className="work-section__content">
        <div className="work-section__content--header">
          <span>03. </span><h2>{t("workSection_header")}</h2>
        </div>
        <div className="work-section__content--body">
          {jsonObject?.map((work, index) => {
            return (
              <CaseStudy key={index} array={work} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkSection