import { Router } from "express";

import createAlunosController from "../useCases/createAlunos";

const alunosRoutes = Router();

alunosRoutes.post("/", (request, response) => {
  return createAlunosController().handle(request, response);
});

export { alunosRoutes };
