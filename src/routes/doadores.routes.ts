import { Router } from "express";

import createDoadoresController from "../useCases/createDoadores";
import listDoadoresController from "../useCases/listDoadores";

const doadoresRoutes = Router();

doadoresRoutes.post("/", (request, response) => {
  return createDoadoresController().handle(request, response);
});

doadoresRoutes.get("/", (request, response) => {
  return listDoadoresController().handle(request, response);
});

export { doadoresRoutes };
