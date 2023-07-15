import { Trans } from 'react-i18next'
import "swiper/css";
import "swiper/css/navigation";
import { BsLinkedin } from 'react-icons/bs'
import './recommendsDSection.scss'

const RecommendsDSection = ({ coWorker }) => {
  const { id, name, position, profile, url, recommendation } = coWorker;

  return (
    <article key={id} className="recommends-desktop-swiper">
      <div className="recommends-desktop-swiper__header">
        <a href={url} className="recommends-desktop-swiper__header--profile">
          <span className="recommends-desktop-swiper__header--profile__image">
            <img src={profile} alt={name + " portrait picture"} />
          </span>
          <span className="recommends-desktop-swiper__header--profile__details">
            <h3>{name}</h3>
            <p>{position}</p>
          </span>
        </a>
        <a href='https://linkedin.com/in/joe-alt' className="recommends-desktop-swiper__header--credit" target="_blank">
          <BsLinkedin />
          <span>
            <Trans i18nKey="recommendsSection_credit" components={{ space: <br /> }} />
          </span>
        </a>
      </div>
      <div className="recommends-desktop-swiper__body">
        <p>{recommendation}</p>
      </div>
    </article>
  )
}

export default RecommendsDSection