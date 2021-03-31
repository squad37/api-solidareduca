import { Router } from "express";

import listEscolasController from "../useCases/listEscolas";
import listEscolasByRankingController from "../useCases/listEscolasByRanking";

const escolasRoutes = Router();

escolasRoutes.get("/", (request, response) => {
  return listEscolasController().handle(request, response);
});

escolasRoutes.get("/ranking", (request, response) => {
  return listEscolasByRankingController().handle(request, response);
});

export { escolasRoutes };
