import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_2.module.scss"
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
  if (lang === "ru") return isMobile ? "/phone2.png" : "/pc2.png"
  if (lang === "es") return isMobile ? "/ES/phone2_es.png" : "/ES/pc2_es.png"
  if (lang === "en") return isMobile ? "/EN/phone2_en.png" : "/EN/pc2_en.png"
  return isMobile ? "/EN/phone2_en.png" : "/EN/pc2.png"
}

const Screen_2 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [progress, setProgress] = useState(10)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsImageLoaded(false)
    navigate("/screen3")
  }

  const isMobile = window.innerWidth <= 680
  const lang = getLang()
  const imageSrc = getImageSrc(lang, isMobile)
  const yesText =
    buttonsNames[lang]?.screen2?.yes || buttonsNames.en.screen2.yes
  const noText = buttonsNames[lang]?.screen2?.no || buttonsNames.en.screen2.no

  return (
    <div
      className={styles.container}
      style={{ display: isImageLoaded ? "flex" : "none" }}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={imageSrc}
          alt="Variant"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className={styles.buttonsRow}>
          <button
            className={styles.button}
            type="button"
            onClick={handleSubmit}
          >
            {yesText}
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={handleSubmit}
          >
            {noText}
          </button>
        </div>
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

export default Screen_2
