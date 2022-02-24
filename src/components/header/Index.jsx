import React from "react";
import "./header.css";

const Index = () => {
  const goTop = () => {
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    })
  }
  return <div className="m-h">
    <span className="goTop" onClick={goTop}>PYTHON進階與人文應用</span>
  </div>;
};

export default Index;
