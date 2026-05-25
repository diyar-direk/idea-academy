import { aboutRouter } from "./about/router";
import { contactRouter } from "./contact/router";
import { homeRouter } from "./home/router";
import { loginRouter } from "./login/router";

export const homePagesRouter = [
  homeRouter,
  aboutRouter,
  contactRouter,
  loginRouter,
];
