import { memo, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import DBkeys from "../../constants/DBkeys";

const TableBody = ({
  column,
  data,
  selectable,
  selectedItems,
  setSelectedItems,
  notSelectIf,
}) => {
  const { user } = useAuth();
  const { role } = user || {};

  const selectRowId = useCallback(
    (id) => {
      setSelectedItems((prev) => {
        const newIds = new Set(prev);
        if (newIds.has(id)) newIds.delete(id);
        else newIds.add(id);
        return newIds;
      });
    },
    [setSelectedItems],
  );

  const { t } = useTranslation();

  return (
    <tbody>
      {data?.map((row, i) => {
        const id = row[DBkeys.id];

        const className = `checkbox ${selectedItems?.has(id) ? "active" : ""}`;

        return (
          <tr key={id || i}>
            {selectable && (
              <td>
                {!notSelectIf(row) && (
                  <div onClick={() => selectRowId(id)} className={className} />
                )}
              </td>
            )}

            {column?.map((column) => {
              if (column?.hidden) return;

              const { allowedTo, name, className, getCell } = column;

              const cellProps = {
                row,
                user,
                t,
              };

              if (!allowedTo || allowedTo?.includes(role))
                return (
                  <td key={name} className={className || ""}>
                    {(getCell ? getCell(cellProps) : row[name]) || "غير محدد"}
                  </td>
                );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default memo(TableBody);
