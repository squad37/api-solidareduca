import { Request, Response } from "express";

import { ListPedidosByAlunosAguardandoDoadorUseCase } from "./ListPedidosByAlunosAguardandoDoadorUseCase";

class ListPedidosByALunosAguardandoDoadorController {
  constructor(
    private listPedidosByAlunoAguardandoDoadorUseCase: ListPedidosByAlunosAguardandoDoadorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_aluno } = request.params;

      const pedidos = await this.listPedidosByAlunoAguardandoDoadorUseCase.execute(
        id_aluno
      );

      return response.status(200).json(pedidos);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListPedidosByALunosAguardandoDoadorController };
