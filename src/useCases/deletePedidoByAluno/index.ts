import { PedidosRepository } from "../../repositories/PedidosRepository";
import { DeletePedidoByAlunoController } from "./DeletePedidoByAlunoController";
import { DeletePedidoByAlunoUseCase } from "./DeletePedidoByAlunoUseCase";

export default (): DeletePedidoByAlunoController => {
  const pedidosRepository = new PedidosRepository();
  const deletePedidoByAlunoUseCase = new DeletePedidoByAlunoUseCase(
    pedidosRepository
  );
  const deletePedidoByAlunoController = new DeletePedidoByAlunoController(
    deletePedidoByAlunoUseCase
  );

  return deletePedidoByAlunoController;
};
