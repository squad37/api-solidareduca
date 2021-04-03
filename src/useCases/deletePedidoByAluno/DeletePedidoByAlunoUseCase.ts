import { PedidosRepository } from "../../repositories/PedidosRepository";

class DeletePedidoByAlunoUseCase {
  constructor(private pedidosRepository: PedidosRepository) {}

  async execute(id_pedido: string): Promise<void> {
    const pedidoExists = await this.pedidosRepository.findOne(id_pedido);

    if (!pedidoExists) {
      throw new Error("Pedido não encontrado!");
    }

    if (pedidoExists.situacao !== "Aguardando Doador") {
      throw new Error(
        "O pedido apenas pode ser cancelado pelo aluno se estiver na situação: Aguardando Doador. Se o pedido estiver na situação: Doador Encontrado, entre em contato com o Doador para avisar que não precisa mais do item, para posteriormente o Doador cancelar e o pedido voltar para a situação: Aguardando Doador"
      );
    }

    await this.pedidosRepository.deletedByAluno(id_pedido);
  }
}

export { DeletePedidoByAlunoUseCase };
