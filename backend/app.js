//external import
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import createError from "http-errors";
import morgan from "morgan";

const app = express();

//internal import
import { errorResponse } from "./helpers/responseHandler.js";
import { userRouter } from "./routes/userRouter.js";

//middleware array
const middleware = [
  morgan("dev"),
  cors(),
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: "Sorry you have tried more than 5,try again later",
  }),

  express.urlencoded({ extended: true }),
  express.json(),
];

//use middleware
app.use(middleware);
app.use("/", userRouter);

//client error handling
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

//server error handling
app.use((err, req, res, next) => {
  return errorResponse(res, { statusCode: err.status, message: err.message });
});

export default app;
