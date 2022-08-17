import React from "react";
import style from "./Content.module.css";

const Contents1 = () => {
  return (
    <div className={style.textbox}>
      <div className={style.title}>Developer</div>
      <div className={style.subtitle}>Noh</div>
      <div className={`${style.content} ${style.bkgBlack}`}>
        이정도 디자인은 너끈합니다.
        <br />
        물론, 그렇다고 React가 마냥 쉽다고는 하지않겠습니다.
        <br />
        우측 하단 버튼을 눌러 진행해주세요.
      </div>
    </div>
  );
};

export default Contents1;
