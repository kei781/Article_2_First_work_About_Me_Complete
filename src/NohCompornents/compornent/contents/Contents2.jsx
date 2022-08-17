import React from "react";
import style from "./Content.module.css";

const Contents2 = () => {
  return (
    <div className={style.textbox}>
      <h1 className={`${style.title} ${style.bkgBlack}`}>Front-end</h1>
      <h1 className={style.subtitle}>developer</h1>
      <h2 className={style.content}>
        지금은, react외에는 할줄 모릅니다. 하지만 어디까지나 '지금은'요
      </h2>
    </div>
  );
};

export default Contents2;
