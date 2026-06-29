import { useParams } from "react-router";
import Card from "../../../components/cards/Card";
import DBkeys from "../../../constants/DBkeys";
import endPoints from "../../../constants/endPoints";
import { pagesRouters } from "../../../constants/pagesRouters";
import { useFetchData } from "./../../../hooks/useFetchData";
const MoreResults = () => {
  const { id } = useParams();
  const { data } = useFetchData({
    endPoints: endPoints.posts,
    limit: 3,
    "id[notIn][]": id,
  });

  if (!data?.totalCount) return;

  return (
    <div className="view-more-results grid-3">
      {data?.data?.map((e) => (
        <Card data={e} key={e[DBkeys.id]} view={pagesRouters.posts.view} />
      ))}
    </div>
  );
};

export default MoreResults;
