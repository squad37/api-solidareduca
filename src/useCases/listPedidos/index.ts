import { PedidosRepository } from "../../repositories/PedidosRepository";
import { ListPedidosController } from "./ListPedidosController";
import { ListPedidosUseCase } from "./ListPedidosUseCase";

// Cria todas as instâncias necessárias
export default (): ListPedidosController => {
  const pedidosRepository = new PedidosRepository();
  const listPedidosUseCase = new ListPedidosUseCase(pedidosRepository);
  const listPedidosController = new ListPedidosController(listPedidosUseCase);

  return listPedidosController;
};
