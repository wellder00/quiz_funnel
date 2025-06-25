import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_1.module.scss"
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
  if (lang === "ru") return isMobile ? "/phone1.png" : "/pc1.png"
  if (lang === "es") return isMobile ? "/ES/phone1_es.png" : "/ES/pc1_es.png"
  if (lang === "en") return isMobile ? "/EN/phone1_en.png" : "/EN/pc1_en.png"
  return isMobile ? "/EN/phone1_en.png" : "/EN/pc1.png"
}

const Screen_1 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleSubmit = (event) => {
    setIsImageLoaded(false)
    event.preventDefault()
    if (window.fbq) window.fbq("trackCustom", "StartQuiz")
    navigate("/screen2")
  }

  const isMobile = window.innerWidth <= 680
  const lang = getLang()
  const imageSrc = getImageSrc(lang, isMobile)
  const buttonText = buttonsNames[lang]?.screen1 || buttonsNames.en.screen1

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ display: isImageLoaded ? "block" : "none" }}
      >
        <img
          className={styles.img}
          src={imageSrc}
          alt="Variant"
          onLoad={() => setIsImageLoaded(true)}
        />
        <form onSubmit={handleSubmit}>
          <button className={styles.button} type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Screen_1
