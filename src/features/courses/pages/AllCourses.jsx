import { useMemo, useState } from "react";
import { useInfiniteFetch } from "../../../hooks/useInfiniteFetch";
import { formatInputsData } from "../../../utils/formatInputsData";
import endPoints from "../../../constants/endPoints";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import DBkeys from "../../../constants/DBkeys";
import Skeleton from "../../../components/skeleton/Skeleton";
import CardsSearch from "../../../components/cards/CardsSearch";
import Card from "../../../components/cards/Card";

const AllCourses = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("-createdAt");

  const {
    data: d,
    isFetching,
    loadMoreRef,
  } = useInfiniteFetch({
    endPoint: endPoints.courses,
    limit: 2,
    sort,
    ...formatInputsData(filters),
  });

  const data = useMemo(
    () => ({
      courses: d?.pages?.flatMap((e) => e.data),
      total: d?.pages?.[0]?.totalCount,
    }),
    [d],
  );

  return (
    <>
      <Breadcrumbs />
      <section className="container main-padding">
        <CardsSearch
          total={data?.total}
          sort={sort}
          setSort={setSort}
          setFilters={setFilters}
        />
        <div className="grid-3">
          {data?.courses?.map((e) => (
            <Card data={e} key={e[DBkeys.id]} />
          ))}
          {isFetching && (
            <Skeleton height="100%" style={{ minHeight: "300px" }} />
          )}
          <div ref={loadMoreRef} />
        </div>
      </section>
    </>
  );
};

export default AllCourses;
