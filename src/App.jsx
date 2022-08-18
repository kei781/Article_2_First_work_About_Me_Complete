import React, { useState } from "react";
import "./app.css";
import Start from "./LayoutCompornents/Start";
import Main from "./LayoutCompornents/Main";

function App() {
  // 시작하면 start값이 0이므로, <Start />를 실행함.
  // <Start />에서 ui를 누르면 무조건 start의 값은 1로 변경
  // <Start />에서 ui를 누르면 name의 값은 해당하는 값이 입력됨.
  // <Main />은 <Start />로 되돌아가기와, name값에 해당하는 <이름 />컴포넌트를 출력함.
  const [start, setStart] = useState([0]);
  const [name, setName] = useState([0]);
  const startList = {
    0: <Start name={name} setStart={setStart} setName={setName} />,
    1: <Main setStart={setStart} name={name} />,
  };
  return startList[start];
}

export default App;
