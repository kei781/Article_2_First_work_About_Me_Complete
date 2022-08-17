import Footer from "./footer/Footer";
import Header from "./header/Header";
import Content from "./contents/Content";
import React, { useState } from "react";
import style from "./Layout.module.css";

const Layout = () => {
  const [number, setnumber] = useState([1]);

  const bckimgList = {
    1: style.backgrond1,
    2: style.backgrond2,
    3: style.backgrond3,
    4: style.backgrond4,
  };

  return (
    <div className={`${style.Layout} ${bckimgList[number]}`}>
      {/* <div className={`${style.Layout} ${style.backgrond1}`}> */}
      <Header />
      <main className={style.main}>
        <Content number={number} />
      </main>
      <Footer number={number} setnumber={setnumber} />
    </div>
  );
};

export default Layout;
