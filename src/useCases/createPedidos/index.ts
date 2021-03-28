import { PedidosRepository } from "../../repositories/PedidosRepository";
import { CreatePedidosController } from "./CreatePedidosController";
import { CreatePedidosUseCase } from "./CreatePedidosUseCase";

export default (): CreatePedidosController => {
  const pedidosRepository = new PedidosRepository();
  const createPedidosUseCase = new CreatePedidosUseCase(pedidosRepository);
  const createPedidosController = new CreatePedidosController(
    createPedidosUseCase
  );

  return createPedidosController;
};
