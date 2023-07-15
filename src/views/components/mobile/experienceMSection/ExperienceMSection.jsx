import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { WorkExperience } from '@/assets/JSON/Experience'
import './experienceMSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Thumbs } from 'swiper';
import ToolsLayout from '@/views/UI/toolsLayout';
import ShareEmbed from '@/views/UI/shareEmbed';

const ExperienceMSection = () => {
  const { t } = useTranslation();
  const jsonObject = WorkExperience();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlider, setActiveSlider] = useState(0)

  useEffect(() => {
    const callback = (mutationsList) => {
      mutationsList.forEach((mutation) => {
        setActiveSlider(mutation.target.getAttribute("data-swiper-slide-index"));
      });
    };

    const targetNode = document.querySelector('.thumbsSwiper');

    if (!targetNode) {
      console.error('Target element not found');
      return;
    }

    const observer = new MutationObserver(callback);

    const options = {
      subtree: true,
      attributeFilter: ['class'],
    };

    observer.observe(targetNode.children[0], options);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.getElementById("tab-indicator").style.left = `calc((100% / 5) * ${(activeSlider)})`
  }, [activeSlider])

  return (
    <>
      <div className="experience-section-mobile-header">
        <span>02. </span><h2>{t("experienceSection_header")}</h2>
      </div>
      <div className="experience-section-mobile-body">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          loop={true}
          modules={[Thumbs]}
          className="thumbsSwiper"
        >
          {jsonObject?.map((experience, index) => {
            const { short, year } = experience;
            return (
              <SwiperSlide key={index} >
                <span className="experience-section-mobile-body__tabs">
                  <p>{short}</p>
                  <span>{year}</span>
                </span>
              </SwiperSlide>
            )
          })}
          <span id="tab-indicator"></span>
        </Swiper>
        <Swiper
          centeredSlides={true}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 8500,
            disableOnInteraction: true
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          className="mySwiper"
        >
          {jsonObject?.map((experience) => {
            const { id, business, position, duration, description, website, tools } = experience;
            return (
              <SwiperSlide key={id}>
                <section className="experience-section-mobile-body__wrap">
                  <h3 className="experience-section-mobile-body__wrap--title">{position}</h3>
                  <p className="experience-section-mobile-body__wrap--date">{duration}</p>
                  <h4 className="experience-section-mobile-body__wrap--local">{business}</h4>
                  <p className="experience-section-mobile-body__wrap--desc">{description}</p>
                  {website.length > 0 &&
                    <ShareEmbed website={website} />
                  }
                  <ToolsLayout tools={tools} />
                </section>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default ExperienceMSection