import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Preview from '@/assets/IMG/preview.jpg'
import './caseStudy.scss'

const CaseStudy = () => {
  return (
    <article className="case-study">
      <section className="case-study__preview">
        <a href="#" target="_blank" className="case-study__preview--wrapper">
          <img src={Preview} alt="preview" className="case-study__preview--wrapper__image" />
        </a>
      </section>
      <section className="case-study__details">
        <div className="case-study__details--header">
          <span className="case-study__details--header__action">
            <a href="https://github.com/joejoyjoy" aria-label="Github" target="_blank">
              <FiGithub size={23} />
            </a>
            <a href="https://google.com" aria-label="External Preview Link" target="_blank">
              <FiExternalLink size={23} />
            </a>
          </span>
          <span>
            <p className="case-study__details--header__text">Featured Project</p>
            <h3 className="case-study__details--header__title">
              <a href="#" className="marked">My eCommerce website</a>
            </h3>
          </span>
        </div>
        <p className="case-study__details--desc">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available
          on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
        </p>
        <div className="case-study__details--tools">
          <span className="case-study__details--tools__tool">HTML5</span>
          <span className="case-study__details--tools__tool">CSS3</span>
          <span className="case-study__details--tools__tool">JavaScript</span>
        </div>
      </section>
    </article>
  )
}

export default CaseStudy