import { PedidosRepository } from "../../repositories/PedidosRepository";
import { CancelPedidoByDoadorController } from "./CancelPedidoByDoadorController";
import { CancelPedidoByDoadorUseCase } from "./CancelPedidoByDoadorUseCase";

export default (): CancelPedidoByDoadorController => {
  const pedidosRepository = new PedidosRepository();
  const cancelPedidoByDoadorUseCase = new CancelPedidoByDoadorUseCase(
    pedidosRepository
  );
  const cancelPedidoByDoadorController = new CancelPedidoByDoadorController(
    cancelPedidoByDoadorUseCase
  );

  return cancelPedidoByDoadorController;
};
