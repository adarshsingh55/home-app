import React from 'react'
import style from './TopNavbar.module.css'


function TopNavbar() {
  return (
    <div><div className={style.topnav}>
    <a className={style.active} href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  
  <div>
    <h2>Top Navigation Example</h2>
    <p>Some content..</p>
  </div></div>
  )
}

export default TopNavbar