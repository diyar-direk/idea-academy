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
import UploadPhoto from "../../../../../components/inputs/UploadPhoto";
import { courseSchema } from "../../../../../schemas/course";
import { editorHeader } from "../../../../../constants/editor";
import { Editor } from "primereact/editor";
const api = new APIClient(endPoints.courses);

const AddCourse = () => {
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
      if (v.video?.file) {
        formData.append("video", v.video?.file);
      }
      return api.addData(formData);
    },
    onSuccess: () => {
      query.invalidateQueries([endPoints.courses]);
      nav(-1);
    },
  });

  const formik = useFormik({
    initialValues: { title: "", content: "", image: null, video: "" },
    validationSchema: courseSchema,
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
            <div className="editor inp">
              <label className="required">{"posts_page.content"}</label>
              <Editor
                value={formik.values.content}
                onTextChange={(e) =>
                  formik.setFieldValue("content", e.htmlValue)
                }
                headerTemplate={editorHeader}
              />
              {formik.errors?.content && (
                <p className="field-error">{formik.errors?.content}</p>
              )}
            </div>
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
          </div>
          <Button className="submit-btn" type="submit">
            save
          </Button>
        </form>
      </main>
    </>
  );
};

export default AddCourse;
