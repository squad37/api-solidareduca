import { Request, Response } from "express";

import { ListDoadoresByRankingUseCase } from "./ListDoadoresByRankingUseCase";

class ListDoadoresByRankingController {
  constructor(
    private listDoadoresByRankingUseCase: ListDoadoresByRankingUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const doadores = await this.listDoadoresByRankingUseCase.execute();
      return response.status(200).json(doadores);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListDoadoresByRankingController };
