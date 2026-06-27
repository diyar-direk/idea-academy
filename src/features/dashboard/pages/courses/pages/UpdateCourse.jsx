import Input from "../../../../../components/inputs/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIClient from "../../../../../utils/ApiClient";
import endPoints from "../../../../../constants/endPoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import UploadPhoto from "../../../../../components/inputs/UploadPhoto";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import HandleError from "../../../../../components/error/HandleError";
import imgServerSrc from "../../../../../utils/imgServerSrc";
import videoServerSrc from "../../../../../utils/videoServerSrv";
import { courseSchema } from "../../../../../schemas/course";

const api = new APIClient(endPoints.courses);

const UpdateCourse = () => {
  const query = useQueryClient();
  const nav = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [endPoints.courses, id],
    queryFn: () => api.getOne(id),
  });

  const handleAdd = useMutation({
    mutationFn: (v) => {
      const formData = new FormData();
      formData.append("title", v.title);
      formData.append("content", v.content);
      if (v.image?.file) {
        formData.append("image", v.image?.file);
      }
      if (v.video?.file) {
        formData.append("video", v.video?.file);
      }
      api.updateData({ data: formData, id });
    },
    onSuccess: () => {
      query.invalidateQueries([endPoints.courses]);
      nav(-1);
    },
  });

  const formik = useFormik({
    initialValues: {
      title: data?.title || "",
      content: data?.content || "",
      image: null,
      video: data?.video || "",
    },
    validationSchema: courseSchema,
    onSubmit: handleAdd.mutate,
    enableReinitialize: true,
  });

  if (isLoading) return <Skeleton height="300px" />;
  if (error) return <HandleError error={error} refetch={refetch} />;

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: data?.title }]} />
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
          <div className="dashboard-form flex-form">
            <UploadPhoto
              errorText={formik.errors.image}
              notRequired
              accept="image/*"
              name="image"
              title="image"
              onChange={(i) => formik.setFieldValue("image", i)}
              value={formik.values.image}
              defaultImage={data?.image && imgServerSrc(data?.image)}
            />
            <UploadPhoto
              errorText={formik.errors.video}
              notRequired
              accept="video/*"
              name="video"
              title="video"
              onChange={(i) => formik.setFieldValue("video", i)}
              value={formik.values.video}
              defaultVideo={data?.video && videoServerSrc(data?.video)}
            />
          </div>
          <Button className="submit-btn" type="submit">
            save
          </Button>
        </form>
      </main>
    </>
  );
};

export default UpdateCourse;
