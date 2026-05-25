import { memo, useCallback, useMemo } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DBkeys from "./../../constants/DBkeys";

const TableHeader = ({
  selectable,
  setSelectedItems,
  selectedItems,
  column,
  setSort,
  data,
  notSelectIf,
  sortBy,
}) => {
  const updateSortStatus = useCallback(
    (column) => {
      setSort((prev) => {
        const prevStatus = prev?.startsWith("-");
        return `${prevStatus ? "" : "-"}${column.name}`;
      });
    },
    [setSort],
  );

  const isAllSelected = useMemo(
    () => selectedItems?.size === data?.length && data?.length !== 0,
    [selectedItems, data],
  );

  const { user } = useAuth();
  const role = user?.role;
  const { t } = useTranslation();

  const selectAll = useCallback(() => {
    if (!data) return;

    setSelectedItems((prev) => {
      let allIds = [];

      if (notSelectIf)
        allIds = data
          .filter((item) => !notSelectIf(item))
          .map((item) => item?.[DBkeys.id]);
      else allIds = data.map((item) => item?.[DBkeys.id]);

      if (prev.size === allIds.length) {
        return new Set();
      }

      return new Set(allIds);
    });
  }, [data, setSelectedItems, notSelectIf]);

  return (
    <thead>
      <tr>
        {selectable && (
          <th>
            <div
              className={`${isAllSelected ? "active" : ""} checkbox select-all`}
              onClick={selectAll}
            />
          </th>
        )}

        {column?.map((th) => {
          if (th.hidden) return;

          const { allowedTo, headerName, sort, name } = th;

          if (!allowedTo || allowedTo?.includes(role))
            return (
              <th
                key={headerName}
                className={
                  !sortBy.endsWith(name)
                    ? ""
                    : sortBy?.startsWith("-")
                      ? "z-a"
                      : "a-z"
                }
              >
                {t(headerName)}
                {sort && (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="sort"
                    onClick={(e) => updateSortStatus(th, e)}
                  />
                )}
              </th>
            );
        })}
      </tr>
    </thead>
  );
};

export default memo(TableHeader);
