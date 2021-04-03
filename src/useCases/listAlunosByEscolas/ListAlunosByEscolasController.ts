import { Request, Response } from "express";

import { ListAlunosByEscolasUseCase } from "./ListAlunosByEscolasUseCase";

class ListAlunosByEscolasController {
  constructor(private listAlunosByEscolasUseCase: ListAlunosByEscolasUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_escola } = request.params;

      const alunosByEscola = await this.listAlunosByEscolasUseCase.execute(
        id_escola
      );

      return response.status(200).json(alunosByEscola);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAlunosByEscolasController };
