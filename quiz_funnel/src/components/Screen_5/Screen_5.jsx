import React, { useState } from "react"
import styles from "./Screen_5.module.scss"
import pc5 from "/pc5.png"
import phone5 from "/phone5.png"

const Screen_5 = () => {
  const isMobile = window.innerWidth <= 726
  const imageSrc = isMobile ? phone5 : pc5
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ display: isImageLoaded ? "block" : "none" }}
      >
        <img
          className={styles.img}
          src={imageSrc}
          onLoad={() => setIsImageLoaded(true)}
          alt="Variant"
        />
        <div className={styles.appList}>
          <div className={styles.appItem}>
            <a
              href="https://apps.apple.com/us/app/bedtime-books-stories/id6477703850"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.appIcon}
                src="./icon.webp"
                alt="Fairy tales"
              />
            </a>
            <p className={styles.appName}>Bedtime Books－Stories</p>
            <div className={styles.stars}>★★★★★</div>
          </div>
          <div className={styles.appItem}>
            <img
              src="./icon2.jpg"
              alt="Приложение 1"
              className={`${styles.appIcon} ${styles.blurred}`}
            />
            <p className={styles.appName}>DreamTale Library</p>
            <div className={styles.stars}>★★★☆☆</div>
          </div>
          <div className={styles.appItem}>
            <img
              src="./icon3.jpg"
              alt="Приложение 2"
              className={`${styles.appIcon} ${styles.blurred}`}
            />
            <p className={styles.appName}>Moonlight Reads</p>
            <div className={styles.stars}>★★☆☆☆</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen_5
