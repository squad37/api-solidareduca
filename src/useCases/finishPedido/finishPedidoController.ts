import { Request, Response } from "express";

import { FinishPedidoUseCase } from "./finishPedidoUseCase";

class FinishPedidoController {
  constructor(private finishPedidoUseCase: FinishPedidoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_pedido } = request.params;
      const { mensagem_agradecimento } = request.body;

      await this.finishPedidoUseCase.execute({
        id_pedido,
        mensagem_agradecimento,
      });

      return response.status(200).json({
        message: "Alterado a situação do pedido para: Doação concluída",
      });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { FinishPedidoController };
