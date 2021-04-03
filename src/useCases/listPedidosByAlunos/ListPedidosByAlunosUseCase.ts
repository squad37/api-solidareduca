import { Pedido } from "../../entities/Pedido";
import { AlunosRepository } from "../../repositories/AlunosRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";

class ListPedidosByAlunosUseCase {
  constructor(
    private pedidosRepository: PedidosRepository,
    private alunosRepository: AlunosRepository
  ) {}

  async execute(id_aluno: string): Promise<Pedido[]> {
    const alunoExists = await this.alunosRepository.findById(id_aluno);

    if (!alunoExists) {
      throw new Error("Aluno não cadastrado!");
    }

    const pedidos = await this.pedidosRepository.findByAluno(id_aluno);

    if (pedidos.length === 0) {
      throw new Error("Este aluno não possui nenhum pedido cadastrado!");
    }

    return pedidos;
  }
}

export { ListPedidosByAlunosUseCase };
