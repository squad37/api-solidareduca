import { Response, Request } from "express";

import { AuthenticateDoadorUseCase } from "./AuthenticateDoadorUseCase";

class AuthenticateDoadorController {
  constructor(private authenticateDoadorUseCase: AuthenticateDoadorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, senha } = request.body;
      const authenticatedDoador = await this.authenticateDoadorUseCase.execute({
        email,
        senha,
      });

      return response.status(200).json(authenticatedDoador);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AuthenticateDoadorController };
