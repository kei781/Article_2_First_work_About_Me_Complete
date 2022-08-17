import React from "react";
import style from "./Footer.module.css";

const Footers1 = () => {
  return (
    <div className={style.footerContents}>
      <div className={style.footerTitle}>Full-stack을 지향합니다.</div>
      <div className={style.footerTitle}>
        Front, back, db까지. 다양한 것들을, 다양하게 수행합니다.
      </div>
    </div>
  );
};

export default Footers1;
