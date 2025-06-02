import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_6.module.scss"
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
  if (lang === "ru") return isMobile ? "/phone4.png" : "/pc4.png"
  if (lang === "es") return isMobile ? "/ES/phone4_es.png" : "/ES/pc4_es.png"
  if (lang === "en") return isMobile ? "/EN/phone4_en.png" : "/EN/pc4_en.png"
  return isMobile ? "/EN/phone4_en.png" : "/EN/pc4.png"
}

const Screen_6 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [progress] = useState(80)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      navigate("/screen5")
    }, 1000)
  }

  const isMobile = window.innerWidth <= 680
  const lang = getLang()
  const imageSrc = getImageSrc(lang, isMobile)
  const btns = buttonsNames[lang]?.screen5 || buttonsNames.en.screen5

  return (
    <div
      className={styles.container}
      style={{ display: isImageLoaded ? "flex" : "none" }}
    >
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formBox}>
          <div className={styles.questionBox}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={imageSrc}
                onLoad={() => setIsImageLoaded(true)}
                alt="Variant"
              />
              {!isImageLoaded && <div className={styles.loader}></div>}
              <button
                className={`${styles.button} ${styles.topLeft}`}
                type="button"
                onClick={handleSubmit}
              >
                {btns.topRight}
              </button>
              <button
                className={`${styles.button} ${styles.topRight}`}
                type="button"
                onClick={handleSubmit}
              >
                {btns.topLeft}
              </button>
              <button
                className={`${styles.button} ${styles.bottomLeft}`}
                type="button"
                onClick={handleSubmit}
              >
                {btns.bottomLeft}
              </button>
              <button
                className={`${styles.button} ${styles.bottomRight}`}
                type="button"
                onClick={handleSubmit}
              >
                {btns.bottomRight}
              </button>
              <div className={styles.progressBar}>
                <div className={styles.progressText}>
                  {buttonsNames.progressBar[lang] ||
                    buttonsNames.progressBar.en}
                </div>
                <div className={styles.progressOuter}>
                  <div
                    className={styles.progressInner}
                    style={{ width: `${progress}%` }}
                  >
                    {progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Screen_6
