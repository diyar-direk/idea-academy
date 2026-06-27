import { useState } from "react";
import { icons } from "../../constants/icons";
import IconButton from "../buttons/IconButton";
import ConfirmPopUp from "../popup/ConfirmPopUp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../utils/ApiClient";
import DBkeys from "../../constants/DBkeys";
import { Link } from "react-router";

const PostActions = ({ data, endPoint, updateUrl }) => {
  const [deletePopup, setDeletePopup] = useState(false);
  const api = new APIClient(endPoint);

  const query = useQueryClient();

  const handleDelelte = useMutation({
    mutationFn: () => api.deleteOne(data[DBkeys.id]),
    onSuccess: () => {
      query.invalidateQueries([endPoint]);
      setDeletePopup(false);
    },
  });

  return (
    <>
      <div className="post-actions">
        <IconButton
          icon={icons.delete}
          color="delete"
          styleType="transparent"
          title="delete"
          onClick={() => setDeletePopup(true)}
        />
        <Link to={updateUrl(data[DBkeys.id])}>
          <IconButton
            icon={icons.update}
            color="update"
            styleType="transparent"
            title="update"
          />
        </Link>
      </div>
      <ConfirmPopUp
        isOpen={deletePopup}
        onConfirm={handleDelelte.mutate}
        onClose={() => setDeletePopup(false)}
      />
    </>
  );
};

export default PostActions;
