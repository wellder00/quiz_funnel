import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_6.module.scss"

const Screen_6 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(80)
  const [isLoading, setIsLoading] = useState(false) 

  const handleAnswer = () => {
    setProgress(300)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false) 
      navigate("/screen5") 
    }, 1000) 
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}></div> 
      ) : (
        <form onSubmit={handleSubmit} className={styles.formBox}>
          <div className={styles.questionBox}>
            <div className={styles.questionHeader}>Вопрос 4</div>
            <div className={styles.questionBody}>Что вы делаете перед сном:</div>
          </div>

          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsRow}>
              <button type="button" onClick={handleAnswer}>
                Включаю мультфильм
              </button>
              <button type="button" onClick={handleAnswer}>
                Читаю сказку
              </button>
              <button type="button" onClick={handleAnswer}>
                Ничего не делаю
              </button>
              <button type="button" onClick={handleAnswer}>
                Свой вариант
              </button>
            </div>
            <button type="submit" className={styles.recommendationButton}>
              Получить рекомендации
            </button>
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
