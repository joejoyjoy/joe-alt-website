import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { WorkExperience } from '@/assets/JSON/Experience'
import './experienceMSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode, Thumbs } from 'swiper';

const ExperienceMSection = () => {
  const { t } = useTranslation();
  const jsonObject = WorkExperience();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="experience-section-mobile-header">
        <span>02. </span><h2>{t("experienceSection_header")}</h2>
      </div>
      <div className="experience-section-mobile-body">
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 8500,
            disableOnInteraction: true
          }}
          pagination={{
            clickable: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {jsonObject?.map((experience) => {
            const { id, business, position, duration, description, tools } = experience;
            return (
              <SwiperSlide>
                <section key={id} className="experience-section-mobile-body__wrap">
                  <h4 className="experience-section-mobile-body__wrap--title">{position} <b>@ {business}</b></h4>
                  <p className="experience-section-mobile-body__wrap--date">{duration}</p>
                  <p>{description}</p>
                  <div className="experience-section-mobile-body__wrap--tools">
                    {tools?.map((tool, index) => {
                      return (
                        <span key={index} className="experience-section-mobile-body__wrap--tools__tool">{tool}</span>
                      )
                    })}
                  </div>
                </section>
              </SwiperSlide>
            )
          })}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          loop={true}
          spaceBetween={10}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="mySwiper"
        >
          {jsonObject?.map((experience) => {
            const { short } = experience;
            return (
              <SwiperSlide>
                <p>{short}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default ExperienceMSection

/* {jsonObject?.map((experience) => {
  const { id, avatar, short, year } = experience;
  return (
    <button key={id} onClick={() => setActive(id)} className={`experience-section-mobile-tabs__btn${active === id ? " selected" : ""}`}>
      {active === id ? avatar :
        <>
          {short}
          <b>{year}</b>
        </>
      }
    </button>
  )
})} */

