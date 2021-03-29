import { AlunosRepository } from "../../repositories/AlunosRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";
import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { CreateDoadoresController } from "./CreateDoadoresController";
import { CreateDoadoresUseCase } from "./CreateDoadoresUseCase";

// Cria todas as instâncias necessárias
export default (): CreateDoadoresController => {
  const escolasRepository = new EscolasRepository();
  const alunosRepository = new AlunosRepository();
  const doadoresRepository = new DoadoresRepository();
  const createDoadoresUseCase = new CreateDoadoresUseCase(
    alunosRepository,
    escolasRepository,
    doadoresRepository
  );
  const createDoadoresController = new CreateDoadoresController(
    createDoadoresUseCase
  );

  return createDoadoresController;
};