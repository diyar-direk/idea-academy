import { Link, useParams } from "react-router";
import APIClient from "../../../utils/ApiClient";
import endPoints from "../../../constants/endPoints";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./../../../components/skeleton/Skeleton";
import HandleError from "./../../../components/error/HandleError";
import Breadcrumbs from "./../../../components/breadcrumbs/Breadcrumbs";
import IconButton from "../../../components/buttons/IconButton";
import CardView from "./../../../components/card_data_view/CardView";
import MoreResults from "../components/MoreResults";
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
      <section className="container main-padding">
        <CardView data={data} />
        <MoreResults />
      </section>
    </>
  );
};

export default ViewPost;
