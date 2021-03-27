import { Request, Response } from "express";

import { ListEscolasUseCase } from "./ListEscolasUseCase";

class ListEscolasController {
  constructor(private listEscolasUseCase: ListEscolasUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const escolas = await this.listEscolasUseCase.execute();

    return response.status(200).json(escolas);
  }
}

export { ListEscolasController };
