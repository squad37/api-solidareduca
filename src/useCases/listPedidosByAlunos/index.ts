import { AlunosRepository } from "../../repositories/AlunosRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";
import { ListPedidosByAlunosController } from "./listPedidosByAlunosController";
import { ListPedidosByAlunosUseCase } from "./listPedidosByAlunosUseCase";

export default () => {
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
