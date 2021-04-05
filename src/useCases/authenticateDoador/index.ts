import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { AuthenticateDoadorController } from "./AuthenticateDoadorController";
import { AuthenticateDoadorUseCase } from "./AuthenticateDoadorUseCase";

export default (): AuthenticateDoadorController => {
  const doadoresRepository = new DoadoresRepository();
  const authenticateDoadorUseCase = new AuthenticateDoadorUseCase(
    doadoresRepository
  );
  const authenticateDoadorController = new AuthenticateDoadorController(
    authenticateDoadorUseCase
  );

  return authenticateDoadorController;
};
