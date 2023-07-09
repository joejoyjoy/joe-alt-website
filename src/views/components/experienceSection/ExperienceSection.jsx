import useWindowSizeReport from '@/hooks/useWindowSizeReport'
import { responsiveTabletBreak } from '@/utils/componentsConstants'
import ExperienceDSection from '@/views/components/desktop/experienceDSection'
import ExperienceMSection from '@/views/components/mobile/experienceMSection'
import './experienceSection.scss'

const ExperienceSection = () => {
  const screenWidth = useWindowSizeReport();

  return (
    <section id="experienceLink" className="experience-section">
      <div className="experience-section__content">
        {screenWidth > responsiveTabletBreak ? <ExperienceDSection /> : <ExperienceMSection />}
      </div>
    </section>
  )
}

export default ExperienceSection