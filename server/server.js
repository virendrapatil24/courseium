import express from "express";
import userRouter from "./routes/user";
import courseRouter from "./routes/course";
import { connect } from "mongoose";

app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  await connect(process.env.MONGO_URL);
  app.listen(process.env.PORT);
}

main();
