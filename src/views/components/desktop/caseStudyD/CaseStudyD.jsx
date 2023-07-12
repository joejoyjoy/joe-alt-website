import { useTranslation } from 'react-i18next'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './caseStudyD.scss'

const CaseStudyD = ({ array }) => {
  const { t } = useTranslation();
  const { name, github, link, description, image, tools } = array;

  return (
    <article className="case-study-desktop">
      <section className="case-study-desktop__preview">
        <a href={link} target="_blank" className="case-study-desktop__preview--wrapper">
          <img src={image} alt={name} className="case-study-desktop__preview--wrapper__image" />
        </a>
      </section>
      <section className="case-study-desktop__details">
        <div className="case-study-desktop__details--header">
          <span className="case-study-desktop__details--header__action">
            {github &&
              <a href={github} aria-label="Github" target="_blank">
                <FiGithub size={23} />
              </a>
            }
            {link &&
              <a href={link} aria-label="External Preview Link" target="_blank">
                <FiExternalLink size={23} />
              </a>
            }
          </span>
          <span>
            <p className="case-study-desktop__details--header__text">{t("workSection_caseStudy_text")}</p>
            <h3 className="case-study-desktop__details--header__title">
              <a href="#" className="marked">{name}</a>
            </h3>
          </span>
        </div>
        <p className="case-study-desktop__details--desc">{description}</p>
        <div className="case-study-desktop__details--tools">
          {tools?.map((tool, index) => {
            return (
              <span key={index} className="case-study-desktop__details--tools__tool">{tool}</span>
            )
          })}
        </div>
      </section>
    </article>
  )
}

export default CaseStudyD