import { Request, Response } from "express";

import { ListEscolasByRankingUseCase } from "./ListEscolasByRankingUseCase";

class ListEscolasByRankingController {
  constructor(
    private listEscolasByRankingUseCase: ListEscolasByRankingUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const escolas = await this.listEscolasByRankingUseCase.execute();

      return response.status(200).json(escolas);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export { ListEscolasByRankingController };
