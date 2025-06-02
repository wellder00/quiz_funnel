import React, { useState } from "react"
import styles from "./Screen_5.module.scss"
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
  if (lang === "ru") return isMobile ? "/phone5.png" : "/pc5.png"
  if (lang === "es") return isMobile ? "/ES/phone5_es.png" : "/ES/pc5_es.png"
  if (lang === "en") return isMobile ? "/EN/phone5_en.png" : "/EN/pc5_en.png"
  return isMobile ? "/EN/phone5_en.png" : "/EN/pc5.png"
}

const getAppNames = (lang) => {
  if (lang === "es") {
    return [
      "Bedtime Books－Stories",
      "Biblioteca de Sueños",
      "Lecturas de Luna",
    ]
  }
  if (lang === "ru") {
    return ["Bedtime Books－Stories", "DreamTale Library", "Moonlight Reads"]
  }
  // en и по умолчанию
  return ["Bedtime Books－Stories", "DreamTale Library", "Moonlight Reads"]
}

const Screen_5 = () => {
  const isMobile = window.innerWidth <= 680
  const lang = getLang()
  const imageSrc = getImageSrc(lang, isMobile)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const appNames = getAppNames(lang)

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ display: isImageLoaded ? "block" : "none" }}
      >
        <img
          className={styles.img}
          src={imageSrc}
          onLoad={() => setIsImageLoaded(true)}
          alt="Variant"
        />
        <div className={styles.appList}>
          <a
            className={`${styles.appItem} ${styles.pulse}`}
            href="https://apps.apple.com/us/app/bedtime-books-stories/id6477703850"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.appIcon}
              src="./icon.webp"
              alt={appNames[0]}
            />
            <p className={`${styles.appName} ${styles.pulseText}`}>
              {appNames[0]}
            </p>
            <div className={styles.stars}>★★★★★</div>
          </a>
          <div className={styles.appItem}>
            <img
              src="./icon2.jpg"
              alt={appNames[1]}
              className={`${styles.appIcon} ${styles.blurred}`}
            />
            <p className={styles.appName}>{appNames[1]}</p>
            <div className={styles.stars}>★★★☆☆</div>
          </div>
          <div className={styles.appItem}>
            <img
              src="./icon3.jpg"
              alt={appNames[2]}
              className={`${styles.appIcon} ${styles.blurred}`}
            />
            <p className={styles.appName}>{appNames[2]}</p>
            <div className={styles.stars}>★★☆☆☆</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen_5
