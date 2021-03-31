import { EntityRepository, Repository, getRepository } from "typeorm";

import { Pedido } from "../entities/Pedido";

interface ICreatePedidoDTO {
  id_aluno: string;
  id_material: string;
  quantidade: string;
}

@EntityRepository(Pedido)
class PedidosRepository {
  private repository: Repository<Pedido>;

  constructor() {
    this.repository = getRepository(Pedido);
  }

  async create(pedido: ICreatePedidoDTO): Promise<void> {
    const createPedido = await this.repository.create(pedido);
    this.repository.save(createPedido);
  }

  // Retorna todos os pedidos de um aluno
  async findByAluno(id_aluno: string): Promise<Pedido[]> {
    const pedidos = await this.repository.find({
      where: { id_aluno },
      order: {
        created_at: "ASC",
      },
    });
    return pedidos;
  }

  async list(): Promise<Pedido[]> {
    const pedidos = this.repository.find();
    return pedidos;
  }
}

export { PedidosRepository };
