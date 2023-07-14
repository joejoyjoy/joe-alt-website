import { useTranslation } from 'react-i18next'
import IuliiaPic from '@/assets/IMG/webp/recommends01.webp'
import AntonioPic from '@/assets/IMG/webp/recommends02.webp'
import LuciaPic from '@/assets/IMG/webp/recommends03.webp'

export const Recommends = () => {
  const { t } = useTranslation();

  const recommends = [
    {
      id: "01",
      name: "Iuliia Shikhanova",
      position: `${t("recommendsJson_position_coWorkerF")}`,
      profile: IuliiaPic,
      url: "https://linkedin.com/in/iuliia-shikhanova",
      recommendation: `I had the pleasure of working with Joe together on a music app project, where he 
      showcased his exceptional frontend development skills. Joe is highly talented, creative, detail-oriented, 
      and has a remarkable ability to quickly grasp new technologies. He is always open to sharing his 
      knowledge and works independently with great efficiency. I highly recommend Joe for any frontend 
      development role!`,
    },
    {
      id: "02",
      name: "Antonio Rufino Casasus",
      position: `${t("recommendsJson_position_coWorkerM")}`,
      profile: AntonioPic,
      url: "https://linkedin.com/in/devs-toni",
      recommendation: `Joe is a great co-worker, independent, capable and unafraid to learn new technologies 
      to improve the project he's working on. He understands the tasks at hand and his team social skills 
      are excellent. I've always found it easy and satisfying to work in pair-programming with him.

      If there is one thing that stands out in his skills, it's his stylistic creativity in creating websites.
      
      It has been a pleasure to share projects with you Joe!`,
    },
    {
      id: "03",
      name: "Lucia del Cacho",
      position: `${t("recommendsJson_position_coWorkerF")}`,
      profile: LuciaPic,
      url: "https://linkedin.com/in/lucia-del-cacho-1a7950272",
      recommendation: `I wanted to take a moment to express my appreciation for your hard work and dedication to 
      our team. Your contributions have been invaluable, and I am consistently impressed by your attention to 
      detail and ability to tackle complex challenges.
      Your positive attitude and willingness to collaborate have also been a significant asset to our team. I always 
      know that I can count on you to provide valuable insights and to work with me to find solutions that 
      benefit our entire team.`,
    }
  ]

  return recommends;
}