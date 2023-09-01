import express, { Request, Response } from "express";

const app = express();

app.post("/", (req: Request, res: Response) => {
  res.send("Hello, from session");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, from session");
});

export const sessionAPI = app;
