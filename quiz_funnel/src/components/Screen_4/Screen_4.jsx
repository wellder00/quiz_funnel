import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_4.module.scss"
import pc3 from "/pc3-1.png"
import phone3 from "/phone3-1.png"

const Screen_4 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [progress, setProgress] = useState(50)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsImageLoaded(false)
    navigate("/screen6")
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? phone3 : pc3

  return (
    <div
      className={styles.container}
      style={{ display: isImageLoaded ? "flex" : "none" }}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={imageSrc}
          onLoad={() => setIsImageLoaded(true)}
          alt="Variant"
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

export default Screen_4
