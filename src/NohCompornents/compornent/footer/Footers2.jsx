import React from "react";
import style from "./Footer.module.css";

const Footers2 = () => {
  return (
    <div className={style.footerContents}>
      <div className={style.footerTitle}>skills available now</div>
      <div className={style.footerTitle}>
        html, css, js는 기본입니다. <br /> 물론, React도.
      </div>
    </div>
  );
};

export default Footers2;
