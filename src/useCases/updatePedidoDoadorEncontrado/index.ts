import { PedidosRepository } from "../../repositories/PedidosRepository";
import { UpdatePedidoDoadorEncontradoController } from "./updatePedidoDoadorEncontradoController";
import { UpdatePedidoDoadorEncontradoUseCase } from "./updatePedidoDoadorEncontradoUseCase";

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
