import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";

interface IRequest {
  id_pedido: string;
  mensagem_agradecimento: string;
}

class FinishPedidoUseCase {
  constructor(
    private pedidosRepository: PedidosRepository,
    private doadoresRepository: DoadoresRepository,
    private escolasRepository: EscolasRepository
  ) {}

  async execute({
    id_pedido,
    mensagem_agradecimento,
  }: IRequest): Promise<void> {
    const pedidoExists = await this.pedidosRepository.findOne(id_pedido);

    if (!pedidoExists) {
      throw new Error("Pedido não encontrado!");
    }

    if (pedidoExists.situacao !== "Doador Encontrado") {
      throw new Error(
        "Apenas é possível finalizar o pedido se o mesmo estiver na situação: Doador Encontrado"
      );
    }

    const pedido = await this.pedidosRepository.finalizarPedido({
      id_pedido,
      mensagem_agradecimento,
    });

    if (pedido.situacao !== "Doação concluída") {
      throw new Error("Pedido não finalizado!");
    }

    // Soma 1 ponto ao doador
    await this.doadoresRepository.patchPontos(pedido.doador.id);

    // Se o pedido for entregue na Escola, soma 10 pontos para a Escola.
    if (pedido.local_entrega === "Escola") {
      await this.escolasRepository.soma10Pontos(pedido.aluno.escola.id);
    }
  }
}

export { FinishPedidoUseCase };
