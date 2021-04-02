import { Response, Request } from "express";

import { updatePedidoDoadorEncontradoUseCase } from "./updatePedidoDoadorEncontradoUseCase";

class UpdatePedidoDoadorEncontradoController {
  constructor(
    private updatePedidoDoadorEncontradoUseCase: updatePedidoDoadorEncontradoUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_pedido } = request.params;
      const {
        id_doador,
        doador_anonimo,
        local_entrega,
        endereco_entrega,
        previsao_entrega,
      } = request.body;

      const doadorEncontrado = {
        id_pedido,
        id_doador,
        doador_anonimo,
        local_entrega,
        endereco_entrega,
        previsao_entrega,
      };

      await this.updatePedidoDoadorEncontradoUseCase.execute(doadorEncontrado);

      return response.status(200).json({
        message: "Pedido alterado com sucesso --- Situação: doador encontrado",
      });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdatePedidoDoadorEncontradoController };
