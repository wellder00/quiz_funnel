import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_6.module.scss"
import pc4 from "/pc4.png"
import phone4 from "/phone4.png"

const Screen_6 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(80)
  const [isLoading, setIsLoading] = useState(false)

  const handleAnswer = () => {
    setProgress(100)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
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
              <img className={styles.img} src={imageSrc} alt="Variant" />
              
              <div className={styles.buttonsRow}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleSubmit}
                >
                  Включаю мультфильм
                </button>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleSubmit}
                >
                  Читаю сказку
                </button>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleSubmit}
                >
                  Ничего не делаю
                </button>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleSubmit}
                >
                  Свой вариант
                </button>
              </div>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressText}>Прогресс по заполнению</div>
            <div className={styles.progressOuter}>
              <div
                className={styles.progressInner}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Screen_6
