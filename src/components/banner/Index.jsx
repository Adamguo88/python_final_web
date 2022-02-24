import React from "react";
import "./banner.css";

export default function Index() {
  return (
    <div className="m-b">
      <div className="banner-logo">
        <img
          className="logo-style"
          src="https://1.bp.blogspot.com/-iUyGyTGrBbo/Xm3vc3A_2sI/AAAAAAAAG6w/yx2XQxIFiXMZVmmryeySkRnspbwnD9LfACEwYBhgL/s1600/Python%2Bprogramming.png"
          alt=""
        />
        <div className="c-w intro-text">PYTHON進階與人文應用</div>
        <div className="c-w intro-class">智慧人文跨域整合設計微學分學程</div>
        <div className="c-w intro-teacher">授課教師: 梁丁文</div>
      </div>
    </div>
  );
}
