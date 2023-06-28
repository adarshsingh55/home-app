import React from 'react'
import style from "./NoteGallery.module.css"
function NoteGallery() {
  return (
    <div className={style.container}>
      <input type="text" className={style.InputBox} />
    </div>
  )
}

export default NoteGallery
