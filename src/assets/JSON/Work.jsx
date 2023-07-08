import { useTranslation } from 'react-i18next'
import case01img from '@/assets/IMG/webp/audityPrv.webp'
import case02img from '@/assets/IMG/webp/gUltimatePrv.webp'
import case03img from '@/assets/IMG/webp/m&gPrv.webp'
import case04img from '@/assets/IMG/webp/hangmanPrv.webp'

export const WorkCases = () => {
  const { t } = useTranslation();

  const html = "HTML5";
  const css = "CSS3";
  const js = "JavaScript";
  const react = "React.js";
  const ts = "Typescript";
  const api = "RESTful API";
  const graph = "GraphQL";
  const noSql = "MongoDB";
  const node = "Node.js";
  const sass = "SASS";
  const oauth = "OAuth";
  const test = "Jest/Cypress";

  const workCases = [
    {
      id: "01",
      name: "Audity Music - Spotify Clone",
      github: "https://github.com/Lucydct22/audity_react_app",
      link: "https://audity.dtpf.es",
      description: `${t("workCases_description_01")}`,
      image: case01img,
      tools: [
        react, ts, sass, node, api, noSql
      ]
    },
    {
      id: "02",
      name: "Github Ultimate - Repo Searcher",
      github: "https://github.com/joejoyjoy/react-github-repositories-with-search-graphql",
      link: "https://github-ultimate.netlify.app",
      description: `${t("workCases_description_02")}`,
      image: case02img,
      tools: [
        react, ts, sass, node, oauth, api, graph, test
      ]
    },
    {
      id: "03",
      name: "M&G - GIPHY Clone",
      github: "https://github.com/joejoyjoy/meme-webpage-frontend",
      link: "https://meme-gifs-page.netlify.app",
      description: `${t("workCases_description_03")}`,
      image: case03img,
      tools: [
        react, sass, node, api, noSql
      ]
    },
    {
      id: "04",
      name: "Hangman Game - Time For Fun",
      github: "https://github.com/joejoyjoy/assembler-projects/tree/main/Play_With_Assembler",
      link: "https://hangman-play-the-game.netlify.app",
      description: `${t("workCases_description_04")}`,
      image: case04img,
      tools: [
        html, css, js
      ]
    }
  ]

  return workCases;
}