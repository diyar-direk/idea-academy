import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import "./login.css";

const Login = () => {
  return (
    <section className="container center login-page">
      <form className="login-form">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          dolorem.
        </h3>
        <Input label="username" placeholder="enter username" />
        <Input label="password" placeholder="enter password" />
        <Button> submit </Button>
      </form>
    </section>
  );
};

export default Login;
