import { EscolasRepository } from "../../repositories/EscolasRepository";
import { ListEscolasByNomeController } from "./ListEscolasByNomeController";
import { ListEscolasByNomeUseCase } from "./ListEscolasByNomeUseCase";

export default (): ListEscolasByNomeController => {
  const escolasRepository = new EscolasRepository();
  const listEscolasByNomeUseCase = new ListEscolasByNomeUseCase(
    escolasRepository
  );
  const listEscolasByNomeController = new ListEscolasByNomeController(
    listEscolasByNomeUseCase
  );

  return listEscolasByNomeController;
};