import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { CreateDoadoresController } from "./CreateDoadoresController";
import { CreateDoadoresUseCase } from "./CreateDoadoresUseCase";

// Cria todas as instâncias necessárias
export default (): CreateDoadoresController => {
  const doadoresRepository = new DoadoresRepository();
  const createDoadoresUseCase = new CreateDoadoresUseCase(doadoresRepository);
  const createDoadoresController = new CreateDoadoresController(
        createDoadoresUseCase
  );

  return createDoadoresController;
};