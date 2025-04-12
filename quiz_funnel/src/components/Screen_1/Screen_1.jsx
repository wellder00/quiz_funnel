import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Screen_1.module.scss"
import slide1 from "/slide1.png"
import mobileImg from "/mobileImg.png"

const Screen_1 = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/screen2")
  }

  const isMobile = window.innerWidth <= 680
  const imageSrc = isMobile ? mobileImg : slide1

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={imageSrc} alt="Variant" />
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
