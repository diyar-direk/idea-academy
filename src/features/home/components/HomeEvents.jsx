import MainTitle from "../../../components/main_title/MainTitle";
import IMG from "../../../assets/landing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pagesRouters } from "../../../constants/pagesRouters";
import { Link } from "react-router";
import Button from "../../../components/buttons/Button";
import { useQuery } from "@tanstack/react-query";
import endPoints from "./../../../constants/endPoints";
import APIClient from "./../../../utils/ApiClient";
import PostComponent from "./../../../components/posts/PostComponent";
import DBkeys from "../../../constants/DBkeys";

const api = new APIClient(endPoints.posts);
const HomeEvents = () => {
  const { data } = useQuery({
    queryKey: [endPoints.posts],
    queryFn: () => api.getAll({ limit: 3 }),
  });

  if (!data?.totalCount) return;

  return (
    <section className="container main-padding body-color">
      <MainTitle
        main={"last posts"}
        secondry={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,"
        }
      />
      <div className="grid-3 body-style-posts">
        {data?.data?.map((e) => (
          <PostComponent key={e[DBkeys.id]} data={e} />
        ))}
      </div>

      {data?.totalCount > 3 && (
        <Link to={pagesRouters.posts.page}>
          <Button className="home-btn"> explorer all posts </Button>
        </Link>
      )}
    </section>
  );
};

export default HomeEvents;
