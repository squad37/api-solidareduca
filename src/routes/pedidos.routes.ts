import { Router } from "express";

import listPedidosController from "../useCases/listPedidos";

const pedidosRoutes = Router();

pedidosRoutes.get("/", (request, response) => {
  return listPedidosController().handle(request, response);
});

export { pedidosRoutes };
