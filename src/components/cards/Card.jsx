import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
import ImgViewPopup from "../popup/ImgViewPopup";
import CardCover from "./CardCover";
import CardInfo from "./CardInfo";
import CardActions from "./CardActions";
import DBkeys from "../../constants/DBkeys";
import { Link } from "react-router";

const Card = ({ data, actions, endPoint, updateUrl, view }) => {
  return (
    <div className="post-card">
      {actions && (
        <CardActions updateUrl={updateUrl} data={data} endPoint={endPoint} />
      )}
      <Link to={view(data[DBkeys.id])} className="card-container">
        <CardCover data={data} />
        <CardInfo data={data} />
      </Link>
    </div>
  );
};

export default Card;
