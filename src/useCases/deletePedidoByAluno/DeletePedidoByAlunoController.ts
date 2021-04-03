import { Request, Response } from "express";

import { DeletePedidoByAlunoUseCase } from "./DeletePedidoByAlunoUseCase";

class DeletePedidoByAlunoController {
  constructor(private deletePedidoByAlunoUseCase: DeletePedidoByAlunoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_pedido } = request.params;

      await this.deletePedidoByAlunoUseCase.execute(id_pedido);

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeletePedidoByAlunoController };
