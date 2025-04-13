import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_4.module.scss"
import pc3 from "/pc3-1.png"
import phone3 from "/phone3-1.png"

const Screen_4 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(50)

  const handleAnswer = () => {
    setProgress(100)
  }

    const handleSubmit = (event) => {
      event.preventDefault()
      navigate("/screen6")
    }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? phone3 : pc3

  return (
    <div className={styles.container}>
      <form className={styles.formBox}>
        <div className={styles.questionBox}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={imageSrc} alt="Variant" />
            {/* <div className={styles.questionBody}>
              У вас есть ритуалы перед сном ребенка?
            </div> */}
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
