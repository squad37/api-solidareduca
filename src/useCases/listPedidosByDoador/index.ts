import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";
import { ListPedidosByDoadorController } from "./ListPedidosByDoadorController";
import { ListPedidosByDoadorUseCase } from "./ListPedidosByDoadorUseCase";

export default (): ListPedidosByDoadorController => {
  const pedidosRepository = new PedidosRepository();
  const doadoresRepository = new DoadoresRepository();
  const listPedidosByDoadorUseCase = new ListPedidosByDoadorUseCase(
    pedidosRepository,
    doadoresRepository
  );
  const listPedidosByDoadorController = new ListPedidosByDoadorController(
    listPedidosByDoadorUseCase
  );

  return listPedidosByDoadorController;
};
