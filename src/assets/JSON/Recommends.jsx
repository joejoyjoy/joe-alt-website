import { useTranslation, Trans } from 'react-i18next'
import IuliiaPic from '@/assets/IMG/webp/recommends01.webp'
import AntonioPic from '@/assets/IMG/webp/recommends02.webp'
import LuciaPic from '@/assets/IMG/webp/recommends03.webp'

export const Recommends = () => {
  const { t } = useTranslation();

  const recommends = [
    {
      id: "01",
      name: "Antonio Rufino Casasus",
      position: `${t("recommendsJson_position_coWorkerM")}`,
      profile: AntonioPic,
      url: "https://linkedin.com/in/devs-toni",
      recommendation: <Trans i18nKey="recommendsJson_recommendation_01" components={{ space: <br /> }} />,
    },
    {
      id: "02",
      name: "Lucia del Cacho",
      position: `${t("recommendsJson_position_coWorkerF")}`,
      profile: LuciaPic,
      url: "https://linkedin.com/in/lucia-del-cacho-1a7950272",
      recommendation: <Trans i18nKey="recommendsJson_recommendation_02" components={{ space: <br /> }} />,
    },
    {
      id: "03",
      name: "Iuliia Shikhanova",
      position: `${t("recommendsJson_position_coWorkerF")}`,
      profile: IuliiaPic,
      url: "https://linkedin.com/in/iuliia-shikhanova",
      recommendation: <Trans i18nKey="recommendsJson_recommendation_03" components={{ space: <br /> }} />,
    }
  ]

  return recommends;
}