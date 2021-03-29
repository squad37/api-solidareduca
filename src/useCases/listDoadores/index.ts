import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { ListDoadoresController } from "./ListDoadoresController";
import { ListDoadoresUseCase } from "./ListDoadoresUseCase";

export default (): ListDoadoresController => {
  const doadoresRepository = new DoadoresRepository();
  const listDoadoresUseCase = new ListDoadoresUseCase(doadoresRepository);
  const listDoadoresController = new ListDoadoresController(listDoadoresUseCase);

  return listDoadoresController;
};
