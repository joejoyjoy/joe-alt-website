import { useTranslation } from 'react-i18next'
import ToolsLayout from '@/views/UI/toolsLayout';
import { BiWorld } from 'react-icons/bi'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './caseStudyD.scss'

const CaseStudyD = ({ array }) => {
  const { t } = useTranslation();
  const { name, github, link, description, image, tools } = array;

  return (
    <article className="case-study-desktop">
      <section className="case-study-desktop__details">
        <div className="case-study-desktop__details--header">
          <BiWorld size={24} />
          <h3 className="case-study-desktop__details--header__title">
            <a href={link} className="marked">{name}</a>
          </h3>
        </div>
        <ToolsLayout tools={tools} />
        <p className="case-study-desktop__details--desc">{description}</p>
        <span className="case-study-desktop__details--action">
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
      <section className="case-study-desktop__preview">
        <div className="case-study-desktop__preview--wrapper">
          <img src={image} alt={name} className="case-study-desktop__preview--wrapper__image" />
        </div>
      </section>
    </article>
  )
}

export default CaseStudyD