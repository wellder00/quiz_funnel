import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_3.module.scss"

const Screen_3 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(33)
  const [time, setTime] = useState(20)

  const handleNext = () => {
    setProgress(66) // Обновляем прогресс
    navigate("/screen4") // Переход на следующий экран
  }

  return (
    <div className={styles.container}>
      <form className={styles.formBox}>
        <div className={styles.questionBox}>
          <div className={styles.questionHeader}>Вопрос 2</div>
          <div className={styles.questionBody}>
            Во сколько времени вы его укладываете спать?
          </div>
          <input
            type="range"
            min="0"
            max="23"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <span>{`${time}:00`}</span>
        </div>

        <div className={styles.buttonsRow}>
          <button type="button" onClick={handleNext}>
            Далее
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
    </div>
  )
}

export default Screen_3
