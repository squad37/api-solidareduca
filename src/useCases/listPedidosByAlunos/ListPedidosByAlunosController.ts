import { Request, Response } from "express";

import { ListPedidosByAlunosUseCase } from "./ListPedidosByAlunosUseCase";

class ListPedidosByAlunosController {
  constructor(private listPedidosByALunosUseCase: ListPedidosByAlunosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_aluno } = request.params;

      const pedidos = await this.listPedidosByALunosUseCase.execute(id_aluno);

      return response.status(200).json(pedidos);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListPedidosByAlunosController };
