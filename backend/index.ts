// index.ts
import express, { Express } from "express";
import cors from "cors";

import userRouter from "./routes/user";

const app: Express = express();
const port: Number = +process.env.PORT! || 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express TS!");
});

app.listen(port, () => {
  console.log(`📡 Server is listening on port: ${port}`);
});
