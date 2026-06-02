import Input from "../../../../../components/inputs/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIClient from "../../../../../utils/ApiClient";
import endPoints from "../../../../../constants/endPoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import { postsSchema } from "./../../../../../schemas/post";
import UploadPhoto from "../../../../../components/inputs/UploadPhoto";
const api = new APIClient(endPoints.posts);

const AddPost = () => {
  const query = useQueryClient();
  const nav = useNavigate();

  const handleAdd = useMutation({
    mutationFn: (v) => {
      const formData = new FormData();
      formData.append("title", v.title);
      formData.append("content", v.content);
      if (v.image?.file) {
        formData.append("image", v.image?.file);
      }
      if (v.video) {
        formData.append(
          "video",
          typeof v.video === "object" ? v.video?.file : v.video,
        );
      }
      api.addData(formData);
    },
    onSuccess: () => {
      query.invalidateQueries([endPoints.posts]);
      nav(-1);
    },
  });

  const formik = useFormik({
    initialValues: { title: "", content: "", image: null, video: "" },
    validationSchema: postsSchema,
    onSubmit: handleAdd.mutate,
  });

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <form
          className="dashboard-form-container"
          onSubmit={formik.handleSubmit}
        >
          <div className="dashboard-form flex-form">
            <Input
              label="title"
              placeholder="enter title"
              errorText={formik.errors.title}
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              containerProps={{ className: "w-100" }}
            />
            <Input
              label="content"
              placeholder="enter content"
              errorText={formik.errors.content}
              value={formik.values.content}
              onChange={formik.handleChange}
              name="content"
              elementType="textarea"
              rows={4}
              containerProps={{ className: "w-100" }}
            />
          </div>
          <div className="dashboard-form">
            <UploadPhoto
              errorText={formik.errors.image}
              notRequired
              accept="image/*"
              name="image"
              title="image"
              onChange={(i) => formik.setFieldValue("image", i)}
              value={formik.values.image}
            />
            <UploadPhoto
              errorText={formik.errors.video}
              notRequired
              accept="video/*"
              name="video"
              title="video"
              onChange={(i) => formik.setFieldValue("video", i)}
              value={formik.values.video}
            />
            {typeof formik.values.video !== "object" && (
              <Input
                label="video"
                placeholder="enter video"
                errorText={formik.errors.video}
                value={formik.values.video}
                onChange={formik.handleChange}
                name="video"
                containerProps={{ className: "w-100" }}
                notRequired
                type="url"
              />
            )}
          </div>
          <Button className="submit-btn" type="submit">
            save
          </Button>
        </form>
      </main>
    </>
  );
};

export default AddPost;
