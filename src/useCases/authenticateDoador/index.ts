import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { AuthenticateDoadorController } from "./authenticateDoadorController";
import { AuthenticateDoadorUseCase } from "./authenticateDoadorUseCase";

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
