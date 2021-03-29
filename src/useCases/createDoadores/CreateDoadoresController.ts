import { Request, Response } from "express";

import { CreateDoadoresUseCase } from "./CreateDoadoresUseCase";

class CreateDoadoresController {
  constructor(private createDoadoresUseCase: CreateDoadoresUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        nome,
        email,
        cpf,
        cep,
        uf,
        endereco,
        nome_responsavel,
        
      } = request.body;

      let { id_doador } = request.body;
      id_doador = id_doador.toString();

      await this.createDoadoresUseCase.execute({
        nome,
        email,
        cpf,
        cep,
        uf,
        endereco,
        nome_responsavel,
        id_doador,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: "error.message" });
    }
  }
}

export { CreateDoadoresController };
