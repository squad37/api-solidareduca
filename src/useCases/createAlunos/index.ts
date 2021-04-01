import { AlunosRepository } from "../../repositories/AlunosRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";
import { CreateAlunosController } from "./CreateAlunosController";
import { CreateAlunosUseCase } from "./CreateAlunosUseCase";

// Cria todas as instâncias necessárias
export default (): CreateAlunosController => {
  const escolasRepository = new EscolasRepository();
  const alunosRepository = new AlunosRepository();
  const createAlunosUseCase = new CreateAlunosUseCase(
    alunosRepository,
    escolasRepository
  );
  const createAlunosController = new CreateAlunosController(
    createAlunosUseCase
  );

  return createAlunosController;
};
