import { Request, Response } from "express";

import { ListAlunosUseCase } from "./ListAlunosUseCase";

class ListAlunosController {
  constructor(private listAlunosUseCase: ListAlunosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const alunos = await this.listAlunosUseCase.execute();

      return response.status(200).json(alunos);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAlunosController };
