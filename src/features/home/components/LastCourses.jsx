import MainTitle from "../../../components/main_title/MainTitle";
import IMG from "../../../assets/landing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pagesRouters } from "../../../constants/pagesRouters";
import { Link } from "react-router";
import Button from "../../../components/buttons/Button";
import { useQuery } from "@tanstack/react-query";
import endPoints from "./../../../constants/endPoints";
import APIClient from "./../../../utils/ApiClient";
import DBkeys from "../../../constants/DBkeys";
import Card from "./../../../components/cards/Card";

const api = new APIClient(endPoints.courses);
const HomeEvents = () => {
  const { data } = useQuery({
    queryKey: [endPoints.courses],
    queryFn: () => api.getAll({ limit: 3, sort: `-${DBkeys.createdAt}` }),
  });

  if (!data?.totalCount) return;

  return (
    <section className="container main-padding">
      <MainTitle
        main={"last courses"}
        secondry={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,"
        }
      />
      <div className="grid-3">
        {data?.data?.map((e) => (
          <Card key={e[DBkeys.id]} data={e} />
        ))}
      </div>

      {data?.totalCount > 3 && (
        <Link to={pagesRouters.courses.page}>
          <Button className="home-btn"> explorer all courses </Button>
        </Link>
      )}
    </section>
  );
};

export default HomeEvents;
