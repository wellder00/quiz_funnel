import React from "react"
import styles from "./Screen_5.module.scss"

const Screen_5 = () => {
  return (
    <div className={styles.container}>
      <h1>Что поможет вашему ребенку лучше засыпать:</h1>
      <p>
        Четкие ритуалы перед сном, чтобы успокоить ребенка после активного дня
      </p>
      <p>Необходимо убрать внешние раздражители (яркий свет, громкие звуки)</p>
      <p>Сказка на ночь</p>
      <h2>
        ТОП приложений, где собраны лучшие сказки на ночь для вашего ребенка:
      </h2>

      <div className={styles.appList}>
        {/* Ваше приложение */}
        <div className={styles.appItem}>
          <a
            href="https://yourapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./icon1.png"
              alt="Fairy tales"
              className={styles.appIcon}
            />
          </a>
          <p>Fairy tales</p>
          <div className={styles.stars}>★★★★★</div>
        </div>

        {/* Другое приложение 1 */}
        <div className={styles.appItem}>
          <img
            src="./icon2.png"
            alt="Приложение 1"
            className={`${styles.appIcon} ${styles.blurred}`}
          />
          <p>Приложение 1</p>
          <div className={styles.stars}>★★★☆☆</div>
        </div>

        {/* Другое приложение 2 */}
        <div className={styles.appItem}>
          <img
            src="./icon3.png"
            alt="Приложение 2"
            className={`${styles.appIcon} ${styles.blurred}`}
          />
          <p>Приложение 2</p>
          <div className={styles.stars}>★★☆☆☆</div>
        </div>
      </div>
    </div>
  )
}

export default Screen_5
