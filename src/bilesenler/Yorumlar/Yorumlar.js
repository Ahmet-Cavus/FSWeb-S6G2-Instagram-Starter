import React from "react";
import Yorum from "./Yorum";
import YorumEkle from "./YorumEkle";

import "./Yorumlar.css";

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar, yorumEkle } = props;

  return (
    <div>
      {yorumlar.map((yorum) => (
        <Yorum yorum={yorum} />
      ))}
      <YorumEkle yorumEkle={yorumEkle} />
    </div>
  );
};

export default Yorumlar;
