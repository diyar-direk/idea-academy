import imgServerSrc from "../../utils/imgServerSrc";
import videoServerSrc from "../../utils/videoServerSrv";
import ImgViewPopup from "../popup/ImgViewPopup";

const CardCover = ({ data }) => {
  return (
    <>
      <article className="cover">
        {data?.image ? (
          <img src={imgServerSrc(data?.image)} alt="" />
        ) : (
          data?.video && (
            <iframe src={videoServerSrc(data?.video)} allowFullScreen></iframe>
          )
        )}
      </article>
    </>
  );
};

export default CardCover;
