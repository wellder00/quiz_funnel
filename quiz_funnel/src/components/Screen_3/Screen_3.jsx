import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_3.module.scss"
import phone3 from "/phone3.png"
import pc3 from "/pc3.png"

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
  const imageSrc = isMobile ? phone3 : pc3

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
          Далее
        </button>
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

export default Screen_3
