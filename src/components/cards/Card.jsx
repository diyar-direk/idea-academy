import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
import ImgViewPopup from "../popup/ImgViewPopup";
import CardCover from "./CardCover";
import CardInfo from "./CardInfo";
import CardActions from "./CardActions";
import DBkeys from "../../constants/DBkeys";

const Card = ({ data, actions, endPoint, updateUrl }) => {
  return (
    <div className="post-card" key={data[DBkeys.id]}>
      {actions && (
        <CardActions updateUrl={updateUrl} data={data} endPoint={endPoint} />
      )}
      <CardCover data={data} />
      <CardInfo data={data} />
    </div>
  );
};

export default Card;
