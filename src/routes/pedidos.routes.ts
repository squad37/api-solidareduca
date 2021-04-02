import { Router } from "express";

import createPedidosController from "../useCases/createPedidos";
import listPedidosController from "../useCases/listPedidos";
import listPedidosByAlunosController from "../useCases/listPedidosByAlunos";
import listPedidosByAlunosAguardandoDoador from "../useCases/listPedidosByAlunosAguardandoDoador";
import updatePedidoDoadorEncontradoController from "../useCases/updatePedidoDoadorEncontrado";

const pedidosRoutes = Router();

pedidosRoutes.post("/", (request, response) => {
  return createPedidosController().handle(request, response);
});

pedidosRoutes.put("/:id_pedido/doador-encontrado", (request, response) => {
  return updatePedidoDoadorEncontradoController().handle(request, response);
});

pedidosRoutes.get("/", (request, response) => {
  return listPedidosController().handle(request, response);
});

pedidosRoutes.get("/:id_aluno", (request, response) => {
  return listPedidosByAlunosController().handle(request, response);
});

pedidosRoutes.get("/:id_aluno/aguardando-doador", (request, response) => {
  return listPedidosByAlunosAguardandoDoador().handle(request, response);
});

export { pedidosRoutes };
