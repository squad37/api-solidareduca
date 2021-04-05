import { PedidosRepository } from "../../repositories/PedidosRepository";
import { UpdatePedidoDoadorEncontradoController } from "./UpdatePedidoDoadorEncontradoController";
import { UpdatePedidoDoadorEncontradoUseCase } from "./UpdatePedidoDoadorEncontradoUseCase";

export default (): UpdatePedidoDoadorEncontradoController => {
  const pedidosRepository = new PedidosRepository();
  const updatePedidoDoadorEncontradoUseCase = new UpdatePedidoDoadorEncontradoUseCase(
    pedidosRepository
  );
  const updatePedidoDoadorEncontradoController = new UpdatePedidoDoadorEncontradoController(
    updatePedidoDoadorEncontradoUseCase
  );

  return updatePedidoDoadorEncontradoController;
};
