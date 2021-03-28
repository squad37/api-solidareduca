import { EntityRepository, Repository, getRepository } from "typeorm";

import { Pedido } from "../entities/Pedido";

@EntityRepository(Pedido)
class PedidosRepository {
  private repository: Repository<Pedido>;

  constructor() {
    this.repository = getRepository(Pedido);
  }

  async list(): Promise<Pedido[]> {
    const pedidos = this.repository.find();
    return pedidos;
  }
}

export { PedidosRepository };
