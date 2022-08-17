import React from "react";
import style from "./Start.module.css";
const Start = ({ setStart, setName }) => {
  return (
    <div className={style.Home}>
      <div className={`${style.Yeom} ${style.ProfilePicture}`}>
        <div
          className={style.shadow}
          onClick={() => {
            setName(1);
            setStart(1);
          }}
        >
          <div className={style.name}>yeom</div>
        </div>
      </div>
      <div className={`${style.Noh} ${style.ProfilePicture}`}>
        <div
          href="./MainContent.js"
          className={style.shadow}
          onClick={() => {
            setName(2);
            setStart(1);
          }}
        >
          <div className={style.name}>Noh</div>
        </div>
      </div>
      <div className={`${style.Lee} ${style.ProfilePicture}`}>
        <div
          href="./MainContent.js"
          className={style.shadow}
          onClick={() => {
            setName(3);
            setStart(1);
          }}
        >
          <div className={style.name}>Lee</div>
        </div>
      </div>
      <div className={`${style.Park} ${style.ProfilePicture}`}>
        <div
          href="./MainContent.js"
          className={style.shadow}
          onClick={() => {
            setName(4);
            setStart(1);
          }}
        >
          <div className={style.name}>Park</div>
        </div>
      </div>
    </div>
  );
};

export default Start;
