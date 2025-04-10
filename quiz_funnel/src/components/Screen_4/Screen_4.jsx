import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_4.module.scss"

const Screen_4 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(60)

  const handleAnswer = () => {
    setProgress(100)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/screen6") 
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <div className={styles.questionBox}>
          <div className={styles.questionHeader}>Вопрос 3</div>
          <div className={styles.questionBody}>
            У вас есть ритуалы перед сном ребенка?
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsRow}>
            <button type="submit" onClick={handleAnswer}>
              Да
            </button>
            <button type="submit" onClick={handleAnswer}>
              Нет
            </button>
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
    </div>
  )
}

export default Screen_4
