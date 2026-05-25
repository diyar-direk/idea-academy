import Input from "../../../../../components/inputs/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIClient from "../../../../../utils/ApiClient";
import endPoints from "../../../../../constants/endPoints";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import HandleError from "./../../../../../components/error/HandleError";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
const api = new APIClient(endPoints.users);

const UpdatePassword = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { username } = state || {};

  const handleUpdate = useMutation({
    mutationFn: (data) => {
      delete data.confirmPassword;
      api.updateData({ id, data });
    },
    onSuccess: () => nav(-1),
  });

  const formik = useFormik({
    initialValues: { confirmPassword: "", password: "" },
    validationSchema: Yup.object({
      password: Yup.string().required().min(6).max(30),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required(),
    }),
    onSubmit: handleUpdate.mutate,
  });

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: username }]} />
      <main className="dashboard-main">
        <form
          className="dashboard-form-container"
          onSubmit={formik.handleSubmit}
        >
          <div className="dashboard-form">
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

export default UpdatePassword;
