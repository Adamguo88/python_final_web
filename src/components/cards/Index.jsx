import React from "react";

export default function Index(data) {
  // const {id,name,logo,qrcode,chanel,type,chanelIntro,language,backend,order,image,detailData} = data
  const { id, name, logo, chanel, chanelIntro, detailData } = data;
  return (
    <div
      className="col-xl-4 col-md-6 col-lg-6 col-12 m-space"
      onClick={() => detailData(id)}
    >
      <div className="m-card">
        <img
          className="card-img"
          src={
            logo
              ? logo && `../../${logo}`
              : `https://miracomosehace.com/wp-content/uploads/2020/06/error-web.jpg`
          }
          alt={name}
        />
        <div className="card-intro-text">
          <div className="chanel">{chanel}</div>
          <div className="card-intro">{chanelIntro}</div>
        </div>
      </div>
    </div>
  );
}
