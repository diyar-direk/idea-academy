import TableToolBar from "./../../../../../components/table_toolbar/TableToolBar";
import Table from "../../../../../components/table/Table";
import { useFetchData } from "./../../../../../hooks/useFetchData";
import endPoints from "../../../../../constants/endPoints";
import { useState } from "react";
import Add from "../../../../../components/table_toolbar/Add";
import Delete from "../../../../../components/table_toolbar/Delete";
import { pagesRouters } from "./../../../../../constants/pagesRouters";
import Filters from "./../../../../../components/table_toolbar/Filters";
import Search from "../../../../../components/table_toolbar/Search";
import dateFormatter from "./../../../../../utils/dateFormatter";
import { formatInputsData } from "./../../../../../utils/formatInputsData";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import DBkeys from "../../../../../constants/DBkeys";

const columns = [
  {
    name: "username",
    sort: true,
    headerName: "username",
  },
  {
    name: "createdAt",
    headerName: "createdAt",
    sort: true,
    getCell: ({ row }) => dateFormatter(row.createdAt, "fullDate"),
  },
  {
    name: "updatedAt",
    headerName: "updatedAt",
    sort: true,
    getCell: ({ row }) => dateFormatter(row.updatedAt, "fullDate"),
  },
  {
    name: "actions",
    headerName: "actions",
    getCell: ({ row }) => (
      <Link
        className="center"
        to={pagesRouters.dashboard.users.updatePassword(row[DBkeys.id])}
        state={{ ...row }}
      >
        <Button btnStyleType="transparent">
          <FontAwesomeIcon icon={faKey} />
        </Button>
      </Link>
    ),
  },
];

const AllUsers = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [sort, setSort] = useState("");

  const { data, isLoading, error, refetch } = useFetchData({
    endPoints: endPoints.users,
    page,
    "username[contains]": search,
    sort,
    ...formatInputsData(filters),
  });

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <div className="table-container">
          <TableToolBar title={"users"}>
            <Search setSearch={setSearch} />
            <Add path={pagesRouters.dashboard.users.add} />
            <Delete
              data={data?.data}
              selectedItems={selectedItems}
              setPage={setPage}
              setSelectedItems={setSelectedItems}
              endPoint={endPoints.users}
            />
            <Filters filters={filters} setFilters={setFilters} />
          </TableToolBar>
          <Table
            currentPage={page}
            data={data?.data}
            dataLength={data?.totalCount}
            loading={isLoading}
            onRefetch={refetch}
            error={error}
            selectable
            setPage={setPage}
            setSort={setSort}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            colmuns={columns}
            sortBy={sort}
            addBtnProps={{ to: pagesRouters.dashboard.users.add }}
          />
        </div>
      </main>
    </>
  );
};

export default AllUsers;
