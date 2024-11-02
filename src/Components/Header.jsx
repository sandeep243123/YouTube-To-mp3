import React from 'react'
import logo from './css/logo.png'
import style from "./css/Header.module.css"
function Header() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} className={style.img} alt="" />
        <h2 className={style.logoName}>Audio Tube Converter</h2>
      </div>
    </>
  )
}

export default Header
