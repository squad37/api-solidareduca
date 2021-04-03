import { Router } from "express";

import createPedidosController from "../useCases/createPedidos";
import deletePedidoByAlunoController from "../useCases/deletePedidoByAluno";
import finishPedidoController from "../useCases/finishPedido";
import listPedidosController from "../useCases/listPedidos";
import listPedidosByAlunosController from "../useCases/listPedidosByAlunos";
import listPedidosByAlunosAguardandoDoador from "../useCases/listPedidosByAlunosAguardandoDoador";
import listPedidosByDoadorController from "../useCases/listPedidosByDoador";
import updatePedidoDoadorEncontradoController from "../useCases/updatePedidoDoadorEncontrado";

const pedidosRoutes = Router();

pedidosRoutes.post("/", (request, response) => {
  return createPedidosController().handle(request, response);
});

pedidosRoutes.delete("/:id_pedido/aluno", (request, response) => {
  return deletePedidoByAlunoController().handle(request, response);
});

pedidosRoutes.put("/:id_pedido/doador-encontrado", (request, response) => {
  return updatePedidoDoadorEncontradoController().handle(request, response);
});

pedidosRoutes.put("/:id_pedido/doacao-concluida", (request, response) => {
  return finishPedidoController().handle(request, response);
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

pedidosRoutes.get("/doador/:id_doador", (request, response) => {
  return listPedidosByDoadorController().handle(request, response);
});

export { pedidosRoutes };
