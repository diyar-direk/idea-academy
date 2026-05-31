import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./post.css";
import ImgViewPopup from "../popup/ImgViewPopup";
import PostCover from "./PostCover";
import PostInfo from "./PostInfo";
import PostActions from "./PostActions";

const PostComponent = ({ data, actions }) => {
  return (
    <>
      <div className="post-card">
        {actions && <PostActions data={data} />}
        <PostCover data={data} />
        <PostInfo data={data} />
      </div>
    </>
  );
};

export default PostComponent;
