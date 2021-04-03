import { PedidosRepository } from "../../repositories/PedidosRepository";

class CancelPedidoByDoadorUseCase {
  constructor(private pedidosRepository: PedidosRepository) {}

  async execute(id_pedido: string): Promise<void> {
    const pedidoExists = await this.pedidosRepository.findOne(id_pedido);

    if (!pedidoExists) {
      throw new Error("Pedido não encontrado!");
    }

    if (pedidoExists.situacao !== "Doador Encontrado") {
      throw new Error(
        "O Doador apenas consegue cancelar o pedido, se a situação do pedido for: Doador Encontrado"
      );
    }

    await this.pedidosRepository.cancelByDoador(id_pedido);
  }
}

export { CancelPedidoByDoadorUseCase };
