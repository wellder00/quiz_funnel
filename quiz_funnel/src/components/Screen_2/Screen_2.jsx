import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_2.module.scss"
import pc2 from "/pc2.png"
import phone2 from "/phone2.png"

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
  const imageSrc = isMobile ? phone2 : pc2

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
        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}

const ProgressBar = ({ progress }) => (
  <div className={styles.progressBar}>
    <div className={styles.progressText}>Прогресс по заполнению</div>
    <div className={styles.progressOuter}>
      <div className={styles.progressInner} style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  </div>
)

export default Screen_2
