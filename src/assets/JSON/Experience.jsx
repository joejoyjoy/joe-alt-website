import { useTranslation } from 'react-i18next'

export const WorkExperience = () => {
  const { t } = useTranslation();

  const wix = "WIX";
  const js = "JavaScript";
  const react = "React.js";
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
      business: "Assembler Institute of Technology",
      avatar: "Assembler Institute",
      short: "AIT",
      position: `${t("workExperienceJson_position_developer")}`,
      duration: `${t("month_10")} 2022 - ${t("month_5")} 2023`,
      year: "2023",
      description: `I joined this Master focused in teaching Full Stack Web Development by building with a team 
      real-case projects from scratch, 1200 hours full-time and remotely. I have done +20 real-world projects with 
      a deep focus in MERN and LAMP stacks. Also using Agile development techniques like Scrum. I learned how to 
      applying clean code practices and scalability patterns. Learned how to work in a team, and was Team Leader twice 
      using all my knowledge to guide my team. After graduation I was able to create awesome website without any website 
      builder, pure code. Which makes me more able to create more personalized websites from now on`,
      tools: [
        react, ts, sass, node, api, sql, php, bs, test
      ]
    },
    {
      id: "02",
      business: "Massages & Wellness at Home",
      avatar: "Massagist Daniel",
      short: "M&W",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: `${t("month_9")} 2022 - ${t("month_3")} 2023`,
      year: "2022",
      description: `I was the UI/UX designer, website builder and maintainer of the site. I have learned 
      how to implement an appointment system with calender to book an appointment with the massagist. 
      I made it a mobile friendly, and made it SEO optimized for best ranking results of Google and Bing.`,
      tools: [
        wix, stripe
      ]
    },
    {
      id: "03",
      business: "eCommerce Priccesa",
      avatar: "Priccesa",
      short: "PRC",
      position: `${t("workExperienceJson_position_backend")}`,
      duration: `${t("month_2")} 2021 - ${t("month_6")} 2022`,
      year: "2021",
      description: `I was the backend web developer at Priccesa eCommerce site. PHP was necessary to 
      communicate with there logistics provider. I learned implementing PHP to ensure a stable connection 
      between the two businesses. I was also responsible for the correct uploading of the products 
      into the database and secure payment methods with cancelation policy.`,
      tools: [
        wix, stripe, js, php
      ]
    },
    {
      id: "04",
      business: "DTB Take Away Restaurant",
      avatar: "DTB Take Away",
      short: "DTB",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: `${t("month_12")} 2020 - ${t("month_3")} 2021`,
      year: "2020",
      description: `I learned developing the website for my client with HTML5, CSS3 and JavaScript.
        I was responsible for developing, maintaining and making it SEO optimized. I learned how to 
        use new technologies, create a fast loading site with cross-browser compatibility and mobile 
        responsiveness. It was about a restaurant so I used Google Maps, Apple Maps, Google Analytics, 
        Google Ads, Semrush, Google Search Console and Bing Webmaster to ensure user optimized experience 
        and high SEO ranking.`,
      tools: [
        html, css, js
      ]
    },
    {
      id: "05",
      business: "Andalusian Health Retreats",
      avatar: "Health Retreats",
      short: "AHR",
      position: `${t("workExperienceJson_position_builder")}`,
      duration: `${t("month_4")} 2017 - ${t("month_10")} 2022`,
      year: "2017",
      description: `I learned using a cloud-based website builder and started my journey from there. 
        I was the UI/UX designer, website builder and maintainer. I learned to take technical decisions on my own, 
        building a website that's easy to use and understand. Helping the wireframes and sketches I made before.
        I implemented external secure payment methods and used JavaScript to create advanced sorting and filtering 
        features from scratch. At the end this was the project that made me realize the passion I have for 
        web development, and it surely didn't end there.`,
      tools: [
        wix, js, stripe
      ]
    }
  ]

  return workExperience;
}