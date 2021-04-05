import { AlunosRepository } from "../../repositories/AlunosRepository";
import { MateriaisRepository } from "../../repositories/MateriaisRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";
import { CreatePedidosController } from "./CreatePedidosController";
import { CreatePedidosUseCase } from "./CreatePedidosUseCase";

export default (): CreatePedidosController => {
  const materiaisRepository = new MateriaisRepository();
  const alunosRepository = new AlunosRepository();
  const pedidosRepository = new PedidosRepository();
  const createPedidosUseCase = new CreatePedidosUseCase(
    pedidosRepository,
    alunosRepository,
    materiaisRepository
  );
  const createPedidosController = new CreatePedidosController(
    createPedidosUseCase
  );

  return createPedidosController;
};
