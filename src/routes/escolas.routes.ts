import { Router } from "express";

import listEscolasController from "../useCases/listEscolas";
import listEscolasByRankingController from "../useCases/listEscolasByRanking";
import listEscolasByNomeController from "../useCases/listEscolasByNome";

const escolasRoutes = Router();

escolasRoutes.get("/", (request, response) => {
  return listEscolasController().handle(request, response);
});

escolasRoutes.get("/ranking", (request, response) => {
  return listEscolasByRankingController().handle(request, response);
});

escolasRoutes.get("/buscar", (request, response) => {
  return listEscolasByNomeController().handle(request, response);
});

export { escolasRoutes };
