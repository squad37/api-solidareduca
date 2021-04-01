import { Request, Response } from "express";

import { ListPedidosUseCase } from "./ListPedidosUseCase";

class ListPedidosController {
  constructor(private listPedidosUseCase: ListPedidosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const pedidos = await this.listPedidosUseCase.execute();
      return response.status(200).json(pedidos);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListPedidosController };
