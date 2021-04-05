import { Request, Response } from "express";

import { AuthenticateAlunoUseCase } from "./AuthenticateAlunoUseCase";

class AuthenticateAlunoController {
  constructor(private authenticateAlunoUseCase: AuthenticateAlunoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, senha } = request.body;
      const authenticatedAluno = await this.authenticateAlunoUseCase.execute({
        email,
        senha,
      });

      return response.status(200).json(authenticatedAluno);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AuthenticateAlunoController };
