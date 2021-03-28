import { Request, Response } from "express";

import { CreatePedidosUseCase } from "./CreatePedidosUseCase";

class CreatePedidosController {
  constructor(private createPedidosUseCase: CreatePedidosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_aluno, id_material, situacao, quantidade } = request.body;

      const pedido = {
        id_aluno,
        id_material,
        situacao,
        quantidade,
      };

      await this.createPedidosUseCase.execute(pedido);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreatePedidosController };
