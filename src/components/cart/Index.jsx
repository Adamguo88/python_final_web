import React, { useState, useEffect } from "react";
import Card from "../cards/Index";

import Data from "../../data/data";
import Detail from "../detail/Index";

import "./cart.css";

export default function Index() {
  const [data, setData] = useState(Data);
  const [show,setIsShow] = useState(false)
  const [dataid,setDataId] = useState(null)


  useEffect(() => {
    setData(Data);
  }, [data]);

  const detailData = (id) => {
    setIsShow(true)
    setDataId(id)
  };

  const closeDetail = (isOpen)=>{
    setIsShow(isOpen)
  }

  return (
    <div className="my-cart">
      <div className="container">
        <div className="cart-intro">學生作品</div>
        <div className="cards">
          {data.map((item) => {
            return (
              <Card key={item.id} {...item} detailData={detailData}></Card>
            );
          })}
        </div>
      </div>
      <Detail id={dataid} show={show} closeDetail={closeDetail}/>
    </div>
  );
}
