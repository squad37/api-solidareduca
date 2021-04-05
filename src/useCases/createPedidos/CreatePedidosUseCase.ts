import { AlunosRepository } from "../../repositories/AlunosRepository";
import { MateriaisRepository } from "../../repositories/MateriaisRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";

interface IRequest {
  id_aluno: string;
  id_material: string;
  quantidade: string;
}

class CreatePedidosUseCase {
  constructor(
    private pedidosRepository: PedidosRepository,
    private alunosRepository: AlunosRepository,
    private materiaisRepository: MateriaisRepository
  ) {}

  async execute(pedido: IRequest): Promise<void> {
    const alunoExists = await this.alunosRepository.findById(pedido.id_aluno);
    if (!alunoExists) {
      throw new Error("Aluno não cadastrado!");
    }

    const materialExists = await this.materiaisRepository.findById(
      pedido.id_material
    );
    if (!materialExists) {
      throw new Error("Material não cadastrado");
    }

    await this.pedidosRepository.create(pedido);
  }
}

export { CreatePedidosUseCase };
