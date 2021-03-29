import { Request, Response } from "express";

import { ListMateriaisUseCase } from "./ListMateriaisUseCase";

class ListMateriaisController {
  constructor(private listMateriaislUseCase: ListMateriaisUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const materiais = await this.listMateriaislUseCase.execute();

      return response.status(200).json(materiais);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListMateriaisController };
