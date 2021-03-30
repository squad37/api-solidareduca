import { Pedido } from "../../entities/Pedido";
import { AlunosRepository } from "../../repositories/AlunosRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";

class ListPedidosByAlunosUseCase {
  constructor(
    private pedidosRepository: PedidosRepository,
    private alunosRepository: AlunosRepository
  ) {}

  async execute(email: string): Promise<Pedido[]> {
    const alunoExists = await this.alunosRepository.findByEmail(email);

    if (!alunoExists) {
      throw new Error("Aluno não cadastrado!");
    }

    const pedidos = await this.pedidosRepository.findByAluno(alunoExists.id);
    return pedidos;
  }
}

export { ListPedidosByAlunosUseCase };
