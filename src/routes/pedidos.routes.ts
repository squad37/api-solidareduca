import { Router } from "express";

import createPedidosController from "../useCases/createPedidos";
import listPedidosController from "../useCases/listPedidos";

const pedidosRoutes = Router();

pedidosRoutes.post("/", (request, response) => {
  return createPedidosController().handle(request, response);
});

pedidosRoutes.get("/", (request, response) => {
  return listPedidosController().handle(request, response);
});

export { pedidosRoutes };
