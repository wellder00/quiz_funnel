import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_2.module.scss"
import slide1 from "/slide1.png"
import mobileImg from "/mobileImg.png"

const Screen_2 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/screen3")
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? mobileImg : slide1

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <div className={styles.questionBox}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={imageSrc} alt="Variant" />
            {/* <div className={styles.questionBody}>
              Плачет ли ваш ребенок перед тем, как вы его укладываете спать?
            </div> */}
            <div className={styles.buttonsRow}>
              <button className={styles.button} type="button" onClick={handleSubmit}>
                Да
              </button>
              <button className={styles.button} type="button" onClick={handleSubmit}>
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

export default Screen_2
