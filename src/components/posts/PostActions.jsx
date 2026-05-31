import { useState } from "react";
import { icons } from "../../constants/icons";
import IconButton from "../buttons/IconButton";
import ConfirmPopUp from "../popup/ConfirmPopUp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../utils/ApiClient";
import endPoints from "../../constants/endPoints";
import DBkeys from "../../constants/DBkeys";
import { Link } from "react-router";
import { pagesRouters } from "./../../constants/pagesRouters";

const api = new APIClient(endPoints.posts);
const PostActions = ({ data }) => {
  const [deletePopup, setDeletePopup] = useState(false);

  const query = useQueryClient();

  const handleDelelte = useMutation({
    mutationFn: () => api.deleteOne(data[DBkeys.id]),
    onSuccess: () => {
      query.invalidateQueries([endPoints.posts]);
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
        <Link to={pagesRouters.dashboard.posts.update(data[DBkeys.id])}>
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
