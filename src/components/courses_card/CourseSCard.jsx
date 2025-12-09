import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./courses.css";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import dateFormatter from "./../../../../school_sql/src/utils/dateFormatter";

const CourseSCard = ({ data }) => {
  return (
    <div className="course-card">
      <img src={data?.img} alt="" />
      <div>
        <p> {data?.type} </p>
        <h2>{data?.title}</h2>
        <span>{data?.discreption}</span>
        <article>
          <div>
            <FontAwesomeIcon icon={faClock} />
            {dateFormatter(data?.createdAt)}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            {data?.courseTime || "غير محدد"}
          </div>
        </article>
      </div>
    </div>
  );
};

export default CourseSCard;
