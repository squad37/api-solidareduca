import { AlunosRepository } from "../../repositories/AlunosRepository";
import { ListAlunosController } from "./ListAlunosController";
import { ListAlunosUseCase } from "./ListAlunosUseCase";

export default (): ListAlunosController => {
  const alunosRepository = new AlunosRepository();
  const listAlunosUseCase = new ListAlunosUseCase(alunosRepository);
  const listAlunosController = new ListAlunosController(listAlunosUseCase);

  return listAlunosController;
};
