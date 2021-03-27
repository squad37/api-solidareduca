import { Router } from "express";

import { listEscolasController } from "../useCases/listEscolas";

const escolasRoutes = Router();

escolasRoutes.get("/", (request, response) => {
  return listEscolasController.handle(request, response);
});

export { escolasRoutes };
