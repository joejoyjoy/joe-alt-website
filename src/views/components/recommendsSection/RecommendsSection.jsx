import { useRef } from 'react'
import { Recommends } from '@/assets/JSON/Recommends'
import { useTranslation } from 'react-i18next'
import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import { Navigation, EffectFade } from "swiper";
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import RecommendsDSection from '../desktop/recommendsDSection';
import RecommendsMSection from '../mobile/recommendsMSection';
import './recommendsSection.scss'

const RecommendsSection = () => {
  const screenWidth = useWindowSizeReport();
  const { t } = useTranslation();
  const jsonObject = Recommends();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="reviewsLink" className="recommends-section">
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
          effect={'fade'}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Navigation, EffectFade]}
          className="recommends-section__content--swiper"
        >
          {jsonObject?.map((coWorker) => {
            return (
              <SwiperSlide>
                {screenWidth > 550 ? <RecommendsDSection coWorker={coWorker} /> : <RecommendsMSection coWorker={coWorker} />}
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