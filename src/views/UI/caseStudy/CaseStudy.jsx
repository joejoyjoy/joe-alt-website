import { useTranslation } from 'react-i18next'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './caseStudy.scss'

const CaseStudy = ({ array }) => {
  const { t } = useTranslation();
  const { name, github, link, description, image, tools } = array;

  return (
    <article className="case-study">
      <section className="case-study__preview">
        <a href="#" target="_blank" className="case-study__preview--wrapper">
          <img src={image} alt={name} className="case-study__preview--wrapper__image" />
        </a>
      </section>
      <section className="case-study__details">
        <div className="case-study__details--header">
          <span className="case-study__details--header__action">
            <a href={github} aria-label="Github" target="_blank">
              <FiGithub size={23} />
            </a>
            {link &&
              <a href={link} aria-label="External Preview Link" target="_blank">
                <FiExternalLink size={23} />
              </a>
            }
          </span>
          <span>
            <p className="case-study__details--header__text">{t("workSection_caseStudy_text")}</p>
            <h3 className="case-study__details--header__title">
              <a href="#" className="marked">{name}</a>
            </h3>
          </span>
        </div>
        <p className="case-study__details--desc">{description}</p>
        <div className="case-study__details--tools">
          {tools?.map((tool, index) => {
            return (
              <span key={index} className="case-study__details--tools__tool">{tool}</span>
            )
          })}
        </div>
      </section>
    </article>
  )
}

export default CaseStudy