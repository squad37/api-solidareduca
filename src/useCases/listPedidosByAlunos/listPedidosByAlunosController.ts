import { Request, Response } from "express";

import { ListPedidosByAlunosUseCase } from "./listPedidosByAlunosUseCase";

class ListPedidosByAlunosController {
  constructor(private listPedidosByALunosUseCase: ListPedidosByAlunosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body;

      const pedidos = await this.listPedidosByALunosUseCase.execute(email);

      return response.status(200).json(pedidos);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListPedidosByAlunosController };
