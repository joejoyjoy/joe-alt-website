import { useTranslation } from 'react-i18next'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { PiStarFourBold } from 'react-icons/pi'
import './caseStudyM.scss'

const CaseStudyM = ({ array }) => {
  const { t } = useTranslation();
  const { name, github, link, description, image, tools } = array;

  return (
    <article className="case-study-mobile">
      <section className="case-study-mobile__top">
        <img src={image} alt={name} className="case-study-mobile__top--image" />
        <p className="case-study-mobile__top--text"><PiStarFourBold />{t("workSection_caseStudy_text")}</p>
      </section>
      <section className="case-study-mobile__bottom">
        <h3 className="case-study-mobile__bottom--title">
          <a href={link} className="marked">{name}</a>
        </h3>
        <div className="case-study-mobile__bottom--tools">
          {tools?.map((tool, index) => {
            return (
              <span key={index} className="case-study-mobile__bottom--tools__tool">{tool}</span>
            )
          })}
        </div>
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