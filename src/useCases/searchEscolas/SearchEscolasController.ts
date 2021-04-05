import { Request, Response } from "express";

import { SearchEscolasUseCase } from "./SearchEscolasUseCase";

class SearchEscolasController {
  constructor(private searchEscolasUseCase: SearchEscolasUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let { nome, uf } = request.query;

      if (nome === undefined) {
        nome = "";
      }

      if (uf === undefined) {
        uf = "";
      }

      nome = nome.toString();
      uf = uf.toString();

      const escolaBynome = await this.searchEscolasUseCase.execute(nome, uf);

      return response.status(200).json(escolaBynome);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { SearchEscolasController };
