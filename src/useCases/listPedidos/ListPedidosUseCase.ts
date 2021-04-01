import { Pedido } from "../../entities/Pedido";
import { PedidosRepository } from "../../repositories/PedidosRepository";

class ListPedidosUseCase {
  constructor(private pedidosRepository: PedidosRepository) {}

  async execute(): Promise<Pedido[]> {
    const pedidos = await this.pedidosRepository.list();

    if (pedidos.length === 0) {
      throw new Error("Nenhum pedido cadastrado!");
    }

    return pedidos;
  }
}

export { ListPedidosUseCase };
