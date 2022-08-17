import React from "react";
import Contents1 from "./Contents1";
import Contents2 from "./Contents2";
import Contents3 from "./Contents3";
import Contents4 from "./Contents4";

const Content = ({ number }) => {
  const ContentsList = {
    1: <Contents1 />,
    2: <Contents2 />,
    3: <Contents3 />,
    4: <Contents4 />,
  };
  return <>{ContentsList[number]}</>;
};

export default Content;
