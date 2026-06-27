import { useState } from "react";
import imgServerSrc from "../../utils/imgServerSrc";
import videoServerSrc from "../../utils/videoServerSrv";
import ImgViewPopup from "../popup/ImgViewPopup";

const CardCover = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="cover">
        {data?.image ? (
          <img
            src={imgServerSrc(data?.image)}
            alt=""
            onClick={() => setIsOpen(true)}
          />
        ) : (
          data?.video && (
            <iframe src={videoServerSrc(data?.video)} allowFullScreen></iframe>
          )
        )}
      </article>
      <ImgViewPopup
        src={isOpen && imgServerSrc(data?.image)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CardCover;
