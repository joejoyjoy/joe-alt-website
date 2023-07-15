import { useRef } from 'react'
import { Recommends } from '@/assets/JSON/Recommends'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import RecommendsDSection from '../desktop/recommendsDSection';
import './recommendsSection.scss'

const RecommendsSection = () => {
  const { t } = useTranslation();
  const jsonObject = Recommends();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
          className="recommends-section__content--swiper"
        >
          {jsonObject?.map((coWorker) => {
            return (
              <SwiperSlide>
                <RecommendsDSection coWorker={coWorker} />
              </SwiperSlide>
            )
          })}
          <div className="recommends-section__content--swiper__footer">
            <span className="recommends-section__content--swiper__footer--arrows">
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