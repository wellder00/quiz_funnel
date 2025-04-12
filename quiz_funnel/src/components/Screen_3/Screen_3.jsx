import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_3.module.scss"
import slide1 from "/slide1.png"
import mobileImg from "/mobileImg.png"
const Screen_3 = () => {
  const navigate = useNavigate()

  const [progress, setProgress] = useState(33)
  const [time, setTime] = useState(20)

  const handleNext = () => {
    setProgress(66)
    navigate("/screen4")
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? mobileImg : slide1

  return (
    <div className={styles.container}>
      <form className={styles.formBox}>
        <div className={styles.questionBox}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={imageSrc} alt="Variant" />
            {/* <div className={styles.questionBody}>
                        Плачет ли ваш ребенок перед тем, как вы его укладываете спать?
                      </div> */}
            <div className={styles.buttonsRow}>
              <button
                className={styles.button}
                type="button"
                onClick={handleNext}
              >
                Далее
              </button>
            </div>
          </div>
          <div className={styles.questionBox}> 
            <div className={styles.questionBody}>
              Во сколько времени вы его укладываете спать?
            </div>
            <input 
            className={styles.input}
              type="range"
              min="0"
              max="23"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <span>{`${time}:00`}</span>
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

export default Screen_3
