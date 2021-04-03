import { AlunosRepository } from "../../repositories/AlunosRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";
import { ListAlunosByEscolasController } from "./ListAlunosByEscolasController";
import { ListAlunosByEscolasUseCase } from "./ListAlunosByEscolasUseCase";

// Cria todas as instâncias necessárias
export default (): ListAlunosByEscolasController => {
  const alunosRepository = new AlunosRepository();
  const escolasRepository = new EscolasRepository();
  const listAlunosByEscolasUseCase = new ListAlunosByEscolasUseCase(
    alunosRepository,
    escolasRepository
  );
  const listAlunosByEscolasController = new ListAlunosByEscolasController(
    listAlunosByEscolasUseCase
  );

  return listAlunosByEscolasController;
};
