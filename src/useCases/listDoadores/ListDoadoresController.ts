import { Request, Response } from "express";

import { ListDoadoresUseCase } from "./ListDoadoresUseCase";

class ListDoadoresController {
  constructor(private listDoadoresUseCase: ListDoadoresUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const doadores = await this.listDoadoresUseCase.execute();

      return response.status(200).json(doadores);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListDoadoresController };