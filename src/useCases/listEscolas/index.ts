import { EscolasRepository } from "../../repositories/EscolasRepository";
import { ListEscolasController } from "./ListEscolasController";
import { ListEscolasUseCase } from "./ListEscolasUseCase";

export default (): ListEscolasController => {
  const escolasRepository = new EscolasRepository();
  const listEscolasUseCase = new ListEscolasUseCase(escolasRepository);
  const listEscolasController = new ListEscolasController(listEscolasUseCase);

  return listEscolasController;
};
