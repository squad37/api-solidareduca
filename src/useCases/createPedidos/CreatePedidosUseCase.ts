import { PedidosRepository } from "../../repositories/PedidosRepository";

interface IRequest {
  id_aluno: string;
  id_material: string;
  situacao: string;
  quantidade: string;
}

class CreatePedidosUseCase {
  constructor(private pedidosRepository: PedidosRepository) {}

  async execute(pedido: IRequest): Promise<void> {
    await this.pedidosRepository.create(pedido);
  }
}

export { CreatePedidosUseCase };
