import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_6.module.scss"
import pc4 from "/pc4.png"
import phone4 from "/phone4.png"

const Screen_6 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [progress, setProgress] = useState(80)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      navigate("/screen5")
    }, 1000)
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? phone4 : pc4

  return (
    <div className={styles.container}>
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
                style={{ display: isImageLoaded ? "block" : "none" }}
              />
              {!isImageLoaded && <div className={styles.loader}></div>}
              <button
                className={`${styles.button} ${styles.topLeft}`}
                type="button"
                onClick={handleSubmit}
              >
                Включаю мультфильм
              </button>
              <button
                className={`${styles.button} ${styles.topRight}`}
                type="button"
                onClick={handleSubmit}
              >
                Читаю сказку
              </button>
              <button
                className={`${styles.button} ${styles.bottomLeft}`}
                type="button"
                onClick={handleSubmit}
              >
                Ничего не делаю
              </button>
              <button
                className={`${styles.button} ${styles.bottomRight}`}
                type="button"
                onClick={handleSubmit}
              >
                Свой вариант
              </button>
              <div className={styles.progressBar}>
                <div className={styles.progressText}>
                  Прогресс по заполнению
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
