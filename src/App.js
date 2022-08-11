import React, { useState } from "react";
import "./style.css";
import Noh from "./NohCompornents//Noh";
import Lee from "./LeeCompornents/Lee";
import Park from "./ParkCompornents//Park";
import Yeom from "./YeomCompornents//Yeom";
import MainContent from "./MainContent";

function App() {
  /* name에는 원하는 메뉴를 숫자로 입력받음. */
  const [name, setName] = useState([0]);

  /* menulist에서는 출력해야할 메뉴를 숫자로 지정했음.*/
  const menuList = {
    0: <MainContent />,
    1: <Yeom />,
    2: <Noh />,
    3: <Lee />,
    4: <Park />,
  };
  // name에는 원하는 메뉴를 숫자로 입력받고
  // menulist에서는 출력해야할 메뉴를 숫자로 지정했음.
  // changeMenu는 name에 해당하는 메뉴를 출력함.
  const changeMenu = (menuIndex) => {
    menuList({ menu: menuIndex });
  };

  return (
    <div>
      <div className="wrap">
        {/* 시작 제목입니다.*/}
        <div className="headLine">
          <div
            className={`${name === 0 ? "active" : ""}`}
            onClick={() => changeMenu(setName(0))}
          >
            2조 자기소개 exam 사이트
          </div>
        </div>
        {/* 끝 제목입니다.*/}

        {/* 시작 상단 메뉴입니다.*/}
        <div className="menuBar">
          <ul className="tabs">
            <li
              className={`${name === 1 ? "active" : ""}`}
              onClick={() => changeMenu(setName(1))}
            >
              Yeom
            </li>
            <li
              className={`${name === 2 ? "active" : ""}`}
              onClick={() => changeMenu(setName(2))}
            >
              Noh
            </li>
            <li
              className={`${name === 3 ? "active" : ""}`}
              onClick={() => changeMenu(setName(3))}
            >
              Lee
            </li>
            <li
              className={`${name === 4 ? "active" : ""}`}
              onClick={() => changeMenu(setName(4))}
            >
              Park
            </li>
          </ul>
        </div>
        {/* 끝 상단 메뉴입니다.*/}

        {/* 시작 메뉴가 출력되는 컨텐츠 구역입니다. */}
        <div className="contentArea">{menuList[name]}</div>
        {/* 끝 메뉴가 출력되는 컨텐츠 구역입니다. */}
      </div>
    </div>
  );
}

export default App;
