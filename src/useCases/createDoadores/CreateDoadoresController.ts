import { Request, Response } from "express";

import { CreateDoadoresUseCase } from "./CreateDoadoresUseCase";

class CreateDoadoresController {
  constructor(private createDoadoresUseCase: CreateDoadoresUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, email, senha, cpf, cep, uf, endereco } = request.body;

      const doador = {
        nome,
        email,
        senha,
        cpf,
        cep,
        uf,
        endereco,
      };

      await this.createDoadoresUseCase.execute(doador);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateDoadoresController };
