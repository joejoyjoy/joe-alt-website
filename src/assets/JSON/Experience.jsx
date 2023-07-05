import { useTranslation } from 'react-i18next'

export const WorkExperience = () => {
  const { t } = useTranslation();

  const wix = "WIX";
  const js = "JavaScript";
  const react = "React.js";
  const css = "CSS3";
  const html = "HTML5";
  const php = "PHP";

  const workExperience = [
    {
      business: "Assembler Institute of Technology",
      avatar: "Assembler Institute",
      position: `${t("workExperienceJson_position_developer")}`,
      description: "What I have learned",
      tools: {
        wix, js, react, css, html
      }
    },
    {
      business: "Andalusian Health Retreats",
      avatar: "Health Retreats",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: "Abril 2017 - October 2022",
      description: "What I have learned",
      tools: {
        wix, js
      }
    },
    {
      business: "Massages & Wellness at Home",
      avatar: "Massagist Daniel",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: "September 2022 - March 2023",
      description: "What I have learned",
      tools: {
        wix, js
      }
    },
    {
      business: "eCommerce Priccesa",
      avatar: "Priccesa",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: "February 2021 - June 2022",
      description: "What I have learned",
      tools: {
        wix, js, php
      }
    },
    {
      business: "DTB Take Away Restaurant",
      avatar: "DTB Take Away",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: "December 2020 - March 2021",
      description: "What I have learned",
      tools: {
        html, css, js
      }
    }
  ]

  return workExperience;
}