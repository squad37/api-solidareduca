import { Request, Response } from "express";
import { ListEscolasByNomeUseCase } from "./listEscolasByNomeUseCase";

class ListEscolasByNomeController {
  constructor(private listEscolasByNomeUseCase: ListEscolasByNomeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome } = request.params;

      const escolaBynome = await this.listEscolasByNomeUseCase.execute(nome);

      return response.status(200).json(escolaBynome);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListEscolasByNomeController };