import { Router } from "express";

import authenticateDoadorController from "../useCases/authenticateDoador";
import createDoadoresController from "../useCases/createDoadores";
import listDoadoresController from "../useCases/listDoadores";
import listDoadoresByRankingController from "../useCases/listDoadoresByRanking";

const doadoresRoutes = Router();

doadoresRoutes.post("/", (request, response) => {
  return createDoadoresController().handle(request, response);
});

doadoresRoutes.post("/autenticacao", (request, response) => {
  return authenticateDoadorController().handle(request, response);
});

doadoresRoutes.get("/ranking", (request, response) => {
  return listDoadoresByRankingController().handle(request, response);
});

doadoresRoutes.get("/", (request, response) => {
  return listDoadoresController().handle(request, response);
});

export { doadoresRoutes };
