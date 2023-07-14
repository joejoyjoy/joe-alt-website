import { useRef } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Recommends } from '@/assets/JSON/Recommends'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsArrowLeftCircle, BsArrowRightCircle, BsLinkedin } from 'react-icons/bs'
import './recommendsSection.scss'

const RecommendsSection = () => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const jsonObject = Recommends();

  return (
    <section id="recommendsLink" className="recommends-section">
      <div className="recommends-section__header">
        <span>04. </span><h2>{t("recommendsSection_header")}</h2>
      </div>
      <div className="recommends-section__content">
        <Swiper
          spaceBetween={25}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          className="recommends-swiper"
        >
          {jsonObject?.map((coWorker) => {
            const { id, name, position, profile, url, recommendation } = coWorker;
            return (
              <SwiperSlide key={id}>
                <div className="recommends-section__content--head">
                  <a href={url} className="recommends-section__content--head__profile">
                    <span className="recommends-section__content--head__profile--image">
                      <img src={profile} alt={name + " portrait picture"} />
                    </span>
                    <span className="recommends-section__content--head__profile--details">
                      <h4>{name}</h4>
                      <p>{position}</p>
                    </span>
                  </a>
                  <a href='https://linkedin.com/in/joe-alt' className="recommends-section__content--head__credit" target="_blank">
                    <BsLinkedin />
                    <span>
                      <Trans i18nKey="recommendsSection_credit" components={{ space: <br /> }} />
                    </span>
                  </a>
                </div>
                <div className="recommends-section__content--body">
                  <p>{recommendation}</p>
                </div>
              </SwiperSlide>
            )
          })}
          <div className="recommends-section__content--foot">
            <span className="recommends-section__content--foot__arrows">
              <button ref={prevRef}>
                <BsArrowLeftCircle />
              </button>
              <button ref={nextRef}>
                <BsArrowRightCircle />
              </button>
            </span>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default RecommendsSection