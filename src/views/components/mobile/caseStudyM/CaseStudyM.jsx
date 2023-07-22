import { useTranslation } from 'react-i18next'
import ToolsLayout from '@/views/UI/toolsLayout'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './caseStudyM.scss'

const CaseStudyM = ({ array }) => {
  const { t } = useTranslation();
  const { name, github, link, description, image, tools } = array;

  return (
    <article className="case-study-mobile">
      <a href={link} target="_blank" className="case-study-mobile__top">
        <img src={image} alt={name} className="case-study-mobile__top--image" />
      </a>
      <section className="case-study-mobile__bottom">
        <h3 className="case-study-mobile__bottom--title">
          <a href={link}>{name}</a>
        </h3>
        <ToolsLayout tools={tools} />
        <p className="case-study-mobile__bottom--desc">{description}</p>
        <span className="case-study-mobile__bottom--action">
          {github &&
            <a href={github} aria-label="Github" target="_blank" className="case-study-mobile__bottom--action__code">
              {t("code")} <FiGithub />
            </a>
          }
          {link &&
            <a href={link} aria-label="External Preview Link" target="_blank" className="case-study-mobile__bottom--action__site">
              {t("website")} <FiExternalLink />
            </a>
          }
        </span>
      </section>
    </article>
  )
}

export default CaseStudyM