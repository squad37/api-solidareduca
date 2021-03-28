import { Router } from "express";

import createAlunosController from "../useCases/createAlunos";
import listAlunosController from "../useCases/listAlunos";

const alunosRoutes = Router();

alunosRoutes.post("/", (request, response) => {
  return createAlunosController().handle(request, response);
});

alunosRoutes.get("/", (request, response) => {
  return listAlunosController().handle(request, response);
});

export { alunosRoutes };
