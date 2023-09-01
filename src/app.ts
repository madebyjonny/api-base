import express, { Request, Response } from "express";
import { userAPI } from "./users";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/users", userAPI);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
