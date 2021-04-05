import { Response, Request } from "express";

import { CancelPedidoByDoadorUseCase } from "./CancelPedidoByDoadorUseCase";

class CancelPedidoByDoadorController {
  constructor(
    private cancelPedidoByDoadorUseCase: CancelPedidoByDoadorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_pedido } = request.params;

      await this.cancelPedidoByDoadorUseCase.execute(id_pedido);

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CancelPedidoByDoadorController };
