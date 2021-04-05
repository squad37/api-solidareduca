import { Request, Response } from "express";

import { CreateAlunosUseCase } from "./CreateAlunosUseCase";

class CreateAlunosController {
  constructor(private createAlunosUseCase: CreateAlunosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        nome,
        email,
        senha,
        cpf,
        telefone,
        cep,
        uf,
        endereco,
        nome_responsavel,
        id_escola,
      } = request.body;

      await this.createAlunosUseCase.execute({
        nome,
        email,
        senha,
        cpf,
        telefone,
        cep,
        uf,
        endereco,
        nome_responsavel,
        id_escola,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateAlunosController };
