import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import { useInfiniteFetch } from "./../../../../../hooks/useInfiniteFetch";
import endPoints from "./../../../../../constants/endPoints";
const AllPosts = () => {
  const { data, isFetching, loadMoreRef } = useInfiniteFetch({
    endPoint: endPoints.posts,
  });

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main"></main>
    </>
  );
};

export default AllPosts;
