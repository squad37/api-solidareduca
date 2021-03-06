import { Router } from "express";

import authenticateAlunoController from "../useCases/authenticateAluno";
import createAlunosController from "../useCases/createAlunos";
import listAlunosController from "../useCases/listAlunos";
import listAlunosByEscolasController from "../useCases/listAlunosByEscolas";

const alunosRoutes = Router();

alunosRoutes.post("/", (request, response) => {
  return createAlunosController().handle(request, response);
});

alunosRoutes.post("/autenticacao", (request, response) => {
  return authenticateAlunoController().handle(request, response);
});

alunosRoutes.get("/", (request, response) => {
  return listAlunosController().handle(request, response);
});

alunosRoutes.get("/:id_escola", (request, response) => {
  return listAlunosByEscolasController().handle(request, response);
});

export { alunosRoutes };
