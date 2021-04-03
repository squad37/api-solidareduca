import { Request, Response } from "express";

import { ListPedidosByDoadorUseCase } from "./ListPedidosByDoadorUseCase";

class ListPedidosByDoadorController {
  constructor(private listPedidosByDoadorUseCase: ListPedidosByDoadorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_doador } = request.params;
      const pedidos = await this.listPedidosByDoadorUseCase.execute(id_doador);

      return response.status(200).json(pedidos);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListPedidosByDoadorController };
