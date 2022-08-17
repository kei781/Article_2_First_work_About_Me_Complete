import React from "react";
import style from "./Content.module.css";

const Contents4 = () => {
  return (
    <div className={style.textbox}>
      <h1 className={`${style.title} ${style.bkgBlack}`}>Full-stack</h1>
      <h1 className={style.subtitle}>developer</h1>
      <h2 className={`${style.content} ${style.bkgBlack}`}>
        보시는 바와 같이, 맞습니다. 개발자로써 미숙합니다. 그렇기에 늘 정진하고
        노력합니다.
      </h2>
    </div>
  );
};

export default Contents4;
