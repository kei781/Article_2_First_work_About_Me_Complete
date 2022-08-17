import "../app.css";
import style from "./Main.module.css";
import React from "react";
import Yeom from "../YeomCompornents/Yeom";
import Noh from "../NohCompornents/Noh";
import Lee from "../LeeCompornents/Lee";
import Park from "../ParkCompornents/Park";

const MainContent = ({ name }) => {
  const menuList = {
    1: <Yeom />,
    2: <Noh />,
    3: <Lee />,
    4: <Park />,
  };

  return (
    <div>
      <div className={style.wrap}>
        <div className={style.headLine}>
          <a href="./app.jsx">2조 자기소개 exam 사이트</a>
        </div>
        <div className={style.contentArea}>{menuList[name]}</div>
      </div>
    </div>
  );
};

export default MainContent;
