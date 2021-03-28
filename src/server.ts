import express from "express";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.get("/", (request, response) =>
  response.json({ message: "Projeto Solidareduca Iniciou!!!" })
);

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
