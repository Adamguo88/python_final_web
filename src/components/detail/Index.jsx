import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./detail.css";

import Data from "../../data/data";

export default function Index({ id, show, closeDetail }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (id && show) {
      const finalResult = Data.find((item) => item.id === Number(id));
      setResult(finalResult);
    }
  }, [id, show]);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => closeDetail(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg" className="detail-text">
          {result.chanel ? result.chanel : "暫無"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailBox">
          <div className="d-flex flex-column justify-content-center d-item-style">
            <img
              className="d-logo"
              src={
                result.logo
                  ? `../../${result.logo}`
                  : `https://miracomosehace.com/wp-content/uploads/2020/06/error-web.jpg`
              }
              alt=""
            />
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">開發設計者</div>
            <div className="detail-item-intro">
              {result.name ? result.name : "暫無"}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">應用類型</div>
            <div className="detail-item-intro">
              {result.type ? result.type : "暫無"}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">二維條碼</div>
            <img
              className="d-logo"
              src={
                result.qrcode
                  ? `../../${result.qrcode}`
                  : `https://miracomosehace.com/wp-content/uploads/2020/06/error-web.jpg`
              }
              alt=""
            />
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">頻道介紹</div>
            <div className="detail-item-intro">
              {result.chanelIntro ? result.chanelIntro : "暫無"}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">程式語言</div>
            <div className="detail-item-intro">
              {result.language ? result.language : "暫無"}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">後端平台</div>
            <div className="detail-item-intro">
              {result.backend ? result.backend : "暫無"}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">指令介紹</div>
            {result.order
              ? result.order.map((item, index) => {
                  return (
                    <div className="detail-item-intro" key={index}>
                      {item}
                    </div>
                  );
                })
              : "暫無"}
          </div>
          <div className="d-flex flex-column justify-content-center d-item-style">
            <div className="d-intro">圖片展示</div>
            {result.image ? (
              <div className="d-flex flex-column align-items-center">
                {result.image.map((item, index) => {
                  return (
                    <img
                      className="d-logo pb-5"
                      key={index}
                      src={`../../${item}`}
                      alt=""
                    />
                  );
                })}
              </div>
            ) : (
              "目前沒圖片"
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
