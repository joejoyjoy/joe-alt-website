import { useTranslation } from "react-i18next";
import MWPreview from "@/assets/IMG/webp/m&wPrv.webp";
import AHRPreview from "@/assets/IMG/webp/ahrPrv.webp";

export const WorkExperience = () => {
  const { t } = useTranslation();

  const wix = "WIX";
  const ionos = "IONOS";
  const js = "JavaScript";
  const react = "React.js";
  const next = "Next.js";
  const css = "CSS3";
  const html = "HTML5";
  const php = "PHP";
  const stripe = "Stripe";
  const ts = "Typescript";
  const api = "RESTful API";
  const sql = "SQL/NoSQL";
  const node = "Node.js";
  const sass = "SASS";
  const bs = "Bootstrap";
  const test = "Jest/Cypress";

  const workExperience = [
    {
      id: "01",
      business: "Vinted, UAB",
      avatar: "Vinted",
      short: "VNT",
      position: `${t("workExperienceJson_position_engineer")}`,
      duration: `${t("month_10")} 2023 - ${t("present")}`,
      year: "2023",
      description: `${t("workExperienceJson_description_06")}`,
      website: [],
      tools: [next, ts, react, sass, node, api, test],
    },
    {
      id: "02",
      business: "Assembler Institute of Technology",
      avatar: "Assembler Institute",
      short: "AIT",
      position: `${t("workExperienceJson_position_developer")}`,
      duration: `${t("month_10")} 2022 - ${t("month_5")} 2023`,
      year: "2023",
      description: `${t("workExperienceJson_description_01")}`,
      website: [],
      tools: [react, ts, sass, node, api, sql, php, bs, test],
    },
    {
      id: "03",
      business: "Massages & Wellness at Home",
      avatar: "Massagist Daniel",
      short: "M&W",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: `${t("month_9")} 2022 - ${t("month_3")} 2023`,
      year: "2022",
      description: `${t("workExperienceJson_description_02")}`,
      website: [
        {
          title: `${t("workExperienceJson_website_02_title")}`,
          desc: `${t("workExperienceJson_website_02_desc")}`,
          image: MWPreview,
          url: "massageswellnessathome.com",
        },
      ],
      tools: [wix, stripe],
    },
    {
      id: "04",
      business: "eCommerce Priccesa",
      avatar: "Priccesa",
      short: "PRC",
      position: `${t("workExperienceJson_position_backend")}`,
      duration: `${t("month_2")} 2021 - ${t("month_6")} 2022`,
      year: "2021",
      description: `${t("workExperienceJson_description_03")}`,
      website: [],
      tools: [ionos, wix, stripe, js, php],
    },
    {
      id: "05",
      business: "DTB Take Away Restaurant",
      avatar: "DTB Take Away",
      short: "DTB",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: `${t("month_12")} 2020 - ${t("month_3")} 2021`,
      year: "2020",
      description: `${t("workExperienceJson_description_04")}`,
      website: [],
      tools: [html, css, js],
    },
    {
      id: "06",
      business: "Andalusian Health Retreats",
      avatar: "Health Retreats",
      short: "AHR",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: `${t("month_4")} 2017 - ${t("month_10")} 2022`,
      year: "2017",
      description: `${t("workExperienceJson_description_05")}`,
      website: [
        {
          title: `${t("workExperienceJson_website_05_title")}`,
          desc: `${t("workExperienceJson_website_05_desc")}`,
          image: AHRPreview,
          url: "andalusianhealthretreats.com",
        },
      ],
      tools: [wix, js, stripe],
    },
  ];

  return workExperience;
};
