import { AlunosRepository } from "../../repositories/AlunosRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";
import { ListPedidosByALunosAguardandoDoadorController } from "./ListPedidosByAlunosAguardandoDoadorController";
import { ListPedidosByAlunosAguardandoDoadorUseCase } from "./ListPedidosByAlunosAguardandoDoadorUseCase";

export default (): ListPedidosByALunosAguardandoDoadorController => {
  const pedidosRepository = new PedidosRepository();
  const alunosRepository = new AlunosRepository();
  const listPedidosByAlunoAguardandoDoadorUseCase = new ListPedidosByAlunosAguardandoDoadorUseCase(
    pedidosRepository,
    alunosRepository
  );
  const listPedidosByAlunosAguardandoDoadorController = new ListPedidosByALunosAguardandoDoadorController(
    listPedidosByAlunoAguardandoDoadorUseCase
  );

  return listPedidosByAlunosAguardandoDoadorController;
};
