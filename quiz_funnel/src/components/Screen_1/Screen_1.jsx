import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_1.module.scss"
import pc1 from "/pc1.png"
import phone1 from "/phone1.png"

const Screen_1 = () => {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleSubmit = (event) => {
    setIsImageLoaded(false)
    event.preventDefault()
    navigate("/screen2")
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? phone1 : pc1

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ display: isImageLoaded ? "block" : "none" }}
      >
        <img
          className={styles.img}
          src={imageSrc}
          alt="Variant"
          onLoad={() => setIsImageLoaded(true)}
        />
        <form onSubmit={handleSubmit}>
          <button className={styles.button} type="submit">
            Пройти
          </button>
        </form>
      </div>
    </div>
  )
}

export default Screen_1
