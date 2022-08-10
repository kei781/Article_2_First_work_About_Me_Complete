import React, { useEffect, useState } from "react";
import "./style.css";
import Noh from "./NohCompornents//Noh";
import Lee from "./LeeCompornents/Lee";
import Park from "./ParkCompornents//Park";
import Yeom from "./YeomCompornents//Yeom";
import MainContent from "./MainContent";

function App() {
  const [name, setName] = useState([0]);

  const menuList = {
    0: <MainContent />,
    1: <Yeom />,
    2: <Noh />,
    3: <Lee />,
    4: <Park />,
  };

  const changeMenu = (menuIndex) => {
    menuList({ menu: menuIndex });
  };

  return (
    <div>
      <div className="wrap">
        <div className="headLine">
          <div
            className={`${name === 0 ? "active" : ""}`}
            onClick={() => changeMenu(setName(0))}
          >
            2조 자기소개 exam 사이트
          </div>
        </div>

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
        <div className="contentArea">{menuList[name]}</div>
      </div>
    </div>
  );
}

export default App;
