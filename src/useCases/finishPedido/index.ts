import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";
import { FinishPedidoController } from "./finishPedidoController";
import { FinishPedidoUseCase } from "./finishPedidoUseCase";

export default (): FinishPedidoController => {
  const pedidosRepository = new PedidosRepository();
  const doadoresRepository = new DoadoresRepository();
  const escolasRepository = new EscolasRepository();
  const finishPedidoUseCase = new FinishPedidoUseCase(
    pedidosRepository,
    doadoresRepository,
    escolasRepository
  );
  const finishPedidoController = new FinishPedidoController(
    finishPedidoUseCase
  );

  return finishPedidoController;
};
