import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormatter from "./../../utils/dateFormatter";

const PostComponent = ({ data }) => {
  return (
    <div className="post-card">
      <img src={data?.image} alt="" />
      <div>
        <h2>{data?.title}</h2>
        <p>{data?.content}</p>
        <div>
          <FontAwesomeIcon icon={faClock} />
          {dateFormatter(data?.createdAt, "fullDate")}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
