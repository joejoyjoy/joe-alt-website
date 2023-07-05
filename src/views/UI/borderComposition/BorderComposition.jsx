import { useTranslation } from "react-i18next";
import './borderComposition.scss'

const BorderComposition = ({ style, type }) => {
  const { i18n } = useTranslation();

  return (
    <svg
      height={type === "textarea" ? "calc(2rem + 114px)" : "64"}
      width="clamp(calc(232px + 2rem), calc(100vw - 3rem + 16px), 454px)"
      xmlns="http://www.w3.org/2000/svg"
      className="border-composition"
    >
      <rect
        className={
          `border-composition__shape${style ? " filledIn" : ""}${type === "textarea" ? " text-area-type" : ""}${i18n.language === "es" ? " spanish-shape" : ""}`
        }
        x="2"
        y="2"
        height={
          type === "textarea" ? "calc(2rem + 110px)" : "60"
        }
        width="clamp(calc(227px + 2rem), calc(100vw - 3rem + 14px), 450px)"
        rx="4px"
        ry="4px"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BorderComposition