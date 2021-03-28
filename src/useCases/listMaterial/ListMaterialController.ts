
import { Request, Response } from "express";

import { ListMaterialUseCase } from "./ListMaterialUseCase";

class ListMaterialController {
  constructor(private listMaterialUseCase: ListMaterialUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const materiais = await this.listMaterialUseCase.execute();

      return response.status(200).json(materiais);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListMaterialController };
