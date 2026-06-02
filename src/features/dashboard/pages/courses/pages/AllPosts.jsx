import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import { useInfiniteFetch } from "./../../../../../hooks/useInfiniteFetch";
import endPoints from "./../../../../../constants/endPoints";
import { useMemo, useState } from "react";
import PostComponent from "../../../../../components/posts/PostComponent";
import DBkeys from "../../../../../constants/DBkeys";
import Skeleton from "./../../../../../components/skeleton/Skeleton";
import PostsSearch from "../../../../../components/posts/PostsSearch";
import { formatInputsData } from "./../../../../../utils/formatInputsData";

const AllPosts = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("-createdAt");

  const {
    data: d,
    isFetching,
    loadMoreRef,
  } = useInfiniteFetch({
    endPoint: endPoints.posts,
    limit: 1,
    sort,
    ...formatInputsData(filters),
  });

  const data = useMemo(
    () => ({
      posts: d?.pages?.flatMap((e) => e.data),
      total: d?.pages?.[0]?.totalCount,
    }),
    [d],
  );

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <PostsSearch
          total={data?.total}
          sort={sort}
          setSort={setSort}
          setFilters={setFilters}
        />
        <div className="grid-3">
          {data?.posts?.map((e) => (
            <PostComponent data={e} key={e[DBkeys.id]} actions />
          ))}
          {isFetching && (
            <Skeleton height="100%" style={{ minHeight: "300px" }} />
          )}
          <div ref={loadMoreRef} />
        </div>
      </main>
    </>
  );
};

export default AllPosts;
