import React from 'react'
import style from "./ImgGallery.module.css"
import logo from './logo.svg'
function ImgGallery() {
  return (
    <div className={style.container}>
    <img className={style.logoImg} src={logo} alt="sorry" />
    </div>
  )  
}

export default ImgGallery
