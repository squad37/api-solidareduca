import { AlunosRepository } from "../../repositories/AlunosRepository";
import { AuthenticateAlunoController } from "./authenticateAlunoController";
import { AuthenticateAlunoUseCase } from "./authenticateAlunoUseCase";

export default (): AuthenticateAlunoController => {
  const alunosRepository = new AlunosRepository();
  const authenticateAlunoUseCase = new AuthenticateAlunoUseCase(
    alunosRepository
  );
  const authenticateAlunoController = new AuthenticateAlunoController(
    authenticateAlunoUseCase
  );

  return authenticateAlunoController;
};
