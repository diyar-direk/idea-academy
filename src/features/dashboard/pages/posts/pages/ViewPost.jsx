import { Link, useParams } from "react-router";
import APIClient from "../../../../../utils/ApiClient";
import endPoints from "../../../../../constants/endPoints";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import HandleError from "./../../../../../components/error/HandleError";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import CardView from "../../../../../components/card_data_view/CardView";
import IconButton from "../../../../../components/buttons/IconButton";
import { icons } from "../../../../../constants/icons";
import { pagesRouters } from "./../../../../../constants/pagesRouters";
const api = new APIClient(endPoints.posts);

const ViewPost = () => {
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [endPoints.posts, id],
    queryFn: () => api.getOne(id),
  });

  if (isLoading) return <Skeleton height="300px" />;

  if (error) return <HandleError error={error} refetch={refetch} />;

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: data?.title }]} />
      <main className="dashboard-main">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to={pagesRouters.dashboard.posts.update(id)}>
            <IconButton icon={icons.update} title="update" />
          </Link>
        </div>
        <CardView data={data} />
      </main>
    </>
  );
};

export default ViewPost;
