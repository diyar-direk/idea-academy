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
const api = new APIClient(endPoints.posts);

const AddPost = () => {
  const query = useQueryClient();
  const nav = useNavigate();

  const handleAdd = useMutation({
    mutationFn: (v) => {
      delete v.confirmPassword;
      api.addData(v);
    },
    onSuccess: () => {
      query.invalidateQueries([endPoints.posts]);
      nav(-1);
    },
  });

  const formik = useFormik({
    initialValues: { confirmPassword: "", password: "", username: "" },
    validationSchema: Yup.object({
      username: Yup.string().required().min(3).max(20),
      password: Yup.string().required().min(6).max(30),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required(),
    }),
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
          <div className="dashboard-form">
            <Input
              label="username"
              placeholder="enter username"
              errorText={formik.errors.username}
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
            />
            <Input
              label="password"
              placeholder="enter password"
              errorText={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              name="password"
            />
            <Input
              label="confirm password"
              placeholder="confirm password"
              errorText={formik.errors.confirmPassword}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              type="password"
              name="confirmPassword"
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

export default AddPost;
