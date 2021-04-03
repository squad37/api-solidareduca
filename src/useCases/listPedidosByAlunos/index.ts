import { AlunosRepository } from "../../repositories/AlunosRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";
import { ListPedidosByAlunosController } from "./ListPedidosByAlunosController";
import { ListPedidosByAlunosUseCase } from "./ListPedidosByAlunosUseCase";

export default (): ListPedidosByAlunosController => {
  const pedidosRepository = new PedidosRepository();
  const alunosRepository = new AlunosRepository();
  const listPedidosByAlunosUseCase = new ListPedidosByAlunosUseCase(
    pedidosRepository,
    alunosRepository
  );
  const listPedidosByAlunosController = new ListPedidosByAlunosController(
    listPedidosByAlunosUseCase
  );

  return listPedidosByAlunosController;
};
