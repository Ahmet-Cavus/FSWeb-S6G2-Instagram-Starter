import { useState } from "react";

const YorumEkle = (props) => {
  const { yorumEkle } = props;
  const [yorumMetni, setYorumMetni] = useState("");

  return (
    <div className="yorum-ekle comment-text">
      <input
        type="text"
        placeholder="Yorum ekle..."
        onChange={(event) => setYorumMetni(event.target.value)}
      />
      <button onClick={() => yorumEkle(yorumMetni)}>Yorum Ekle</button>
    </div>
  );
};

export default YorumEkle;
