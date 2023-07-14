import React from "react";


import style from "./SideNav.module.css";
import checkList from "./checkList.svg"
import note from "./note.svg"
function SideNav() {
  return (
    <div className={style.SideNavContainer}>
      <div className={style.SideNav} >
        <div className={style.ImgBox}>
        <img src={checkList} alt="sory" />
        </div>
        <div className={style.ImgBox}>
        <img src={note} alt="sory" />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
