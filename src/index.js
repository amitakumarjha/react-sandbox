import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";

ReactDom.render(
  <div>
    <Header />
    <MyInfo />
    <Footer />
  </div>,
  document.getElementById("app")
);
