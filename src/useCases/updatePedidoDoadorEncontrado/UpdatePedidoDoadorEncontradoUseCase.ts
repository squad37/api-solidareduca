import { PedidosRepository } from "../../repositories/PedidosRepository";

interface IRequest {
  id_pedido: string;
  id_doador: string;
  doador_anonimo: boolean;
  local_entrega: string;
  endereco_entrega: string;
  previsao_entrega: string;
}

class UpdatePedidoDoadorEncontradoUseCase {
  constructor(private pedidosRepository: PedidosRepository) {}

  async execute(doadorEncontrado: IRequest): Promise<void> {
    const pedidoExists = await this.pedidosRepository.findOne(
      doadorEncontrado.id_pedido
    );

    if (!pedidoExists) {
      throw new Error("Pedido não encontrado!");
    }

    if (pedidoExists.situacao !== "Aguardando Doador") {
      throw new Error("Este pedido não está Aguardando um Doador!");
    }

    const pedidoAtualizado = await this.pedidosRepository.updateDoadorEncontrado(
      doadorEncontrado
    );

    // Verifica se realmente o pedido foi atualizado para a situação = doador encontrado
    if (pedidoAtualizado.situacao !== "Doador Encontrado") {
      throw new Error("Pedido não atualizado!");
    }
  }
}

export { UpdatePedidoDoadorEncontradoUseCase };
