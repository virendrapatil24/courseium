import express from "express";
import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js";
import { connect } from "mongoose";

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Application is up and running!" });
});

async function main() {
  await connect(process.env.MONGO_URL);
  app.listen(process.env.PORT);
}

main();
