import { EscolasRepository } from "../../repositories/EscolasRepository";
import { SearchEscolasController } from "./SearchEscolasController";
import { SearchEscolasUseCase } from "./SearchEscolasUseCase";

export default (): SearchEscolasController => {
  const escolasRepository = new EscolasRepository();
  const searchEscolasUseCase = new SearchEscolasUseCase(escolasRepository);
  const searchEscolasController = new SearchEscolasController(
    searchEscolasUseCase
  );

  return searchEscolasController;
};
