import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import axiosInstance from "../../utils/axios";
import endPoints from "./../../constants/endPoints";
import AuthHelper from "../../utils/authHelper";
import { useNavigate } from "react-router";
import { pagesRouters } from "../../constants/pagesRouters";

const Login = () => {
  const setToken = new AuthHelper().setToken;
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (v) => {
      const { data } = await axiosInstance.post(endPoints.login, v);
      setToken(data?.accessToken);
      nav(pagesRouters.dashboard.statistics, { replace: true });
    },
  });

  return (
    <section className="container center login-page">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h3>Login</h3>
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
        <Button type="submit"> submit </Button>
      </form>
    </section>
  );
};

export default Login;
