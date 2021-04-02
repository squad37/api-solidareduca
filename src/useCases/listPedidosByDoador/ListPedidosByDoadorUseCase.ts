import { Pedido } from "../../entities/Pedido";
import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { PedidosRepository } from "../../repositories/PedidosRepository";

class ListPedidosByDoadorUseCase {
  constructor(
    private pedidosRepository: PedidosRepository,
    private doadoresRepository: DoadoresRepository
  ) {}

  async execute(id_doador: string): Promise<Pedido[]> {
    const doadorExists = await this.doadoresRepository.findById(id_doador);

    if (!doadorExists) {
      throw new Error("Doador não cadastrado");
    }

    const pedidos = await this.pedidosRepository.findByDoador(id_doador);

    return pedidos;
  }
}

export { ListPedidosByDoadorUseCase };
