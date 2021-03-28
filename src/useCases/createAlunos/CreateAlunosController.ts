import { Request, Response } from "express";

import { CreateAlunosUseCase } from "./CreateAlunosUseCase";

class CreateAlunosController {
  constructor(private createAlunosUseCase: CreateAlunosUseCase) {}

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

      let { id_escola } = request.headers;
      id_escola = id_escola.toString();

      await this.createAlunosUseCase.execute({
        nome,
        email,
        cpf,
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
