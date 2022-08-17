import React from "react";
import style from "./Content.module.css";

const Contents3 = () => {
  return (
    <div className={style.textbox}>
      <h1 className={`${style.title} ${style.bkgBlack}`}>Back-End</h1>
      <h1 className={style.subtitle}>developer</h1>
      <h2 className={`${style.content} ${style.bkgBlack}`}>
        express, spring, 그리고 sql까지.
      </h2>
    </div>
  );
};

export default Contents3;
