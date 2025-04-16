import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_2.module.scss"
import pc2 from "/pc2.png"
import phone2 from "/phone2.png"

const Screen_2 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const [progress, setProgress] = useState(0)

  const handleSubmit = (event) => {
    setIsImageLoaded(false)
    event.preventDefault()
    navigate("/screen3")
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? phone2 : pc2

  return (
    <div
      className={styles.container}
      style={{ display: isImageLoaded ? "block" : "none" }}
    >
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <div className={styles.questionBox}>
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
                Да
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={handleSubmit}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.progressBar}
          
        >
          <div className={styles.progressText}>Прогресс по заполнению</div>
          <div className={styles.progressOuter}>
            <div
              className={styles.progressInner}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Screen_2
