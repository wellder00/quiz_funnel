import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_3.module.scss"
import { buttonsNames } from "../../constants/const"

const getLang = () => {
  const lang = (
    navigator.language ||
    navigator.userLanguage ||
    "en"
  ).toLowerCase()
  if (lang.startsWith("ru")) return "ru"
  if (lang.startsWith("es")) return "es"
  if (lang.startsWith("en")) return "en"
  return "en"
}

const getImageSrc = (lang, isMobile) => {
  if (lang === "ru") return isMobile ? "/phone3.png" : "/pc3.png"
  if (lang === "es") return isMobile ? "/ES/phone3_es.png" : "/ES/pc3_es.png"
  if (lang === "en") return isMobile ? "/EN/phone3_en.png" : "/EN/pc3_en.png"
  return isMobile ? "/EN/phone3_en.png" : "/EN/pc3.png"
}

const Screen_3 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [progress, setProgress] = useState(33)
  const [time, setTime] = useState(85) // Начальное значение времени

  const handleNext = () => {
    setProgress(66)
    navigate("/screen4")
  }

  const isMobile = window.innerWidth <= 680
  const lang = getLang()
  const imageSrc = getImageSrc(lang, isMobile)
  const buttonText = buttonsNames[lang]?.screen3 || buttonsNames.en.screen3

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ display: isImageLoaded ? "flex" : "none" }}
      >
        <img
          className={styles.img}
          src={imageSrc}
          onLoad={() => setIsImageLoaded(true)}
          alt="Variant"
        />
        <div className={styles.questionBox}>
          <input
            className={styles.input}
            type="range"
            min="0"
            max="96" // 96 интервалов по 15 минут (24 часа * 4 интервала в час)
            step="1" // Шаг равен 1 интервалу (15 минут)
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <span>{`${Math.floor(time / 4)}:${
            (time % 4) * 15 === 0 ? "00" : (time % 4) * 15
          }`}</span>
          {/* Преобразуем значение в часы и минуты */}
        </div>
        <button className={styles.button} type="button" onClick={handleNext}>
          {buttonText}
        </button>
        <ProgressBar progress={progress} lang={lang} />
      </div>
    </div>
  )
}

const ProgressBar = ({ progress, lang }) => (
  <div className={styles.progressBar}>
    <div className={styles.progressText}>
      {buttonsNames.progressBar[lang] || buttonsNames.progressBar.en}
    </div>
    <div className={styles.progressOuter}>
      <div className={styles.progressInner} style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  </div>
)

export default Screen_3
