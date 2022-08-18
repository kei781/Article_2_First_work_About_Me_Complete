import React from "react";
import style from "./Start.module.css";
const Start = ({ setStart, setName }) => {
  // <Start /> 컴포넌트의 기능은 다음과 같음.
  // ui클릭시, setStart를 통해 start 변수를 무조건 1로 만듬(1로만들면 <Start />대신 <Main />이 실행됨.)
  // ui클릭시, setName을 통해 이름에 해당하는 컴포넌트를 호출하도록 도와줌.(name에 해당하는 컴포넌트는 Main에서 호출함.)
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
