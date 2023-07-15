import { Trans } from 'react-i18next'
import "swiper/css";
import "swiper/css/navigation";
import { BsLinkedin } from 'react-icons/bs'
import './recommendsMSection.scss'

const RecommendsMSection = ({ coWorker }) => {
  const { id, name, position, profile, url, recommendation } = coWorker;

  return (
    <article key={id} className="recommends-mobile-swiper">
      <div className="recommends-mobile-swiper__header">
        <a href={url} className="recommends-mobile-swiper__header--profile">
          <span className="recommends-mobile-swiper__header--profile__image">
            <img src={profile} alt={name + " portrait picture"} />
          </span>
          <span className="recommends-mobile-swiper__header--profile__details">
            <h3>{name}</h3>
            <p>{position}</p>
          </span>
        </a>
        <div className="recommends-mobile-swiper__header--space"></div>
      </div>
      <div className="recommends-mobile-swiper__body">
        <p>{recommendation}</p>
      </div>
      <a href='https://linkedin.com/in/joe-alt' className="recommends-mobile-swiper__footer" target="_blank">
        <BsLinkedin />
        <span>
          <Trans i18nKey="recommendsSection_credit" components={{ space: <br /> }} />
        </span>
      </a>
    </article>
  )
}

export default RecommendsMSection