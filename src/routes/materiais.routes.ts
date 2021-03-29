import { Router } from "express";

import listMateriaisController from "../useCases/listMateriais";

const materiaisRoutes = Router();

materiaisRoutes.get("/", (request, response) => {
  return listMateriaisController().handle(request, response);
});

export { materiaisRoutes };
